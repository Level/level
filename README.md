# level

**Universal [`abstract-level`](https://github.com/Level/abstract-level) database for Node.js and browsers.** This is a convenience package that exports [`classic-level`](https://github.com/Level/classic-level) in Node.js and [`browser-level`](https://github.com/Level/browser-level) in browsers, making it an ideal entry point to start creating lexicographically sorted key-value databases.

> :pushpin: Which module should I use? What is `abstract-level`? Head over to the [FAQ](https://github.com/Level/community#faq).

[![level badge][level-badge]](https://github.com/Level/awesome)
[![npm](https://img.shields.io/npm/v/level.svg)](https://www.npmjs.com/package/level)
[![Node version](https://img.shields.io/node/v/level.svg)](https://www.npmjs.com/package/level)
[![Test](https://img.shields.io/github/actions/workflow/status/Level/level/test.yml?branch=master&label=test)](https://github.com/Level/level/actions/workflows/test.yml)
[![Coverage](https://img.shields.io/codecov/c/github/Level/level?label=\&logo=codecov\&logoColor=fff)](https://codecov.io/gh/Level/level)
[![Standard](https://img.shields.io/badge/standard-informational?logo=javascript\&logoColor=fff)](https://standardjs.com)
[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)
[![Community](https://img.shields.io/badge/community-join-%2370B99E?logo=github)](https://github.com/Level/community/issues)
[![Donate](https://img.shields.io/badge/donate-orange?logo=open-collective\&logoColor=fff)](https://opencollective.com/level)

## Usage

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

```js
const { Level } = require('level')

// Create a database
const db = new Level('example', { valueEncoding: 'json' })

// Add an entry with key 'a' and value 1
await db.put('a', 1)

// Add multiple entries
await db.batch([{ type: 'put', key: 'b', value: 2 }])

// Get value of key 'a': 1
const value = await db.get('a')

// Iterate entries with keys that are greater than 'a'
for await (const [key, value] of db.iterator({ gt: 'a' })) {
  console.log(value) // 2
}
```

TypeScript type declarations are included and cover the methods that are common between `classic-level` and `browser-level`. Usage from TypeScript requires generic type parameters.

<details><summary>TypeScript example</summary>

```ts
// Specify types of keys and values (any, in the case of json).
// The generic type parameters default to Level<string, string>.
const db = new Level<string, any>('./db', { valueEncoding: 'json' })

// All relevant methods then use those types
await db.put('a', { x: 123 })

// Specify different types when overriding encoding per operation
await db.get<string, string>('a', { valueEncoding: 'utf8' })

// Though in some cases TypeScript can infer them
await db.get('a', { valueEncoding: db.valueEncoding('utf8') })

// It works the same for sublevels
const abc = db.sublevel('abc')
const xyz = db.sublevel<string, any>('xyz', { valueEncoding: 'json' })
```

</details>

## Install

With [npm](https://npmjs.org) do:

```bash
npm install level
```

For use in browsers, this package is best used with [`browserify`](https://github.com/browserify/browserify), [`webpack`](https://webpack.js.org/), [`rollup`](https://rollupjs.org/) or similar bundlers. For a quick start, visit [`browserify-starter`](https://github.com/Level/browserify-starter) or [`webpack-starter`](https://github.com/Level/webpack-starter).

## Supported Platforms

At the time of writing, `level` works in Node.js 18+ and Electron 30+ on Linux, Mac OS and Windows, including any future Node.js and Electron release thanks to [Node-API](https://nodejs.org/api/n-api.html), including ARM platforms like Raspberry Pi and Android, as well as in Chromium, Firefox and Safari. For details, see [Supported Platforms](https://github.com/Level/classic-level#supported-platforms) of `classic-level` and [Browser Support](https://github.com/Level/browser-level#browser-support) of `browser-level`.

Binary keys and values are supported across the board.

## API

The API of `level` follows that of [`abstract-level`](https://github.com/Level/abstract-level). For additional options and methods specific to [`classic-level`](https://github.com/Level/classic-level) or [`browser-level`](https://github.com/Level/browser-level), please see their respective READMEs. The documentation below only covers the common constructor.

### `db = new Level(location[, options])`

Create a new database or open an existing database. The `location` argument must be a directory path (relative or absolute) where LevelDB will store its files, or in browsers, the name of the [`IDBDatabase`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase) to be opened.

## Contributing

[`Level/level`](https://github.com/Level/level) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

Support us with a monthly donation on [Open Collective](https://opencollective.com/level) and help us continue our work.

## License

[MIT](LICENSE)

[level-badge]: https://leveljs.org/img/badge.svg
