import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, addMessage, updatePostText, updateDialogMessage, subscribe} from './redux/state'

const rerender = () => {
    return ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
             addPost={addPost}
             updatePostText={updatePostText}
             addMessage={addMessage} updateDialogMessage={updateDialogMessage}/>
      </React.StrictMode>
    </BrowserRouter>
    ,
    document.getElementById('root')
);}

rerender()

subscribe(rerender)

export default rerender
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
