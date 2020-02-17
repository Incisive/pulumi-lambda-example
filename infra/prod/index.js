// Prod only resources
const api = require('./api');
exports.pulumiOutputs = { ...exports.pulumiOutputs, ...api.pulumiOutputs };
