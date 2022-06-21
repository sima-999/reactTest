import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {appContext,defaultContentValue} from './AppState'
import {AppStateProvider} from './AppState'
import './i18n/configs'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const userInfo={name:'司马懿1231、麻袋',id:22}

root.render(
  // <React.StrictMode>
  //  <appContext.Provider value={defaultContentValue}>
  //    <App userInfo={userInfo}/>
  // </appContext.Provider> 
    <Provider store={store}>
      <AppStateProvider>
        {/* <App userInfo={userInfo}/> */}
        <App />
      </AppStateProvider>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
