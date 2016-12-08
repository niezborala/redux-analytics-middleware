import EventEmitter from 'events';

window.analytics = new EventEmitter();

const analyticsMiddleware = store => next => action => {
  window.analytics.emit(action.type, {
    action,
    store: store.getState()
  });

  window.analytics.emit('*', {
    action,
    store: store.getState()
  });

  return next(action);
};

export default analyticsMiddleware;
