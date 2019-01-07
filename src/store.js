import { saveState,loadState } from "./localstorage";
import { createStore,applyMiddleware , compose  } from 'redux'
import rootReducer from './Reducers'
import ReduxPromise from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const {cart} = loadState() || [];

const store = createStore(
    rootReducer,
    {cart,products:[]},
    composeEnhancers(
        applyMiddleware(ReduxPromise)
    )
)

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    products: store.getState().products
  });
});

export default store;