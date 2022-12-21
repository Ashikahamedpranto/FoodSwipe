import React from 'react'
import thunk from 'redux-thunk'; 
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const middlware=[thunk]
const store = createStore(rootReducer,
composeWithDevTools(applyMiddleware(...middlware))
)

function DataProvider({children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider

