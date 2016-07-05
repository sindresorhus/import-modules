# req-all [![Build Status](https://travis-ci.org/sindresorhus/req-all.svg?branch=master)](https://travis-ci.org/sindresorhus/req-all)

> Require all files in a directory

*This module is intentionally simple. Not interested in more features.*


## Install

```
$ npm install --save req-all
```


## Usage

```
.
└── dir
    ├── foo-bar.js
    └── baz-faz.js
```

```js
const reqAll = require('req-all');
const modules = reqAll('dir');

console.log(modules);
//=> {fooBar: [Function], bazFaz: [Function]}
```


## API

### reqAll([directory], [options])

#### directory

Type: `string`<br>
Default: `__dirname`

Directory to require supported files in. Unless you've modified [`require.extensions`](https://nodejs.org/api/globals.html#globals_require_extensions), that means any `.js`, `.json`, `.node` files, in that order. Does not recurse. Ignores the caller file and files starting with `.` or `_`.

#### options

Type: `Object`

##### camelize

Type: `boolean`<br>
Default: `true`

Convert dash-style names (`foo-bar`) to camel-case (`fooBar`).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
