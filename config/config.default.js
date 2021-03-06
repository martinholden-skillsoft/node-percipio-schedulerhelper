﻿const moment = require('moment');
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
config.output.curl = `${config.customer}_curl.sh`;

config.orgid = '558d15a4-11d7-4c34-a445-ffa2403a33fd';

// Scheduler Overrides
// config.scheduler.activity.preferences.typeFilter = 'CHANNEL';
config.scheduler.isActive = true;
config.scheduler.name = 'Production Export for partlms0346 use. Martin Holden';

// The base name of the file that will be written to the SFTP directory
config.scheduler.activity.preferences.filename.filenamePrefix = 'item_data_CLAQ1NA';
// The end of the filename (e.g. json or csv)
config.scheduler.activity.preferences.filename.filenameSuffix = 'txt';
// The path to the folder on the SFTP server to place the output file
config.scheduler.activity.preferences.filename.outputPath = '/Skillsoft/itemconn/sf/prod';
// Indicates that there should be no date timestamp appended at the end of filename.
// config.scheduler.activity.preferences.filename.includeDate = true;
// Indicates that there should be no millis appended at the end of filename
// config.scheduler.activity.preferences.filename.includeMillis = false;

config.scheduler.activity.preferences.sftp.sftpConfigUuid = '6010b48d-7f1e-42f5-ae95-6c269e75727a';

// Default startAt from now, rounded to hours and plaus 4 hours
config.scheduler.startAt = moment()
  .add(10, 'minutes')
  .toISOString();

config.scheduler.interval = null;

// Default JSONATA Input
// Always create new object to override defaults, set any parameters to NULL that are not wanted
config.jsonata = {};
config.jsonata.path = 'jsonata';
config.jsonata.file = 'input.jsonata';

module.exports = config;
