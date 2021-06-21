import rootReducer from './rootReducer';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

export default function configStore() {
    let storeEnhancer = undefined;
    if (process.env.NODE_ENV !== 'PRODUCTION') {
        storeEnhancer = composeWithDevTools(
            applyMiddleware(thunk)
        )
    }




    return createStore(rootReducer, storeEnhancer);
}
