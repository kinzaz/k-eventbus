# KEventBus

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save k-eventbus
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import kEventbus from "k-eventbus";

// using CommonJS modules
var kEventbus = require("k-eventbus");
```

## Usage

```js
import kEventbus from "k-eventbus";

const emitter = kEventbus();

// listen to an event
emitter.on("foo", (e) => console.log("foo", e));

// listen to all events
emitter.on("*", (type, e) => console.log(type, e));

// fire an event
emitter.emit("foo", { a: "b" });

// clearing all events
emitter.all.clear();

// working with handler references:
function onFoo() {}
emitter.on("foo", onFoo); // listen
emitter.off("foo", onFoo); // unlisten
```

### Typescript

Set `"strict": true` in your tsconfig.json to get improved type inference for `mitt` instance methods.

```ts
import kEventbus from "k-eventbus";

type Events = {
  foo: string;
  bar?: number;
};

const emitter = kEventbus<Events>(); // inferred as Emitter<Events>

emitter.on("foo", (e) => {}); // 'e' has inferred type 'string'

emitter.emit("foo", 42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'. (2345)
```

Alternatively, you can use the provided `Emitter` type:

```ts
import kEventbus, { Emitter } from "k-eventbus";

type Events = {
  foo: string;
  bar?: number;
};

const emitter: Emitter<Events> = kEventbus<Events>();
```
