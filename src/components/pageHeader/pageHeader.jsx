import React from 'react';
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './pageHeader.css'
const PageHeader = () => {

    return (
        <header>
            <FontAwesomeIcon icon={faComments} size="2x"/>
            <h5>Messenger</h5>
        </header>
    );
}

export default PageHeader;
