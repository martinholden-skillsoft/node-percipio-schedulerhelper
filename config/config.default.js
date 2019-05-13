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
config.scheduler.activity.preferences.sftp.filenamePrefix = 'dataexport';
config.scheduler.activity.preferences.sftp.sftpConfigUuid = '00000000-0000-0000-0000-000000000000';
config.scheduler.activity.preferences.sftp.outputPath = 'exportpath';

// Default startAt from now, rounded to hours and plaus 4 hours
config.scheduler.startAt = moment()
  .round(1, 'hours')
  .add(1, 'hours')
  .toISOString();

// Default JSONATA Input
// Always create new object to override defaults, set any parameters to NULL that are not wanted
config.jsonata = {};
config.jsonata.path = 'jsonata';
config.jsonata.file = 'input.jsonata';

module.exports = config;
