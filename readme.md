# Fast Base64 Encoding

A fast Base64 encoder with a low level API. If you want a high level API, look at [base64-js](https://github.com/beatgammit/base64-js).

## Installation

```sh
npm install --save fast-base64-encode
```

## Usage

```js
const base64Encode = require('fast-base64-encode')

const data = new Uint8Array(256)

console.log(base64Encode(data))
//=> 'AAAAAAAAAAAAAAAAAAAA'
```
