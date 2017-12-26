const spawn = require('./');
const assert = require('assert');

(async () => {
  try {
    let ll, ll_fail;

    try {
      ll = await spawn('ls', ['-lh', '/usr']);
    } catch(err) {
      ll_fail = err;
    }

    assert.ok(ll);
    assert.ok(!ll_fail);

    let npm, npm_fail;

    try {
      npm = await spawn('npm', ['run', 'this-will-never-be-a-script']);
    } catch(err) {
      npm_fail = err;
    }

    assert.ok(!npm);
    assert.ok(npm_fail);

  } catch(err) {
    console.log(err);
    process.exit(1);
  }
})();
