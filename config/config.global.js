const moment = require('moment');
require('moment-round');

const config = {};

// Indicates a name for the configuration
config.customer = 'none';
config.startTimestamp = moment()
  .utc()
  .format('YYYYMMDD_HHmmss');

// DEBUG Options - Enables the check for Fiddler, if running the traffic is routed thru Fiddler
config.debug = {};
// Debug logging
// One of the supported default logging levels for winston - see https://github.com/winstonjs/winston#logging-levels
config.debug.loggingLevel = 'info';
config.debug.path = 'logs';
config.debug.file = `app_${config.startTimestamp}.log`;

// Default JSONATA Input
config.jsonata = {};
config.jsonata.path = 'jsonata';
config.jsonata.file = 'input.jsonata';

// Output
config.output = {};
// Path to save data
config.output.path = 'results';
// File name for the data
config.output.file = 'output.json';

// Scheduler Defaults
config.scheduler = {};
config.scheduler.activity = {};
config.scheduler.activity.activityName = 'CONTENT_DISCOVERY';
config.scheduler.preferences = {};
config.scheduler.preferences.jsonataTransform = '';
config.scheduler.preferences.sftp = {};
config.scheduler.preferences.sftp.filenamePrefix = 'dataexport';
config.scheduler.preferences.sftp.sftpConfigUuid = '00000000-0000-0000-0000-000000000000';
config.scheduler.preferences.sftp.outputPath = 'exportpath';
config.scheduler.preferences.csvOptions = {};
config.scheduler.preferences.csvOptions.delimiter = ',';
config.scheduler.preferences.csvOptions.header = true;
config.scheduler.preferences.csvOptions.newline = '\r\n';
config.scheduler.startAt = moment()
  .round(1, 'hours')
  .add(1, 'hours')
  .toISOString();
config.scheduler.interval = moment.duration(1, 'd').toISOString();
config.scheduler.jobConfig = {};
config.scheduler.jobConfig.type = 'ASYNC';
config.scheduler.jobConfig.maxAttemptCount = 5;
config.scheduler.jobConfig.timeout = 120;

module.exports = config;
