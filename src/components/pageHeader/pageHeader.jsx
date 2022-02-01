import React from 'react';
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './pageHeader.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../store/users/action";

const PageHeader = (props) => {
    const dispatch = useDispatch()

    const logoutHandler = ()=>{
        dispatch(logout())
    }


    return (
        <header>
            {props.isAdmin?
            <Link to={'/users'}>
                <h5>users</h5>
            </Link>: null}
            <Link to={'/'} className={'logo'}>
                <FontAwesomeIcon icon={faComments} size="2x"/>
                <h5>Messenger</h5>
            </Link>

            <Link to={'/login'} onClick={logoutHandler}>
                <h5>log-out</h5>
            </Link>
        </header>
    );
}

export default PageHeader;
