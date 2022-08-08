const fs = require('fs');

const content = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function (err) {
        if (err) {
            console.error(err);
            content.exit(1);
        }
        else {
            console.log('Successfully wrote to file');
        }
    });
}

cat(process.argv[2]);
