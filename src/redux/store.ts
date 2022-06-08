// import {configureStore} from '@reduxjs/toolkit'

// const store =configureStore({})

import {createStore,combineReducers,applyMiddleware} from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import {actionLog} from './middlewares/actionLog'
import {actionTest} from './middlewares/actionTest'

const rootReducer=combineReducers({
    language:languageReducer,
    recommendProducts:recommendProductsReducer
})
// const store=createStore(languageReducer)
const store=createStore(rootReducer,applyMiddleware(thunk,actionLog,actionTest))

export type RootState=ReturnType<typeof store.getState>
export default store