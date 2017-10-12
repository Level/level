# level

**Fast & simple storage - a Node.js-style LevelDB wrapper**

[![level badge](http://leveldb.org/img/badge.svg)](https://github.com/level/awesome)
[![npm](https://img.shields.io/npm/v/level.svg)](https://www.npmjs.com/package/level)
[![Build Status](https://secure.travis-ci.org/Level/level.png)](http://travis-ci.org/Level/level)
[![dependencies](https://david-dm.org/Level/level.svg)](https://david-dm.org/level/level)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dm/level.svg)](https://www.npmjs.com/package/level)
[![Greenkeeper badge](https://badges.greenkeeper.io/Level/level.svg)](https://greenkeeper.io/)

This is a convenience package that bundles the current release of **[LevelUP](https://github.com/level/levelup)** and **[LevelDOWN](https://github.com/level/leveldown)** and exposes LevelUP on its export.

Use this package to avoid having to explicitly install LevelDOWN when you just want plain old LevelDB from LevelUP.

```js
var level = require('level')

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = level('./mydb')

// 2) put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // ta da!
    console.log('name=' + value)
  })
})
```

See **[LevelUP](https://github.com/rvagg/node-levelup)** and **[LevelDOWN](https://github.com/rvagg/node-leveldown)** for more details.

<a name="contributing"></a>
Contributing
------------

Level is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [`CONTRIBUTING.md`](https://github.com/Level/community/blob/master/CONTRIBUTING.md) file for more details.

<a name="license"></a>
License &amp; Copyright
-------------------

Copyright (c) 2012-2017 **Level** [contributors](https://github.com/level/community#contributors).

Level is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included `LICENSE.md` file for more details.
