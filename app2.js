const fs = require('fs');
const content = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, content, 'utf8', function (err) {
        if (err) {
            console.error(err);
            content.exit(1);
        }
        else {
            console.log('Successfully wrote to file');
        }
    });
}

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}
cat(process.argv[2]);