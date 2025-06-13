const CACHE_KEY = 'products';
const EXPIRATION_MS = 60 * 60 * 1000;

const cacheMiddleware = store => next => action => {
  if (action.type === 'products/loadFromCache') {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) {
      return;
    }

    const { data, timestamp } = JSON.parse(raw);
    const expired = Date.now() - timestamp > EXPIRATION_MS;

    if (!expired) {
      store.dispatch({ type: 'products/setProducts', payload: data });
    } else {
      localStorage.removeItem(CACHE_KEY);
    }
  }

  if (action.type === 'products/setProducts') {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data: action.payload, timestamp: Date.now() })
    );
  }

  return next(action);
};

export default cacheMiddleware;
