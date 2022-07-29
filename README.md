# 🌟 [evangelist](https://github.com/eserozvataf/evangelist)

[![build status][build-image]][build-url]
[![npm version][npm-image]][npm-url]
[![npm download][npm-download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![coverage status][coverage-image]][coverage-url]
[![license][license-image]][license-url]


## Update (July 2022)

DEPRECATED in favor of [hex](https://github.com/eserozvataf/hex).
See https://github.com/eserozvataf/hex for details.


## What is the Evangelist?

Evangelist is a set of helper methods that are useful and reusable for base functional programming requirements such as function composition, function decoration, event dispatching and emitting, etc.

Plus, as a library, Evangelist is completely tree-shaking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole Evangelist package.


## Quick start

Execute `npm install evangelist` or `yarn add evangelist` to install evangelist and its dependencies into your project directory.


## Usage of modules

### compose(...functionsForComposition)

```js
import compose from 'evangelist/compose';

// compose - slug sample
const lower = x => x.toLowerCase();
const chars = x => x.replace(/[^\w \-]+/g, '');
const spaces = x => x.split(' ');
const dashes = x => x.join('-');

const slug = compose(lower, chars, spaces, dashes);

const message = slug('Hello World!');

// outputs 'slug: hello-world'
console.log(`slug: ${message}`);
```

### curry(targetFunction, ...argumentsToBePrepended)

```js
import curry from 'evangelist/curry';

// curry - sum sample
const sum = (a, b) => a + b;

const sumWith5 = curry(sum, 5);

const result = sumWith5(3);

// outputs 'result: 8'
console.log(`result: ${result}`);
```

### curryRight(targetFunction, ...argumentsToBeAppended)

```js
import curryRight from 'evangelist/curryRight';

// curryRight - sum sample
const dec = (a, b) => a - b;

const decWith5 = curry(dec, 5);

const result = decWith5(3);

// outputs 'result: -2'
console.log(`result: ${result}`);
```

### decorate(functionToDecorate, decoratorFunction)

```js
import decorate from 'evangelist/decorate';

// decorate - calculator sample
let generator = () => 5;
generator = decorate(generator, (func) => func() * 2);
generator = decorate(generator, (func) => func() + 1);

// outputs: 'generated: 11'
console.log(`generated: ${generator()}`);
```

### dispatcher(initialState, mutators) (awaitable)

```js
import dispatcher from 'evangelist/dispatcher';

// dispatcher - state mutation sample
const initialState = { quarter: 1, year: 2018, sum: 1 };

const actionAdd5 = (state, next) => next({ ...state, sum: state.sum + 5 });
const actionDiv2 = (state, next) => next({ ...state, sum: state.sum / 2 });

// outputs 'new state is: {"quarter":1,"year":2018,"sum":3}'
dispatcher(initialState, [ actionAdd5, actionDiv2 ])
    .then(state => console.log(`new state is: ${JSON.stringify(state)}`));
```

### dispatcher(initialState, mutators, subscribers) (awaitable)

```js
import dispatcher from 'evangelist/dispatcher';

// dispatcher - action logger sample
const initialState = { quarter: 1, year: 2018, sum: 1 };

const actionAdd5 = (state, next) => next({ ...state, sum: state.sum + 5 });
const actionDiv2 = (state, next) => next({ ...state, sum: state.sum / 2 });

const logger = (x) => console.log('INFO', x);

/* outputs:
   INFO { action: 'actionAdd5',
     previousState: { quarter: 1, year: 2018, sum: 1 },
     newState: { quarter: 1, year: 2018, sum: 6 } }
   INFO { action: 'actionDiv2',
     previousState: { quarter: 1, year: 2018, sum: 6 },
     newState: { quarter: 1, year: 2018, sum: 3 } }
   new state is: {"quarter":1,"year":2018,"sum":3}'
*/
dispatcher(initialState, [ actionAdd5, actionDiv2 ], [ logger ])
    .then(state => console.log(`new state is: ${JSON.stringify(state)}`));
```

### emitter(events, eventName, eventParameters) (awaitable)

```js
import emitter from 'evangelist/emitter';

// emitter - static pub/sub sample
const subscriberOne = (value) => console.log(`subscriberOne had value ${value}`);
const subscriberTwo = (value) => console.log(`subscriberTwo had value ${value}`);

const events = {
    printToConsole: [ subscriberOne, subscriberTwo ],
};

/* outputs:
   subscriberOne had value 5
   subscriberTwo had value 5
*/
emitter(events, 'printToConsole', [ 5 ]);
```

### emitter(events, eventName, eventParameters, subscribers) (awaitable)

```js
import emitter from 'evangelist/emitter';

// emitter - event logger sample
const subscriberOne = (value) => console.log(`subscriberOne had value ${value}`);
const subscriberTwo = (value) => console.log(`subscriberTwo had value ${value}`);

const logger = (x) => console.log('INFO', x);

const events = {
    printToConsole: [ subscriberOne, subscriberTwo ],
};

/* outputs:
   INFO { event: 'printToConsole',
     subscriber: 'subscriberOne',
     args: [ 5 ] }
   subscriberOne had value 5
   INFO { event: 'printToConsole',
     subscriber: 'subscriberTwo',
     args: [ 5 ] }
   subscriberTwo had value 5
*/
emitter(events, 'printToConsole', [ 5 ], [ logger ]);
```

### iterate(iterable, func) (awaitable)

```js
import iterate from 'evangelist/iterate';
import compose from 'evangelist/compose';

// iterate - url fetcher example
const generator = function* () {
    yield 'http://localhost/samples/1'; // { value: 1 }
    yield 'http://localhost/samples/2'; // { value: 2 }
    yield 'http://localhost/samples/3'; // { value: 3 }
};

const fetchUrl = async function (url) {
    const response = await fetch(url);
    const document = await response.json();

    return document.value;
}

const add5 = async value => await value + 5;
const printToConsole = async value => { console.log(await value); };

/* outputs:
   value is 6
   value is 7
   value is 8
*/
iterate(
    generator(),
    compose(fetchUrl, add5, printToConsole),
);
```

## Todo List

See [GitHub Projects](https://github.com/eserozvataf/evangelist/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/evangelist/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)

[build-image]: https://img.shields.io/travis/eserozvataf/evangelist.svg?style=flat-square
[build-url]: https://travis-ci.org/eserozvataf/evangelist
[npm-image]: https://img.shields.io/npm/v/evangelist.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dt/evangelist.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/evangelist
[dep-image]: https://img.shields.io/david/eserozvataf/evangelist.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/evangelist
[coverage-image]: https://img.shields.io/codecov/c/github/eserozvataf/evangelist.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/eserozvataf/evangelist
[license-image]: https://img.shields.io/npm/l/evangelist.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/evangelist/blob/master/LICENSE
