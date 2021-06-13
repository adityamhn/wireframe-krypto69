import React, { useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import './UserDetails.scss'
import { useNavigate, useParams } from 'react-router'
import Loader from '../../components/Loader'
import { GetUserDetails } from '../../services/users.service'
import click_basic from '../../audio/click_basic.wav'

const UserDetails = () => {
    const { userid } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetUserDetails(userid)
            console.log(res)
            setUser(res.data)
        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)
    }, [])




    const playClick = () => {
        const audio = document.getElementById('click-audio')
        audio.play()
    }



    const stopClick = () => {
        const audio = document.getElementById('click-audio')
        audio.pause()
        audio.currentTime = 0;
    }

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <Container fluid className="user-details-page-cont">
            <div className="posts-header">
                <div className="back-cont">
                    <div className="back" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate(-1)}>BACK</div>
                </div>
            </div>
            <div className='wrapper'>
                <div className="heading">
                    <h3 className="title">SOCIAL MEDIA USER</h3>
                </div>
                <div className="user-show-sec">
                    <Image className="show-pic" src={user.picture} />

                    <div className="main">

                        <div className="email">TITLE : {user.title}</div>
                        <div className="email">FIRST NAME : {user.firstName}</div>
                        <div className="email">LAST NAME : {user.lastName}</div>
                        <div className="email">DATE OF BIRTH : {new Date(user.dateOfBirth).getDate()}-{new Date(user.dateOfBirth).getMonth() + 1}-{new Date(user.dateOfBirth).getFullYear()}</div>
                        <div className="email">SEX : {user.gender}</div>
                        <div className="email">EMAIL : {user.email}</div>
                        <div className="email">PHONE : {user.phone}</div>
                        <div className="email">LOCATION : {`${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}</div>
                        <div className="email">COUNTRY : {user.location.country}</div>
                        <div className="email">TIMEZONE : {user.location.timezone}</div>
                        <div className="email">REGISTER-DATE : {new Date(user.registerDate).toLocaleTimeString()} , {new Date(user.registerDate).toDateString()}</div>
                    </div>


                </div>
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </Container>
    )
}

export default UserDetails
