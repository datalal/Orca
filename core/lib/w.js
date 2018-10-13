'use strict'

const FnBase = require('./_base')

function FnW (pico, x, y) {
  FnBase.call(this, pico, x, y)

  this.name = 'west'
  this.glyph = 'w'
  this.info = 'Moves westward, or bangs.'

  this.operation = function () {
    if (this.is_free(-1, 0) != true) { this.replace('b'); this.lock(); return }
    this.move(-1, 0)
  }
}

module.exports = FnW