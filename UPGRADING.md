# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## v2

No major changes to the API.

The reasoning behind a new major is based on updating to `level-packager@~2.0.0` and `leveldown@~2.0.0`. Where a major rewrite of the `levelup` API was done. Also, encodings are now taken care of by `encoding-down`, which comes bundled inside `level-packager`. This was previously handled by `levelup`.
