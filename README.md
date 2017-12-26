@537/spawn
===

[![Greenkeeper badge](https://badges.greenkeeper.io/53seven/spawn.svg)](https://greenkeeper.io/)

[![build status](https://travis-ci.org/53seven/spawn.svg)](https://travis-ci.org/53seven/spawn)


A small promise wrapper around `child_process.spawn` so that you can `await` on command execs.

```
npm i @537/spawn


const spawn = require('@537/spawn');

let ll = await spawn('ll');

```

LICENSE
===

MIT
