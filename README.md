# level

> Fast & simple storage. A Node.js-style `LevelDB` wrapper for Node.js, Electron and browsers.

[![level badge][level-badge]](https://github.com/Level/awesome)
[![npm](https://img.shields.io/npm/v/level.svg)](https://www.npmjs.com/package/level)
[![Node version](https://img.shields.io/node/v/level.svg)](https://www.npmjs.com/package/level)
[![Test](https://img.shields.io/github/workflow/status/Level/level/Test?label=test)](https://github.com/Level/level/actions/workflows/test.yml)
[![Coverage](https://img.shields.io/codecov/c/github/Level/level?label=&logo=codecov&logoColor=fff)](https://codecov.io/gh/Level/level)
[![Standard](https://img.shields.io/badge/standard-informational?logo=javascript&logoColor=fff)](https://standardjs.com)
[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)
[![Donate](https://img.shields.io/badge/donate-orange?logo=open-collective&logoColor=fff)](https://opencollective.com/level)

## Table of Contents

<details><summary>Click to expand</summary>

- [Introduction](#introduction)
- [Usage](#usage)
- [Supported Platforms](#supported-platforms)
- [API](#api)
  - [`db = level(location[, options[, callback]])`](#db--levellocation-options-callback)
  - [`db.supports`](#dbsupports)
  - [`db.open([callback])`](#dbopencallback)
  - [`db.close([callback])`](#dbclosecallback)
  - [`db.put(key, value[, options][, callback])`](#dbputkey-value-options-callback)
  - [`db.get(key[, options][, callback])`](#dbgetkey-options-callback)
  - [`db.getMany(keys[, options][, callback])`](#dbgetmanykeys-options-callback)
  - [`db.del(key[, options][, callback])`](#dbdelkey-options-callback)
  - [`db.batch(array[, options][, callback])` _(array form)_](#dbbatcharray-options-callback-array-form)
  - [`db.batch()` _(chained form)_](#dbbatch-chained-form)
  - [`db.status`](#dbstatus)
  - [`db.isOperational()`](#dbisoperational)
  - [`db.createReadStream([options])`](#dbcreatereadstreamoptions)
  - [`db.createKeyStream([options])`](#dbcreatekeystreamoptions)
  - [`db.createValueStream([options])`](#dbcreatevaluestreamoptions)
  - [`db.iterator([options])`](#dbiteratoroptions)
  - [`db.clear([options][, callback])`](#dbclearoptions-callback)
- [Promise Support](#promise-support)
- [Events](#events)
- [Contributing](#contributing)
- [Donate](#donate)
- [License](#license)

</details>

## Introduction

This is a convenience package that:

- exports a function that returns a [`levelup`](https://github.com/Level/levelup) instance when invoked
- bundles the current release of [`leveldown`][leveldown] and [`level-js`][level-js]
- leverages encodings using [`encoding-down`][encoding-down].

Use this package to avoid having to explicitly install `leveldown` or `level-js` when you just want to use `levelup`. It uses `leveldown` in Node.js or Electron and `level-js` in browsers (when bundled by [`browserify`](https://github.com/browserify/browserify), [`webpack`](https://webpack.js.org/), [`rollup`](https://rollupjs.org/) or similar). For a quick start, visit [`browserify-starter`](https://github.com/Level/browserify-starter) or [`webpack-starter`](https://github.com/Level/webpack-starter). Note: `rollup` currently fails to properly resolve the [`browser`](package.json) field.

## Usage

**If you are upgrading:** please see [`UPGRADING.md`](UPGRADING.md).

```js
const level = require('level')

// 1) Create our database, supply location and options.
//    This will create or open the underlying store.
const db = level('my-db')

// 2) Put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) Fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // Ta da!
    console.log('name=' + value)
  })
})
```

With `async/await`:

```js
await db.put('name', 'Level')
const value = await db.get('name')
```

## Supported Platforms

At the time of writing, `level` works in Node.js 10+ and Electron 5+ on Linux, Mac OS, Windows and FreeBSD, including any future Node.js and Electron release thanks to [N-API](https://nodejs.org/api/n-api.html), including ARM platforms like Raspberry Pi and Android, as well as in Chrome, Firefox, Edge, Safari, iOS Safari and Chrome for Android. For details, see [Supported Platforms](https://github.com/Level/leveldown#supported-platforms) of `leveldown` and [Browser Support](https://github.com/Level/level-js#browser-support) of `level-js`.

Binary keys and values are supported across the board.

## API

For options specific to [`leveldown`][leveldown] and [`level-js`][level-js] ("underlying store" from here on out), please see their respective READMEs.

### `db = level(location[, options[, callback]])`

The main entry point for creating a new `levelup` instance.

- `location` is a string pointing to the LevelDB location to be opened or in browsers, the name of the [`IDBDatabase`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase) to be opened.
- `options` is passed on to the underlying store.
- `options.keyEncoding` and `options.valueEncoding` are passed to [`encoding-down`][encoding-down], default encoding is `'utf8'`

Calling `level('my-db')` will also open the underlying store. This is an asynchronous operation which will trigger your callback if you provide one. The callback should take the form `function (err, db) {}` where `db` is the `levelup` instance. If you don't provide a callback, any read & write operations are simply queued internally until the store is fully opened.

This leads to two alternative ways of managing a `levelup` instance:

```js
level(location, options, function (err, db) {
  if (err) throw err

  db.get('foo', function (err, value) {
    if (err) return console.log('foo does not exist')
    console.log('got foo =', value)
  })
})
```

Versus the equivalent:

```js
// Will throw if an error occurs
var db = level(location, options)

db.get('foo', function (err, value) {
  if (err) return console.log('foo does not exist')
  console.log('got foo =', value)
})
```

The constructor function has a `.errors` property which provides access to the different error types from [`level-errors`](https://github.com/Level/errors#api). See example below on how to use it:

```js
level('my-db', { createIfMissing: false }, function (err, db) {
  if (err instanceof level.errors.OpenError) {
    console.log('failed to open database')
  }
})
```

Note that `createIfMissing` is an option specific to [`leveldown`][leveldown].

### `db.supports`

A read-only [manifest](https://github.com/Level/supports). Might be used like so:

```js
if (!db.supports.permanence) {
  throw new Error('Persistent storage is required')
}

if (db.supports.bufferKeys && db.supports.promises) {
  await db.put(Buffer.from('key'), 'value')
}
```

### `db.open([callback])`

Opens the underlying store. In general you shouldn't need to call this method directly as it's automatically called by [`level()`](#db--levellocation-options-callback). However, it is possible to reopen the store after it has been closed with [`close()`](#dbclosecallback).

If no callback is passed, a promise is returned.

### `db.close([callback])`

`close()` closes the underlying store. The callback will receive any error encountered during closing as the first argument.

A `levelup` instance has associated resources like file handles and locks. When you no longer need your `levelup` instance (for the remainder of your program) call `close()` to free up resources. The underlying store cannot be opened by multiple instances of `levelup` simultaneously.

If no callback is passed, a promise is returned.

### `db.put(key, value[, options][, callback])`

`put()` is the primary method for inserting data into the store. Both `key` and `value` can be of any type as far as `levelup` is concerned.

- `options` is passed on to the underlying store
- `options.keyEncoding` and `options.valueEncoding` are passed to [`encoding-down`][encoding-down], allowing you to override the key- and/or value encoding for this `put` operation.

If no callback is passed, a promise is returned.

### `db.get(key[, options][, callback])`

Get a value from the store by `key`. The `key` can be of any type. If it doesn't exist in the store then the callback or promise will receive an error. A not-found err object will be of type `'NotFoundError'` so you can `err.type == 'NotFoundError'` or you can perform a truthy test on the property `err.notFound`.

```js
db.get('foo', function (err, value) {
  if (err) {
    if (err.notFound) {
      // handle a 'NotFoundError' here
      return
    }
    // I/O or other error, pass it up the callback chain
    return callback(err)
  }

  // .. handle `value` here
})
```

- `options` is passed on to the underlying store.
- `options.keyEncoding` and `options.valueEncoding` are passed to [`encoding-down`][encoding-down], allowing you to override the key- and/or value encoding for this `get` operation.

If no callback is passed, a promise is returned.

### `db.getMany(keys[, options][, callback])`

Get multiple values from the store by an array of `keys`. The optional `options` object is the same as for [`get()`](#dbgetkey-options-callback).

The `callback` function will be called with an `Error` if the operation failed for any reason. If successful the first argument will be `null` and the second argument will be an array of values with the same order as `keys`. If a key was not found, the relevant value will be `undefined`.

If no callback is provided, a promise is returned.

### `db.del(key[, options][, callback])`

`del()` is the primary method for removing data from the store.

```js
db.del('foo', function (err) {
  if (err)
    // handle I/O or other error
});
```

- `options` is passed on to the underlying store.
- `options.keyEncoding` is passed to [`encoding-down`][encoding-down], allowing you to override the key encoding for this `del` operation.

If no callback is passed, a promise is returned.

### `db.batch(array[, options][, callback])` _(array form)_

`batch()` can be used for fast bulk-write operations (both _put_ and _delete_). The `array` argument should contain a list of operations to be executed sequentially, although as a whole they are performed as an atomic operation inside the underlying store.

Each operation is contained in an object having the following properties: `type`, `key`, `value`, where the _type_ is either `'put'` or `'del'`. In the case of `'del'` the `value` property is ignored. Any entries with a `key` of `null` or `undefined` will cause an error to be returned on the `callback` and any `type: 'put'` entry with a `value` of `null` or `undefined` will return an error.

```js
const ops = [
  { type: 'del', key: 'father' },
  { type: 'put', key: 'name', value: 'Yuri Irsenovich Kim' },
  { type: 'put', key: 'dob', value: '16 February 1941' },
  { type: 'put', key: 'spouse', value: 'Kim Young-sook' },
  { type: 'put', key: 'occupation', value: 'Clown' }
]

db.batch(ops, function (err) {
  if (err) return console.log('Ooops!', err)
  console.log('Great success dear leader!')
})
```

- `options` is passed on to the underlying store.
- `options.keyEncoding` and `options.valueEncoding` are passed to [`encoding-down`][encoding-down], allowing you to override the key- and/or value encoding of operations in this batch.

If no callback is passed, a promise is returned.

### `db.batch()` _(chained form)_

`batch()`, when called with no arguments will return a `Batch` object which can be used to build, and eventually commit, an atomic batch operation. Depending on how it's used, it is possible to obtain greater performance when using the chained form of `batch()` over the array form.

```js
db.batch()
  .del('father')
  .put('name', 'Yuri Irsenovich Kim')
  .put('dob', '16 February 1941')
  .put('spouse', 'Kim Young-sook')
  .put('occupation', 'Clown')
  .write(function () { console.log('Done!') })
```

**`batch.put(key, value[, options])`**

Queue a _put_ operation on the current batch, not committed until a `write()` is called on the batch. The `options` argument is passed on to the underlying store; `options.keyEncoding` and `options.valueEncoding` are passed to [`encoding-down`][encoding-down], allowing you to override the key- and/or value encoding of this operation.

This method may `throw` a `WriteError` if there is a problem with your put (such as the `value` being `null` or `undefined`).

**`batch.del(key[, options])`**

Queue a _del_ operation on the current batch, not committed until a `write()` is called on the batch. The `options` argument is passed on to the underlying store; `options.keyEncoding` is passed to [`encoding-down`][encoding-down], allowing you to override the key encoding of this operation.

This method may `throw` a `WriteError` if there is a problem with your delete.

**`batch.clear()`**

Clear all queued operations on the current batch, any previous operations will be discarded.

**`batch.length`**

The number of queued operations on the current batch.

**`batch.write([options][, callback])`**

Commit the queued operations for this batch. All operations not _cleared_ will be written to the underlying store atomically, that is, they will either all succeed or fail with no partial commits.

- `options` is passed on to the underlying store.
- `options.keyEncoding` and `options.valueEncoding` are not supported here.

If no callback is passed, a promise is returned.

### `db.status`

A readonly string that is one of:

- `new`     - newly created, not opened or closed
- `opening` - waiting for the underlying store to be opened
- `open`    - successfully opened the store, available for use
- `closing` - waiting for the store to be closed
- `closed`  - store has been successfully closed.

### `db.isOperational()`

Returns `true` if the store accepts operations, which in the case of `level(up)` means that `status` is either `opening` or `open`, because it opens itself and queues up operations until opened.

### `db.createReadStream([options])`

Returns a [Readable Stream](https://nodejs.org/docs/latest/api/stream.html#stream_readable_streams) of key-value pairs. A pair is an object with `key` and `value` properties. By default it will stream all entries in the underlying store from start to end. Use the options described below to control the range, direction and results.

```js
db.createReadStream()
  .on('data', function (data) {
    console.log(data.key, '=', data.value)
  })
  .on('error', function (err) {
    console.log('Oh my!', err)
  })
  .on('close', function () {
    console.log('Stream closed')
  })
  .on('end', function () {
    console.log('Stream ended')
  })
```

You can supply an options object as the first parameter to `createReadStream()` with the following properties:

- `gt` (greater than), `gte` (greater than or equal) define the lower bound of the range to be streamed. Only entries where the key is greater than (or equal to) this option will be included in the range. When `reverse=true` the order will be reversed, but the entries streamed will be the same.

- `lt` (less than), `lte` (less than or equal) define the higher bound of the range to be streamed. Only entries where the key is less than (or equal to) this option will be included in the range. When `reverse=true` the order will be reversed, but the entries streamed will be the same.

- `reverse` _(boolean, default: `false`)_: stream entries in reverse order. Beware that due to the way that stores like LevelDB work, a reverse seek can be slower than a forward seek.

- `limit` _(number, default: `-1`)_: limit the number of entries collected by this stream. This number represents a _maximum_ number of entries and may not be reached if you get to the end of the range first. A value of `-1` means there is no limit. When `reverse=true` the entries with the highest keys will be returned instead of the lowest keys.

- `keys` _(boolean, default: `true`)_: whether the results should contain keys. If set to `true` and `values` set to `false` then results will simply be keys, rather than objects with a `key` property. Used internally by the `createKeyStream()` method.

- `values` _(boolean, default: `true`)_: whether the results should contain values. If set to `true` and `keys` set to `false` then results will simply be values, rather than objects with a `value` property. Used internally by the `createValueStream()` method.

Underlying stores may have additional options.

### `db.createKeyStream([options])`

Returns a [Readable Stream](https://nodejs.org/docs/latest/api/stream.html#stream_readable_streams) of keys rather than key-value pairs. Use the same options as described for [`createReadStream()`](#dbcreatereadstreamoptions) to control the range and direction.

You can also obtain this stream by passing an options object to `createReadStream()` with `keys` set to `true` and `values` set to `false`. The result is equivalent; both streams operate in [object mode](https://nodejs.org/docs/latest/api/stream.html#stream_object_mode).

```js
db.createKeyStream()
  .on('data', function (data) {
    console.log('key=', data)
  })

// same as:
db.createReadStream({ keys: true, values: false })
  .on('data', function (data) {
    console.log('key=', data)
  })
```

### `db.createValueStream([options])`

Returns a [Readable Stream](https://nodejs.org/docs/latest/api/stream.html#stream_readable_streams) of values rather than key-value pairs. Use the same options as described for [`createReadStream()`](#dbcreatereadstreamoptions) to control the range and direction.

You can also obtain this stream by passing an options object to `createReadStream()` with `values` set to `true` and `keys` set to `false`. The result is equivalent; both streams operate in [object mode](https://nodejs.org/docs/latest/api/stream.html#stream_object_mode).

```js
db.createValueStream()
  .on('data', function (data) {
    console.log('value=', data)
  })

// same as:
db.createReadStream({ keys: false, values: true })
  .on('data', function (data) {
    console.log('value=', data)
  })
```

### `db.iterator([options])`

Returns an [`abstract-leveldown` iterator](https://github.com/Level/abstract-leveldown/#iterator), which is what powers the readable streams above. Options are the same as the range options of [`createReadStream()`](#dbcreatereadstreamoptions) and are passed to the underlying store.

These iterators support [`for await...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of):

```js
for await (const [key, value] of db.iterator()) {
  console.log(value)
}
```

### `db.clear([options][, callback])`

Delete all entries or a range. Not guaranteed to be atomic. Accepts the following range options (with the same rules as on iterators):

- `gt` (greater than), `gte` (greater than or equal) define the lower bound of the range to be deleted. Only entries where the key is greater than (or equal to) this option will be included in the range. When `reverse=true` the order will be reversed, but the entries deleted will be the same.
- `lt` (less than), `lte` (less than or equal) define the higher bound of the range to be deleted. Only entries where the key is less than (or equal to) this option will be included in the range. When `reverse=true` the order will be reversed, but the entries deleted will be the same.
- `reverse` _(boolean, default: `false`)_: delete entries in reverse order. Only effective in combination with `limit`, to remove the last N records.
- `limit` _(number, default: `-1`)_: limit the number of entries to be deleted. This number represents a _maximum_ number of entries and may not be reached if you get to the end of the range first. A value of `-1` means there is no limit. When `reverse=true` the entries with the highest keys will be deleted instead of the lowest keys.

If no options are provided, all entries will be deleted. The `callback` function will be called with no arguments if the operation was successful or with an `WriteError` if it failed for any reason.

If no callback is passed, a promise is returned.

## Promise Support

Each function taking a callback can also be used as a promise, if the callback is omitted. The only exception is the `level` constructor itself, which if no callback is passed will lazily open the underlying store in the background.

Example:

```js
const db = level('my-db')
await db.put('foo', 'bar')
console.log(await db.get('foo'))
```

## Events

`levelup` is an [`EventEmitter`](https://nodejs.org/api/events.html) and emits the following events.

| Event     | Description                 | Arguments            |
| :-------- | :-------------------------- | :------------------- |
| `put`     | Key has been updated        | `key, value` (any)   |
| `del`     | Key has been deleted        | `key` (any)          |
| `batch`   | Batch has executed          | `operations` (array) |
| `clear`   | Entries were deleted        | `options` (object)   |
| `opening` | Underlying store is opening | -                    |
| `open`    | Store has opened            | -                    |
| `ready`   | Alias of `open`             | -                    |
| `closing` | Store is closing            | -                    |
| `closed`  | Store has closed.           | -                    |

For example you can do:

```js
db.on('put', function (key, value) {
  console.log('inserted', { key, value })
})
```

## Contributing

[`Level/level`](https://github.com/Level/level) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

Support us with a monthly donation on [Open Collective](https://opencollective.com/level) and help us continue our work.

## License

[MIT](LICENSE)

[level-badge]: https://leveljs.org/img/badge.svg

[leveldown]: https://github.com/Level/leveldown

[level-js]: https://github.com/Level/level-js

[encoding-down]: https://github.com/Level/encoding-down
