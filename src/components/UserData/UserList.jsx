import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import './UserList.scss'
import click_basic from '../../audio/click_basic.wav'


const UserList = ({ users }) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})

    const playClick = () => {
        const audio = document.getElementById('click-audio')
        audio.play()
    }



    const stopClick = () => {
        const audio = document.getElementById('click-audio')
        audio.pause()
        audio.currentTime = 0;
    }



    return (
        <div className="user-list-cont">
            <div className="users-body">
                {users.map((user, index) => (
                    <Card onMouseEnter={playClick} onMouseLeave={stopClick} onMouseOver={() => setCurrentUser(user)} key={index} onClick={() => navigate(`/users/${user._id}`)} className="social-users-card">
                        <Card.Body className="user-card-body">
                            <div className="user-img">
                                <Image src={user.picture} className="image" />
                            </div>
                            <div className="user-info">
                                <div className="text"><span className="person-title">{user.title}</span>. <span className="name">{user.firstName + " " + user.lastName}</span></div>
                                <div className="text">D.O.B : {new Date(user.dateOfBirth).getDate()}-{new Date(user.dateOfBirth).getMonth() + 1}-{new Date(user.dateOfBirth).getFullYear()}</div>
                                <div className="text">{user.email}</div>
                                <div className="text">sex : {user.gender}</div>

                            </div>
                        </Card.Body>
                    </Card>
                ))}

            </div>
            {Object.entries(currentUser).length === 0 && currentUser.constructor === Object ?
                <div className="user-info-sec">
                    <div className="hover-cap">
                        <h5 className="hover">Hover or Click on a card</h5>
                    </div>
                </div> :
                <div className="user-show-sec">
                    <div className="main">
                        <Image className="show-pic" src={currentUser.picture} />
                        <div className="main-details">
                            <div className="name">TITLE : {currentUser.title}</div>
                            <div className="name">FIRST NAME : {currentUser.firstName}</div>
                            <div className="name">LAST NAME : {currentUser.lastName}</div>
                            <div className="name">DATE OF BIRTH : {new Date(currentUser.dateOfBirth).getDate()}-{new Date(currentUser.dateOfBirth).getMonth() + 1}-{new Date(currentUser.dateOfBirth).getFullYear()}</div>
                            <div className="name">SEX : {currentUser.gender}</div>
                        </div>
                    </div>
                    <div className="email">EMAIL : {currentUser.email}</div>
                    <div className="email">PHONE : {currentUser.phone}</div>
                    <div className="email">LOCATION : {`${currentUser.location.street}, ${currentUser.location.city}, ${currentUser.location.state}, ${currentUser.location.country}`}</div>
                    <div className="email">COUNTRY : {currentUser.location.country}</div>
                    <div className="email">TIMEZONE : {currentUser.location.timezone}</div>
                    <div className="email">REGISTER-DATE : {new Date(currentUser.registerDate).toLocaleTimeString()} , {new Date(currentUser.registerDate).toDateString()}</div>


                </div>
            }
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </div>

    )
}

export default UserList
