const event = process.env.npm_lifecycle_event;

// For More Information On the Npm_Lifecyle_event and how it is being used here see
// https://medium.com/@brianhan/use-this-npm-variable-as-a-flag-for-your-build-scripts-31069f5e2e57

if (event === 'start:dev') {
    module.exports = require('./build/webpack.config.dev');
    console.info('--> ./build/webpack.config.dev.js');
}
else if (event === 'start:prod') {
    module.exports = require('./build/webpack.config.prod');
    console.info('--> ./build/webpack.config.prod.js');
}
else if(event === 'stats') {
    module.exports = require('./build/webpack.config.stats');
}