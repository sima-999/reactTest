
//不使用toolkit，原生redux写法
// import {createStore,combineReducers,applyMiddleware} from 'redux'
// import languageReducer from './language/languageReducer'
// import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
// import thunk from 'redux-thunk'
// import {actionLog} from './middlewares/actionLog'
// import {actionTest} from './middlewares/actionTest'
// const rootReducer=combineReducers({
//     language:languageReducer,
//     recommendProducts:recommendProductsReducer
// })
// // const store=createStore(languageReducer)
// const store=createStore(rootReducer,applyMiddleware(thunk,actionLog,actionTest))

// export type RootState=ReturnType<typeof store.getState>
// export default store



//使用toolkit混编使用createStore
// import {createStore,applyMiddleware} from 'redux'
// import {combineReducers} from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import {actionLog} from './middlewares/actionLog'
// import {actionTest} from './middlewares/actionTest'
// import {languageSlice } from './languageForSlice/slice'
// const rootReducer=combineReducers({
//     language:languageSlice.reducer
// })
// const store=createStore(rootReducer,applyMiddleware(thunk,actionLog,actionTest))

// export type RootState=ReturnType<typeof store.getState>
// export default store

//使用configureStore来配置store
import {combineReducers,configureStore} from '@reduxjs/toolkit'
import {actionLog} from './middlewares/actionLog'
import {actionTest} from './middlewares/actionTest'
import {languageSlice } from './languageForSlice/slice'
const rootReducer=combineReducers({
    language:languageSlice.reducer
})
const store=configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog,actionTest),
    devTools: process.env.NODE_ENV !== 'production',
})
export type RootState=ReturnType<typeof store.getState>
export default store