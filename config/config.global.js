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
config.output.curl = 'curl.sh';

config.orgid = '';

// Scheduler Defaults
config.scheduler = {};

config.scheduler.isActive = true;
config.scheduler.name = `A unique name ${config.startTimestamp}`;

config.scheduler.activity = {};
config.scheduler.activity.activityName = 'CONTENT_DISCOVERY';
config.scheduler.activity.preferences = {};
config.scheduler.activity.preferences.action = 'CONTENT_EXPORT';

config.scheduler.activity.preferences.jsonataTransform = '';

config.scheduler.activity.preferences.filename = {};
// The base name of the file that will be written to the SFTP directory
config.scheduler.activity.preferences.filename.filenamePrefix = 'dataexport';
// The end of the filename (e.g. json or csv)
config.scheduler.activity.preferences.filename.filenameSuffix = 'csv';
// The path to the folder on the SFTP server to place the output file
config.scheduler.activity.preferences.filename.outputPath = 'exportpath';
// Indicates that there should be no date timestamp appended at the end of filename.
config.scheduler.activity.preferences.filename.includeDate = false;
// Indicates that there should be no millis appended at the end of filename
config.scheduler.activity.preferences.filename.includeMillis = false;

config.scheduler.activity.preferences.sftp = {};
config.scheduler.activity.preferences.sftp.sftpConfigUuid = '00000000-0000-0000-0000-000000000000';
config.scheduler.activity.preferences.csvOptions = {};
config.scheduler.activity.preferences.csvOptions.delimiter = ',';
config.scheduler.activity.preferences.csvOptions.header = true;
config.scheduler.activity.preferences.csvOptions.newline = '\r\n';
config.scheduler.startAt = moment()
  .round(1, 'hours')
  .add(1, 'hours')
  .toISOString();
config.scheduler.interval = moment.duration(1, 'd').toISOString();
config.scheduler.jobConfig = {};
config.scheduler.jobConfig.type = 'ASYNC';
config.scheduler.jobConfig.maxAttemptCount = 5;
config.scheduler.jobConfig.timeout = 720;

module.exports = config;
