/*
eslint linebreak-style: ["error", "windows"]
*/

const fs = require('fs');
const Path = require('path');
const _ = require('lodash');
const { jsmin } = require('jsmin');

// eslint-disable-next-line no-unused-vars
const pkginfo = require('pkginfo')(module);

const { transports } = require('winston');
const logger = require('./lib/logger');
const myutil = require('./lib/util');
const configuration = require('./config');

const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Process the report submit, polling and save the results
 *
 * @param {*} options
 * @returns
 */
const main = async configOptions => {
  const loggingOptions = {
    label: 'main'
  };

  const options = configOptions || null;

  if (_.isNull(options)) {
    logger.error('Invalid configuration', loggingOptions);
    return false;
  }

  // Set logging to silly level for dev
  if (NODE_ENV.toUpperCase() === 'DEVELOPMENT') {
    logger.level = 'silly';
  } else {
    logger.level = options.debug.loggingLevel;
  }

  // Create logging folder if one does not exist
  if (!_.isNull(options.debug.path)) {
    if (!fs.existsSync(options.debug.path)) {
      myutil.makeFolder(options.debug.path);
    }
  }

  // Create output folder if one does not exist
  if (!_.isNull(options.output.path)) {
    if (!fs.existsSync(options.output.path)) {
      myutil.makeFolder(options.output.path);
    }
  }

  // Add logging to a file
  logger.add(
    new transports.File({
      filename: Path.join(options.debug.path, options.debug.file),
      options: {
        flags: 'w'
      }
    })
  );

  logger.info(`Start ${module.exports.name}`, loggingOptions);

  logger.debug(`Options: ${JSON.stringify(options)}`, loggingOptions);

  // Load the JSONATA
  let jsonataFile = options.jsonata.file;
  if (!_.isNull(options.jsonata.path)) {
    jsonataFile = Path.join(options.jsonata.path, jsonataFile);
  }

  logger.info(`Loading JSONATA: ${jsonataFile}`, loggingOptions);

  let jsonataSource = fs.readFileSync(jsonataFile, 'utf8');
  jsonataSource = jsmin(jsonataSource);

  options.scheduler.activity.preferences.jsonataTransform = jsonataSource;

  // Save the transformed data
  let outputFile = options.output.file;
  if (!_.isNull(options.output.path)) {
    outputFile = Path.join(options.output.path, outputFile);
  }

  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
    logger.debug(`Deleted old Transformed JSON. Filename: ${outputFile}`, loggingOptions);
  }

  logger.info(`Writing Scheduler Template: ${outputFile}`, loggingOptions);
  fs.writeFileSync(outputFile, JSON.stringify(options.scheduler, null, 2));

  return true;
};

main(configuration);
