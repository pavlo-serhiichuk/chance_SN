import React from 'react'
import s from './App.module.css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import MyProfile from "./components/NavLinks/MyProfile/MyProfile";
import MyFriend from "./components/NavLinks/MyFriends/MyFriends";
import Dialogs from "./components/NavLinks/Dialogs/Dialogs";


function App(props) {
    return (
        <div className={s.wrapper}>
            <Header/>
            <div className={s.wrapperContent}>
                <Navigation/>
                <div className={s.routers}>
                    <Route path='/profile' render={() => <MyProfile state={props.state}
                                                                    dispatch={props.dispatch}/> }/>
                    <Route path='/myFriends' render={() => <MyFriend/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state}
                                                                  dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;

//лучше делать render вместо component в Route