
// fs_module_examples.js
// Comprehensive Node.js fs module usage examples

const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);

// 1. Synchronous Methods
function syncExamples() {
    const filePath = path.join(__dirname, 'sync.txt');
    console.log(filePath);

    // Write file
    fs.writeFileSync(filePath, 'Synchronous write\n');

    // Append to file
    fs.appendFileSync(filePath, 'Appended line\n');

    // Read file
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log('Read Sync:', content);

    // Check existence
    if (fs.existsSync(filePath)) {
        console.log('File exists.');
    }

    // Rename file
    fs.renameSync(filePath, path.join(__dirname, 'sync-renamed.txt'));

    // Delete file
    fs.unlinkSync(path.join(__dirname, 'sync-renamed.txt'));
}

// 2. Asynchronous Callback Methods
function asyncCallbackExamples() {
    const filePath = path.join(__dirname, 'async.txt');

    fs.writeFile(filePath, 'Async callback write\n', (err) => {
        if (err) throw err;

        fs.appendFile(filePath, 'Another line\n', (err) => {
            if (err) throw err;

            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) throw err;
                console.log('Read Async:', data);

                fs.unlink(filePath, (err) => {
                    if (err) throw err;
                    console.log('Async file deleted');
                });
            });
        });
    });
}

// 3. Promises and async/await
async function promiseExamples() {
    const filePath = path.join(__dirname, 'promises.txt');
    try {
        await fsPromises.writeFile(filePath, 'Promise-based write\n');
        await fsPromises.appendFile(filePath, 'With appended text\n');
        const data = await fsPromises.readFile(filePath, 'utf-8');
        console.log('Read Promises:', data);
        await fsPromises.rename(filePath, path.join(__dirname, 'promises-renamed.txt'));
        await fsPromises.unlink(path.join(__dirname, 'promises-renamed.txt'));
    } catch (err) {
        console.error('Promise error:', err);
    }
}

// 4. Stream and Pipeline
function streamAndPipelineExamples() {
    const src = path.join(__dirname, 'bigfile.txt');
    const dest = path.join(__dirname, 'copied-bigfile.txt');

    // Create a big file
    const writer = fs.createWriteStream(src);
    for (let i = 0; i < 1000; i++) {
        writer.write(`Line ${i}\n`);
    }
    writer.end();

    // Use pipeline to copy
    writer.on('finish', () => {
        const readStream = fs.createReadStream(src);
        const writeStream = fs.createWriteStream(dest);

        streamPipeline(readStream, writeStream)
            .then(() => {
                console.log('Pipeline copy complete.');
                fs.unlinkSync(src);
                fs.unlinkSync(dest);
            })
            .catch(err => console.error('Pipeline error:', err));
    });
}

// Execute examples
syncExamples();
asyncCallbackExamples();
promiseExamples();
streamAndPipelineExamples();