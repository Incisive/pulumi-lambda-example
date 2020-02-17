const generateRoutes = function() {
    var express = require('express');
    const AWS = require('aws-sdk');
    const ssm = new AWS.SSM();

    var request_forms = express.Router();

    let seRoute = require('./handlers/example_handler'); // @NOTE: This is where it is breaking, this file is not being picked up and included in the final bundle
    request_forms.post('/social-engineering', seRoute);

    return request_forms;
};
exports.generateRoutes = generateRoutes;
