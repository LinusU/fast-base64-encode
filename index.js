'use strict'

var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')

module.exports = function base64Encode (source) {
  var target = ''

  var i, tmp
  var length = source.length
  var extraLength = length % 3
  var baseLength = length - extraLength

  for (i = 0; i < baseLength; i += 3) {
    tmp = (source[i] & 0xFF) << 16 | (source[i + 1] & 0xFF) << 8 | (source[i + 2] & 0xFF)
    target += (lookup[tmp >> 18 & 0x3F] + lookup[tmp >> 12 & 0x3F] + lookup[tmp >> 6 & 0x3F] + lookup[tmp & 0x3F])
  }

  if (extraLength === 1) {
    tmp = (source[baseLength] & 0xFF)
    target += lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '=='
  }

  if (extraLength === 2) {
    tmp = (source[baseLength] & 0xFF) << 8 | (source[baseLength + 1] & 0xFF)
    target += lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '='
  }

  return target
}
