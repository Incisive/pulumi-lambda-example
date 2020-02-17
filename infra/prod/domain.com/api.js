

const apiLambda = new aws.lambda.CallbackFunction('api', {
    role: role,
    callback: require('./lambda/api').handler,
    codePathOptions: {
        extraIncludePaths: ['./infra/prod/domain.com/lambda/api/request_forms.js'], // actually includes the file
        // extraIncludePaths: ['./request_forms.js'], // does not include the file in the final bundle
    },
    name: 'api',
});