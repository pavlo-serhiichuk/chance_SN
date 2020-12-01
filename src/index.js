import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const state = {
  profileInfo: {
    posts: [
      {message: 'Glad to see everyone', likes: 0},
      {message: 'Glad to see everyone', likes: 3},
      {message: 'Glad to see everyone', likes: 5},
    ]
  },
  dialogInfo: {
    users: [
      {id: 1, name: 'Elena'},
      {id: 2, name: 'Igor'},
      {id: 3, name: 'Paul'}
    ],
    messages: [
      "Hello",
      "How are you?",
      "I'm excellent",
    ]
  },
}

ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}/>
      </React.StrictMode>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
