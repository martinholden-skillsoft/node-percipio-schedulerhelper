const moment = require('moment');
require('moment-round');

const config = require('./config.global');

config.customer = 'default';

// Debug logging
// One of the supported default logging levels for winston - see https://github.com/winstonjs/winston#logging-levels
// config.debug.loggingLevel = 'debug';
// Debug logging
// One of the supported default logging levels for winston - see https://github.com/winstonjs/winston#logging-levels
// config.debug.loggingLevel = 'debug';
config.debug.path = 'results/output';
config.debug.file = `${config.customer}.log`;

// Output
// Path to save data
config.output.path = 'results/output';
// File name for the data
config.output.file = `${config.customer}.json`;

// Scheduler Overrides

config.scheduler.activity.preferences.typeFilter = 'CHANNEL';

// The base name of the file that will be written to the SFTP directory
config.scheduler.activity.preferences.filename.filenamePrefix = 'dataexport';
// The end of the filename (e.g. json or csv)
config.scheduler.activity.preferences.filename.filenameSuffix = 'csv';
// The path to the folder on the SFTP server to place the output file
config.scheduler.activity.preferences.filename.outputPath = 'catalog_export';
// Indicates that there should be no date timestamp appended at the end of filename.
config.scheduler.activity.preferences.filename.includeDate = false;
// Indicates that there should be no millis appended at the end of filename
config.scheduler.activity.preferences.filename.includeMillis = true;

config.scheduler.activity.preferences.sftp.sftpConfigUuid = '5bd11ab4-0bd6-45da-b11b-33e1775641f5';

// Default startAt from now, rounded to hours and plaus 4 hours
config.scheduler.startAt = moment()
  .round(1, 'hours')
  .add(1, 'hours')
  .toISOString();

config.scheduler.interval = null;

// Default JSONATA Input
// Always create new object to override defaults, set any parameters to NULL that are not wanted
config.jsonata = {};
config.jsonata.path = 'jsonata';
config.jsonata.file = 'input2.jsonata';

module.exports = config;
