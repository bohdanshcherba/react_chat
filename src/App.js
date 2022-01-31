import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css'
import {PublicRouters, ProtectedRoutersUser, ProtectedRoutersAdmin} from './common'
import {LoginPage, UsersListPage, Chat} from './pages'


const URL = 'https://edikdolynskyi.github.io/react_sources/messages.json'

const App = () => {


    const isUser = true
    const isAdmin = true
    const isAuth = isUser || isAdmin

    return (


        <div className={'App'}>
            <Routes>

                <Route path={'*'} element={<div>Not Found</div>}/>

                <Route element={<PublicRouters isAuth={isAuth}/>}>
                    <Route path={'/login'} element={<LoginPage/>}/>
                </Route>

                <Route element={<ProtectedRoutersUser isUser={isUser}/>}>
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
