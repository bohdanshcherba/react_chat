import React, {useEffect} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import './App.css'
import {PublicRouters, ProtectedRoutersUser, ProtectedRoutersAdmin} from './common'
import {LoginPage, UsersListPage, Chat} from './pages'
import {useDispatch, useSelector} from "react-redux";
import PageHeader from "./components/pageHeader/pageHeader";


const URL = 'https://edikdolynskyi.github.io/react_sources/messages.json'

const App = () => {

    const {user, isAdmin} = useSelector(state => ({
        isAdmin: state.user.isAdmin,
        user: state.user.currentUser
    }));


    const isAuth = user || isAdmin

    return (


        <div className={'App'}>

            <PageHeader isAdmin={isAdmin}/>
            <Routes>

                <Route path={'*'} element={<div>Not Found</div>}/>

                <Route element={<PublicRouters isAuth={isAuth}/>}>
                    <Route path={'/login'} element={<LoginPage/>}/>
                </Route>

                <Route element={<ProtectedRoutersUser isUser={isAuth}/>}>
                    <Route path={'/'} element={<Chat url={URL}/>}/>
                </Route>

                <Route element={<ProtectedRoutersAdmin isAdmin={isAdmin}/>}>
                    <Route path={'/users'} element={<UsersListPage/>}/>
                    <Route path={'/users/edit/:id'} element={<div>edit</div>}/>
                    <Route path={'/'} element={<Chat url={URL}/>}/>
                </Route>
            </Routes>
        </div>

    );
}


export default App;
