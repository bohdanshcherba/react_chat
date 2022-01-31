import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoutersAdmin = ({isAdmin}) => {

    return  isAdmin ? <Outlet/> : <Navigate to={'/'}/>
};

export default ProtectedRoutersAdmin;
