const requestForms = require('./request_forms');

exports.handler = async function(event, context) {
    const awsServerlessExpress = require('aws-serverless-express');
    const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const app = express();
    const router = express.Router();

    // Log all requests
    app.use(
        expressWinston.logger({
            transports: [new winston.transports.Console()],
            format: winston.format.combine(winston.format.json()),
            meta: true,
            expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
            colorize: false,
        })
    );

    router.use(cors());
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(awsServerlessExpressMiddleware.eventContext());

    app.use('/', router);
    app.use('/api/requests', requestForms.generateRoutes());
    const server = awsServerlessExpress.createServer(app);
    let response = await awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
    return response;
};
