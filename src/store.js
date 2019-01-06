import { saveState } from "./localstorage";
import { createStore,applyMiddleware , compose  } from 'redux'
import rootReducer from './Reducers'
import ReduxPromise from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(ReduxPromise)
    )
)

store.subscribe(() => {
  saveState({
    products: store.getState().products
  });
});

export default store;