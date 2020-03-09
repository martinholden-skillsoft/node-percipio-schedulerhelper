const moment = require('moment');
require('moment-round');

const config = require('./config.global');

config.customer = 'aesandbox01';

// Debug logging
// One of the supported default logging levels for winston - see https://github.com/winstonjs/winston#logging-levels
// config.debug.loggingLevel = 'debug';
// Debug logging
// One of the supported default logging levels for winston - see https://github.com/winstonjs/winston#logging-levels
// config.debug.loggingLevel = 'debug';
config.debug.path = `results/${config.customer}`;
config.debug.file = `${config.customer}.log`;

// Output
// Path to save data
config.output.path = `results/${config.customer}`;
// File name for the data
config.output.file = `${config.customer}.json`;
config.output.curl = `${config.customer}_curl.sh`;

// Scheduler Overrides
// config.scheduler.activity.preferences.typeFilter = 'CHANNEL';

config.orgid = '66713554-2fd4-4d68-8efe-247e343e30f6';

// The base name of the file that will be written to the SFTP directory
config.scheduler.activity.preferences.filename.filenamePrefix = 'aesandbox01tosharepoint';
// The end of the filename (e.g. json or csv)
config.scheduler.activity.preferences.filename.filenameSuffix = 'json';
// The path to the folder on the SFTP server to place the output file
config.scheduler.activity.preferences.filename.outputPath = '/Skillsoft/';
// Indicates that there should be no date timestamp appended at the end of filename.
// config.scheduler.activity.preferences.filename.includeDate = true;
// Indicates that there should be no millis appended at the end of filename
// config.scheduler.activity.preferences.filename.includeMillis = false;

config.scheduler.activity.preferences.sftp.sftpConfigUuid = '5bd11ab4-0bd6-45da-b11b-33e1775641f5';

// Default startAt from now, rounded to hours and plaus 4 hours
config.scheduler.startAt = moment()
  .add(20, 'minutes')
  .toISOString();

config.scheduler.interval = null;

// Default JSONATA Input
// Always create new object to override defaults, set any parameters to NULL that are not wanted
config.jsonata = {};
config.jsonata.path = 'jsonata';
config.jsonata.file = 'input.jsonata';

module.exports = config;
