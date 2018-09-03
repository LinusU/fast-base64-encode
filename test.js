const assert = require('assert')
const base64Encode = require('./')

{
  const actual = base64Encode(new Uint8Array([]))
  const expected = ''

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([104]))
  const expected = 'aA=='

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([108, 177]))
  const expected = 'bLE='

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([89, 44, 170]))
  const expected = 'WSyq'

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([78, 235, 7, 217]))
  const expected = 'TusH2Q=='

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([49, 88, 141, 17, 78]))
  const expected = 'MViNEU4='

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([211, 45, 212, 184, 19, 18, 115, 110, 149, 78, 232, 95, 246, 15, 237, 157, 128, 150, 221, 159]))
  const expected = '0y3UuBMSc26VTuhf9g/tnYCW3Z8='

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([158, 58, 169, 238, 46, 244, 21, 193, 4, 78, 159, 83, 107, 250, 2, 217, 213, 222, 109, 124, 135]))
  const expected = 'njqp7i70FcEETp9Ta/oC2dXebXyH'

  assert.strictEqual(actual, expected)
}

{
  const actual = base64Encode(new Uint8Array([43, 6, 64, 249, 228, 121, 219, 174, 24, 90, 155, 254, 198, 232, 208, 244, 248, 11, 157, 42, 130, 91]))
  const expected = 'KwZA+eR5264YWpv+xujQ9PgLnSqCWw=='

  assert.strictEqual(actual, expected)
}

{
  const crypto = require('crypto')
  const bytes = crypto.randomBytes(65536)
  const actual = base64Encode(bytes)
  const expected = bytes.toString('base64')

  assert.strictEqual(actual, expected)
}
