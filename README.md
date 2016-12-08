# redux-analytics-middleware

Simple `redux` middleware for analytics

##Installation

```bash
$ npm install --save redux-analytics-middleware
```

##Quick Start

To start using `redux-analytics-middleware` add following code:

```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import analyticsMiddleware from 'redux-analytics-middleware';
import * as reducers from './reducers';

let reducer = combineReducers(reducers)
// applyMiddleware supercharges createStore with middleware:
let store = createStore(reducer, applyMiddleware(analyticsMiddleware));
```

##Examples

To listen for events we can use:

```javascript
analytics.on('event-name', function(data) {
  /* your code here */
});
```
we can also listen to all events by `'*'`.

In `data` object for example:

```javascript
{
  "action": {
    "type": "@@router/LOCATION_CHANGE",
    "payload": { /* data */}
  },
  "store": { /* store */ }
}
```

## License

[MIT](LICENSE)
