import React from 'react'
import "./Users.scss";
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { UserList } from '../../components/UserData/UserList';


export const Users = () => {
    return (
        <div className="users-page-main-div">
            <div className="first-column">
                <div className="back-button-area">
                    <Link to="/" className="main-text">
                    Back
                    </Link>
                    
                </div>
                <div className="logo-area">
                    <img src={logo} className="main-image"/>
                </div>
            </div>
            <div className="second-column">
                <div className="search-bar-area">
                    <Form.Control className="search-bar" placeholder="SEARCH"/>

                </div>
                <div className="userdata-area">
                        <UserList/>
                </div>

            </div>
            <div className="third-column">


            </div>
        </div>
    )
}
