import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store, {addPostAC, updateMessageAC, sendMessageAC, updateDialogMessageAC} from './redux/store'

const rerender = (state) => {
    return ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
             addPostAC={addPostAC.bind(store)}
             updateMessageAC={updateMessageAC.bind(store)}
             sendMessageAC={sendMessageAC.bind(store)}
             updateDialogMessageAC={updateDialogMessageAC.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
    ,
    document.getElementById('root')
);}

rerender(store.getState())

store.subscribe(rerender)

export default rerender
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
