// spawn/index.js
const spawn = require('child_process').spawn;


async function spawn_async(command, args, opts) {
  return new Promise((pass, fail) => {
    const exec = spawn(command, args, opts);

    let stdout = new Buffer('');
    let stderr = new Buffer('');

    exec.stdout.on('data', (data) => {
      stdout = Buffer.concat([stdout, data]);
    });

    exec.stderr.on('data', (data) => {
      stderr = Buffer.concat([stderr, data]);
    });

    exec.on('close', (code) => {
      if (code === 0) {
        pass(stdout.toString());
      } else {
        fail(stderr.toString());
      }
    });
  });
}
module.exports = spawn_async;
