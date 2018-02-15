# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## v2

No major changes to the `level` API.

The reasoning behind a new major is based on updating to `level-packager@~2.0.0` and `leveldown@~2.0.0`. Where a major rewrite of the `levelup` API was done. Also, encodings are now taken care of by `encoding-down`, which comes bundled inside `level-packager`. This was previously handled by `levelup`.

Also `levelup@2.0.0` was released with native `Promise` support, so you can do e.g.:

```js
await db.put('foo', 'bar')
console.log(await db.get('foo'))
```

For more information please check the corresponding `CHANGELOG.md` for:

* [`levelup`](https://github.com/Level/levelup/blob/master/CHANGELOG.md)
* [`leveldown`](https://github.com/Level/leveldown/blob/master/CHANGELOG.md)
* [`level-packager`](https://github.com/Level/packager/blob/master/CHANGELOG.md)
