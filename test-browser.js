'use strict'

const test = require('tape')
const { v4: uuid } = require('uuid')
const level = require('.')

require('level-packager/abstract/base-test')(test, level)
require('level-packager/abstract/db-values-test')(test, level)

function factory (opts) {
  return level(uuid(), opts)
}

test('level put', function (t) {
  t.plan(4)

  const db = factory()

  db.put('name', 'level', function (err) {
    t.ifError(err, 'no put error')

    db.get('name', function (err, value) {
      t.ifError(err, 'no get error')
      t.is(value, 'level')

      db.close(function (err) {
        t.ifError(err, 'no close error')
      })
    })
  })
})

test('level Buffer value', function (t) {
  t.plan(5)

  const db = factory({ valueEncoding: 'binary' })
  const buf = Buffer.from('00ff', 'hex')

  db.put('binary', buf, function (err) {
    t.ifError(err, 'no put error')

    db.get('binary', function (err, value) {
      t.ifError(err, 'no get error')
      t.ok(Buffer.isBuffer(value), 'is a buffer')
      t.same(value, buf)

      db.close(function (err) {
        t.ifError(err, 'no close error')
      })
    })
  })
})

test('level Buffer key', function (t) {
  const db = factory({ keyEncoding: 'binary' })
  const key = Buffer.from('00ff', 'hex')

  db.put(key, 'value', function (err) {
    t.ifError(err, 'no put error')

    db.get(key, function (err, value) {
      t.ifError(err, 'no get error')
      t.is(value, 'value')

      db.close(function (err) {
        t.ifError(err, 'no close error')
        t.end()
      })
    })
  })
})
