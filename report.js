const newman = require('newman');

newman.run({
    collection: require('./collection/collection.json'), // Pointing to local JSON file.
    environment: require('./collection/environment.json'), // Pointing to local env file.
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to 'newman/' in the current working directory.
        }
    }
}, function (err) {
    if (err) {throw err;}
    console.log('collection run complete');
});