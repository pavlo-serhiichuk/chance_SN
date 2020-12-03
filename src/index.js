import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './redux/store'
import {addPostAC, updateMessageAC} from "./redux/profile-reducer";
import {sendMessageAC, updateDialogMessageAC} from "./redux/dialog-reducer";

const rerender = (state) => {
    return ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}

             addPostAC={addPostAC}
             updateMessageAC={updateMessageAC}
             sendMessageAC={sendMessageAC}
             updateDialogMessageAC={updateDialogMessageAC}
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
