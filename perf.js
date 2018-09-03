const crypto = require('crypto')
const base64Encode = require('./')

const data20 = crypto.randomBytes(20)
const data1k = crypto.randomBytes(1024)
const data32k = crypto.randomBytes(32 * 1024)
const data64k = crypto.randomBytes(64 * 1024)
const data6400k = crypto.randomBytes(64 * 1024 * 50)

// Warmup
for (let i = 0; i < 1000; i++) base64Encode(data1k)
console.log('Warmup done')

console.time('encode 20B * 3200000')
for (let i = 0; i < 3200000; i++) base64Encode(data20)
console.timeEnd('encode 20B * 3200000')

console.time('encode 1KB * 64000')
for (let i = 0; i < 64000; i++) base64Encode(data1k)
console.timeEnd('encode 1KB * 64000')

console.time('encode 32KB * 2000')
for (let i = 0; i < 2000; i++) base64Encode(data32k)
console.timeEnd('encode 32KB * 2000')

console.time('encode 64KB * 1000')
for (let i = 0; i < 1000; i++) base64Encode(data64k)
console.timeEnd('encode 64KB * 1000')

console.time('encode 6400KB * 10')
for (let i = 0; i < 20; i++) base64Encode(data6400k)
console.timeEnd('encode 6400KB * 10')
