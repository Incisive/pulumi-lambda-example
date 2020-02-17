const iam = require('./infra/iam');
const s3 = require('./infra/s3');

const prodOutputs = require('./infra/prod');
module.exports = { ...module.exports, ...prodOutputs };
