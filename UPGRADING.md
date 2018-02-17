# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## v3

No breaking changes to the `level` API.

This is an upgrade to `leveldown@^3.0.0` which is based on `abstract-leveldown@~4.0.0` which in turn contains breaking changes to [`.batch()`](https://github.com/Level/abstract-leveldown/commit/a2621ad70571f6ade9d2be42632ece042e068805). Though this is negated by `levelup`, we decided to release a new major version in the event of dependents reaching down into `db.db`.

## v2

No breaking changes to the `level` API.

The parts that make up `level` have been refactored to increase modularity. This is an upgrade to `leveldown@~2.0.0` and `level-packager@~2.0.0`, which in turn upgraded to `levelup@^2.0.0`. The responsibility of encoding keys and values moved from [`levelup`](https://github.com/Level/levelup) to [`encoding-down`](https://github.com/Level/encoding-down), which comes bundled with [`level-packager`](https://github.com/Level/packager).

Being a convenience package, `level` glues the parts back together to form a drop-in replacement for the users of `levelup@1`, while staying fully compatible with `level@1`. One thing we do get for free, is native Promise support.

```js
const db = level('db')
await db.put('foo', 'bar')
console.log(await db.get('foo'))
```

This does not affect the existing callback API, functionality-wise or performance-wise.

For more information please check the corresponding `CHANGELOG.md` for:

* [`levelup`](https://github.com/Level/levelup/blob/master/CHANGELOG.md)
* [`leveldown`](https://github.com/Level/leveldown/blob/master/CHANGELOG.md)
* [`level-packager`](https://github.com/Level/packager/blob/master/CHANGELOG.md)
