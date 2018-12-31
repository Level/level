# Changelog

If you are upgrading, please see the [upgrade guide](UPGRADING.md).

## [Unreleased][unreleased]

### Changed

- Upgrade `leveldown` from `^4.0.0` to `^5.0.0-1` ([#133](https://github.com/Level/level/issues/133)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `level-packager` from `^3.0.0` to `^5.0.0` ([#113](https://github.com/Level/level/issues/113), [#131](https://github.com/Level/level/issues/131)) ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@vweevers**](https://github.com/vweevers))
- Prefer `var` over `const` in README ([`f032b6c`](https://github.com/Level/level/commit/f032b6c)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Upgrade `standard` devDependency from `^11.0.0` to `^12.0.0` ([#118](https://github.com/Level/level/issues/118)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Tweak copyright years for less maintenance ([`0b9c8ad`](https://github.com/Level/level/commit/0b9c8ad)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Integrate `level-js` for browser support ([#135](https://github.com/Level/level/issues/135)) ([**@vweevers**](https://github.com/vweevers))
- Add appveyor ([#112](https://github.com/Level/level/issues/112)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Enable OSX on Travis ([#111](https://github.com/Level/level/issues/111)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add `nyc` and `coveralls` devDependencies ([#115](https://github.com/Level/level/issues/115)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add `hallmark` devDependency ([#134](https://github.com/Level/level/issues/134)) ([**@vweevers**](https://github.com/vweevers))

### Removed

- Remove node 6 and 9 ([#129](https://github.com/Level/level/issues/129), [`2bf1d3f`](https://github.com/Level/level/commit/2bf1d3f)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Remove contributors from `package.json` ([`f37252d`](https://github.com/Level/level/commit/f37252d)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [4.0.0] - 2018-05-23

### Changed

- Update `leveldown` to `^4.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `level-packager` to `^3.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Switch to `opencollective-postinstall` ([**@mateodelnorte**](https://github.com/mateodelnorte))

### Removed

- Remove node 4 from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [3.0.2] - 2018-05-23

### Changed

- Switch to `opencollective-postinstall` ([**@mateodelnorte**](https://github.com/mateodelnorte))

## [3.0.1] - 2018-05-05

### Added

- Travis: add 10 ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Changed

- Update `standard` to `^11.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Fix typo in README ([**@rasmuserik**](https://github.com/rasmuserik))

### Fixed

- Fix postinstall failures with OpenCollective ([**@vweevers**](https://github.com/vweevers))

## [3.0.0] - 2018-02-17

### Added

- Travis: add 9 ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: add table of contents ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Changed

- Update `leveldown` to `^3.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.1.2] - 2018-01-26

### Added

- Add OpenCollective ([**@monkeywithacupcake**](https://github.com/monkeywithacupcake))

### Changed

- README: change Travis badge from png to svg ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.1.1] - 2017-12-13

### Changed

- README: document `.errors` property ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.1.0] - 2017-12-06

### Changed

- Update `level-packager` to `^2.0.2` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `leveldown` to `^2.1.1` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.0.1] - 2017-11-11

### Changed

- Restore node 4 ([**@vweevers**](https://github.com/vweevers))

## [2.0.0] - 2017-10-17

### Added

- Add `standard` for linting ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: copy over docs from `levelup` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: add node badge ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Changed

- Update `level-packager` to `~2.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `leveldown` to `~2.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.0.0-rc3] - 2017-09-16

### Changed

- Update `level-packager` to `2.0.0-rc3` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `leveldown` to `~1.8.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.0.0-rc2] - 2017-09-12

### Changed

- Update `level-packager` to `2.0.0-rc2` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `leveldown` to `~1.7.2` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.0.0-rc1] - 2017-09-06

### Added

- README: add Greenkeeper badge ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Travis: add 8 ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Changed

- Update `level-packager` to `2.0.0-rc1` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Travis: remove 0.12, 4, 5, and 7 ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.7.0] - 2017-05-17

### Changed

- Update `leveldown` to `~1.7.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.6.0] - 2017-02-06

### Added

- Travis: add 7 ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Changed

- Update copyright year to 2017 ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `leveldown` to `~1.6.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Travis: remove 0.10 ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.5.0] - 2016-10-16

### Added

- Travis: add 6 ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Changed

- Use gcc 4.8 on Travis
- Update `leveldown` to `~1.5.0` ([**@juliangruber**](https://github.com/juliangruber))

### Removed

- Travis: remove 1.0, 1.8, 2 and 3 ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.4.0] - 2015-11-27

### Added

- Travis: add 1.0, 2, 3, 4 and 5 ([**@ralphtheninja**](https://github.com/ralphtheninja))
- README: add dependency badge ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Changed

- Update `level-packager` to `~1.2.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.3.0] - 2015-07-29

### Changed

- Update `leveldown` to `~1.4.0` ([**@ArtskydJ**](https://github.com/ArtskydJ))

## [1.2.0] - 2015-06-24

### Changed

- Update `level-packager` to `~1.1.0` ([**@timoxley**](https://github.com/timoxley))
- Update `leveldown` to `~1.3.0` ([**@timoxley**](https://github.com/timoxley))

## [1.1.0] - 2015-06-02

### Changed

- Update `leveldown` to `~1.2.2` for prebuilt binaries ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.0.0] - 2015-05-19

### Changed

- Update `level-packager` to `~1.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.0.0-0] - 2015-05-16

### Changed

- Use `nvm` again on Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Moved `CONTRIBUTING.md` and contributors to `level/community` repository ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Use `level-packager@next` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `leveldown` to `~1.0.6` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [0.19.1] - 2015-05-05

### Changed

- Use `n` instead of `nvm` on Travis for iojs support on native modules ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [0.19.0] - 2015-05-05

### Changed

- Switch to plain MIT license ([**@andrewrk**](https://github.com/andrewrk))
- README: update nodeico badge ([**@rvagg**](https://github.com/rvagg))
- README: update logo and copyright ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update `level-packager` to `~0.19.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [0.18.0] - 2013-11-18

### Added

- Add Travis ([**@rvagg**](https://github.com/rvagg))

### Changed

- Update `level-packager` to `~0.18.0` ([**@rvagg**](https://github.com/rvagg))
- Update `leveldown` to `~0.10.0` ([**@rvagg**](https://github.com/rvagg))

## [0.17.0-1] - 2013-10-09

### Changed

- Use `level-packager` instead of `levelup` ([**@rvagg**](https://github.com/rvagg))
- Run tests in `level-packager` using `tape` ([**@rvagg**](https://github.com/rvagg))

## [0.17.0] - 2013-10-01

### Changed

- Update `levelup` to `~0.17.0` ([**@rvagg**](https://github.com/rvagg))
- Update `leveldown` to `~0.9.0` ([**@rvagg**](https://github.com/rvagg))

## [0.16.0] - 2013-09-10

### Added

- Add [**@substack**](https://github.com/substack) to contributors ([**@rvagg**](https://github.com/rvagg))

### Changed

- Update `levelup` to `~0.16.0` ([**@rvagg**](https://github.com/rvagg))
- Update repository and homepage in `package.json` ([**@rvagg**](https://github.com/rvagg))

## [0.15.0] - 2013-08-26

### Changed

- README: tweaks ([**@rvagg**](https://github.com/rvagg))
- Update `levelup` to `~0.15.0` ([**@rvagg**](https://github.com/rvagg))
- Update `leveldown` to `~0.8.0` ([**@rvagg**](https://github.com/rvagg))

## [0.14.0] - 2013-08-19

### Added

- README: add npm downloads badge ([**@rvagg**](https://github.com/rvagg))

### Changed

- Update `levelup` to `~0.14.0` ([**@rvagg**](https://github.com/rvagg))

## [0.13.0] - 2013-08-11

### Changed

- Update `levelup` to `~0.13.0` ([**@rvagg**](https://github.com/rvagg))
- Update `leveldown` to `~0.7.0` ([**@rvagg**](https://github.com/rvagg))

## [0.12.0] - 2013-07-25

### Changed

- Update `levelup` to `~0.12.0` ([**@rvagg**](https://github.com/rvagg))
- Update `leveldown` to `~0.6.2` ([**@rvagg**](https://github.com/rvagg))

## [0.11.0] - 2013-07-17

### Added

- Add [**@pgte**](https://github.com/pgte) to contributors ([**@rvagg**](https://github.com/rvagg))
- README: add npm badge ([**@rvagg**](https://github.com/rvagg))

### Changed

- Update `levelup` to `~0.11.0` ([**@rvagg**](https://github.com/rvagg))

## [0.10.0] - 2013-06-14

### Changed

- Update `levelup` to `~0.10.0` ([**@rvagg**](https://github.com/rvagg))
- Update `leveldown` to `~0.6.0` ([**@rvagg**](https://github.com/rvagg))

## [0.9.0] - 2013-05-27

### Changed

- Update `levelup` to `~0.9.0` ([**@rvagg**](https://github.com/rvagg))
- Update `leveldown` to `~0.5.0` ([**@rvagg**](https://github.com/rvagg))

## 0.8.0 - 2013-05-19

:seedling: Initial release.

[unreleased]: https://github.com/level/level/compare/v4.0.0...HEAD

[4.0.0]: https://github.com/level/level/compare/v3.0.1...v4.0.0

[3.0.2]: https://github.com/level/level/compare/v3.0.1...v3.0.2

[3.0.1]: https://github.com/level/level/compare/v3.0.0...v3.0.1

[3.0.0]: https://github.com/level/level/compare/v2.1.2...v3.0.0

[2.1.2]: https://github.com/level/level/compare/v2.1.1...v2.1.2

[2.1.1]: https://github.com/level/level/compare/v2.1.0...v2.1.1

[2.1.0]: https://github.com/level/level/compare/v2.0.1...v2.1.0

[2.0.1]: https://github.com/level/level/compare/v2.0.0...v2.0.1

[2.0.0]: https://github.com/level/level/compare/v2.0.0-rc3...v2.0.0

[2.0.0-rc3]: https://github.com/level/level/compare/v2.0.0-rc2...v2.0.0-rc3

[2.0.0-rc2]: https://github.com/level/level/compare/v2.0.0-rc1...v2.0.0-rc2

[2.0.0-rc1]: https://github.com/level/level/compare/v1.7.0...v2.0.0-rc1

[1.7.0]: https://github.com/level/level/compare/v1.6.0...v1.7.0

[1.6.0]: https://github.com/level/level/compare/v1.5.0...v1.6.0

[1.5.0]: https://github.com/level/level/compare/v1.4.0...v1.5.0

[1.4.0]: https://github.com/level/level/compare/v1.3.0...v1.4.0

[1.3.0]: https://github.com/level/level/compare/v1.2.0...v1.3.0

[1.2.0]: https://github.com/level/level/compare/v1.1.0...v1.2.0

[1.1.0]: https://github.com/level/level/compare/v1.0.0...v1.1.0

[1.0.0]: https://github.com/level/level/compare/v1.0.0-0...v1.0.0

[1.0.0-0]: https://github.com/level/level/compare/v0.19.1...v1.0.0-0

[0.19.1]: https://github.com/level/level/compare/v0.19.0...v0.19.1

[0.19.0]: https://github.com/level/level/compare/0.18.0...v0.19.0

[0.18.0]: https://github.com/level/level/compare/0.17.0-1...0.18.0

[0.17.0-1]: https://github.com/level/level/compare/0.17.0...0.17.0-1

[0.17.0]: https://github.com/level/level/compare/0.16.0...0.17.0

[0.16.0]: https://github.com/level/level/compare/0.15.0...0.16.0

[0.15.0]: https://github.com/level/level/compare/0.14.0...0.15.0

[0.14.0]: https://github.com/level/level/compare/0.13.0...0.14.0

[0.13.0]: https://github.com/level/level/compare/0.12.0...0.13.0

[0.12.0]: https://github.com/level/level/compare/0.11.0...0.12.0

[0.11.0]: https://github.com/level/level/compare/0.10.0...0.11.0

[0.10.0]: https://github.com/level/level/compare/0.9.0...0.10.0

[0.9.0]: https://github.com/level/level/compare/0.8.0...0.9.0
