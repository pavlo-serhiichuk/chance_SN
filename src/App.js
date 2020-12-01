import React from 'react'
import s from './App.module.css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import MyProfile from "./components/NavLinks/MyProfile/MyProfile";
import MyFriend from "./components/NavLinks/MyFriends/MyFriends";
import Dialog from "./components/NavLinks/Dialogs/Dialogs";


function App(props) {
    return (
        <div className={s.wrapper}>
            {'some wordsssd'}
            <Header/>
            <div className={s.wrapperContent}>
                <Navigation/>
                <div className={s.routers}>
                    <Route path='/profile' render={() => <MyProfile profileInfo={props.state.profileInfo}/> }/>
                    <Route path='/myFriends' render={() => <MyFriend/>}/>
                    <Route path='/dialog' render={() => <Dialog dialogInfo={props.state.dialogInfo}/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;

//лучше делать render вместо component в Route