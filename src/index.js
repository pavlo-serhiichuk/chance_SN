import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store, {addPost, addMessage, updatePostText, updateDialogMessage, subscribe} from './redux/store'

const rerender = (state) => {
    return ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
             addPost={store.addPost.bind(store)}
             updatePostText={store.updatePostText.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateDialogMessage={store.updateDialogMessage.bind(store)}
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
