import React, {Suspense} from 'react'
import s from './App.module.css'
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/NavLinks/Dialogs/DialogsContainer";
//import UsersContainer from "./components/NavLinks/Users/UsersContainer";
import ProfileContainer from "./components/NavLinks/MyProfile/ProfileContainer";
import Login from "./components/NavLinks/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import BigPreloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";

const UsersContainer = React.lazy(() => import('./components/NavLinks/Users/UsersContainer'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <BigPreloader/>
        return (
            <div className={s.wrapper}>
                <HeaderContainer/>
                <div className={s.wrapperContent}>
                    <Navigation/>
                    <div className={s.routers}>
                        <Suspense fallback={<div>Завантаження...</div>}>
                            <Route path='/myFriends' render={() => <UsersContainer/>}/>
                        </Suspense>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = withRouter(connect(mstp, {initializeApp})(App))

const MainApp = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp

//лучше делать render вместо component в Route