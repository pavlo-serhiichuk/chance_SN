import React from 'react'
import s from './App.module.css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/NavLinks/Dialogs/DialogsContainer";
import UsersContainer from "./components/NavLinks/Users/UsersContainer";
import ProfileContainer from "./components/NavLinks/MyProfile/ProfileContainer";

function App(props) {
    return (
               <div className={s.wrapper}>
                    <Header/>
                    <div className={s.wrapperContent}>
                        <Navigation/>
                        <div className={s.routers}>
                            <Route path='/profile' render={() => <ProfileContainer/>}/>
                            <Route path='/myFriends' render={() => <UsersContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        </div>
                    </div>
                </div>
    );
}

export default App;

//лучше делать render вместо component в Route