# @starefossen/express-project-x

[![Build status](https://app.wercker.com/status/89db51a1ee5a8596acfb8362f919d6e5/s "wercker status")](https://app.wercker.com/project/bykey/89db51a1ee5a8596acfb8362f919d6e5)
[![Codacy grade](https://img.shields.io/codacy/grade/a410ea7a6c0e44d09e0ccac98286cbab.svg "Codacy")](https://www.codacy.com/app/starefossen/node-express-project-x)
[![Codacy coverage](https://img.shields.io/codacy/coverage/a410ea7a6c0e44d09e0ccac98286cbab.svg "Codacy")](https://www.codacy.com/app/starefossen/node-express-project-x)
[![NPM downloads](https://img.shields.io/npm/dm/@starefossen/express-project-x.svg "NPM downloads")](https://www.npmjs.com/package/@starefossen/express-project-x)
[![NPM version](https://img.shields.io/npm/v/@starefossen/express-project-x.svg "NPM version")](https://www.npmjs.com/package/@starefossen/express-project-x)
[![Node version](https://img.shields.io/node/v/@starefossen/express-project-x.svg "Node version")](https://www.npmjs.com/package/@starefossen/express-project-x)
[![Dependency status](https://img.shields.io/david/Starefossen/node-express-project-x.svg "Dependency status")](https://david-dm.org/Starefossen/node-express-project-x)

X-Project headers for Express.js applications.

## Install

```
$ npm install @starefossen/express-project-x --save
```

## Usage

```js
const xapp = require('@starefossen/express-project-x');
```

### Simple

The simple configuration reads your `package.json` and will set the following
headers if their values are defined in your `package.json`:

* `X-App-Name`
* `X-App-Version`
* `X-App-Author`
* `X-App-Homepage`

```js
const xapp = require('@starefossen/express-project-x');

app.use(xapp.middleware);
```

### Advanced

The advanced configuration takes in a configuration object and an optional data
object.

```js
const xapp = require('@starefossen/express-project-x');
const data = require('./package');

app.use(xapp({
  name: true,
  version: false,
  license: true,
}, data));
```

## [MIT Licensed](https://github.com/Starefossen/node-express-project-x/blob/master/LICENSE)
