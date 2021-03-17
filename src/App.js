import React from 'react'
import s from './App.module.css'
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/NavLinks/Dialogs/DialogsContainer";
import UsersContainer from "./components/NavLinks/Users/UsersContainer";
import ProfileContainer from "./components/NavLinks/MyProfile/ProfileContainer";
import Login from "./components/NavLinks/Login/Login";

function App() {
    return (
               <div className={s.wrapper}>
                    <HeaderContainer/>
                    <div className={s.wrapperContent}>
                        <Navigation/>
                        <div className={s.routers}>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/myFriends' render={() => <UsersContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
    );
}

export default App;

//лучше делать render вместо component в Route