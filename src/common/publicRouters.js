import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const PublicRouters = ({isAuth}) => {


    return isAuth ? <Navigate to={'/'}/> : <Outlet/>
};

export default PublicRouters;
