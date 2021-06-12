import React, { useEffect, useState } from 'react'
import "./Users.scss";
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Container, FormControl, Image, Spinner } from 'react-bootstrap';
import { GetAllUsers } from '../../services/users.service';
import UserList from '../../components/UserData/UserList';
import Loader from '../../components/Loader';
import click_basic from '../../audio/click_basic.wav'


export const Users = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [searchfield, setSearchfield] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetAllUsers()
            console.log(res)
            setUsers(res.data)
        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)
    }, [])



    const filteredUsers = users.filter((user) => {
        return (
            user.firstName.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.gender.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.location.country.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.location.state.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.email.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.location.street.toLowerCase().includes(searchfield.toLowerCase()) ||
            user.location.state.toLowerCase().includes(searchfield.toLowerCase())

        );
    });

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
        <Container fluid className="social-users-cont">
            <div className="users-header">
                <div className="back-cont">
                    <div className="back" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate('/menu', { replace: true })}>BACK</div>
                </div>
                <div className="search-cont">
                    <FormControl onClick={playClick} className="search-field" placeholder='SEARCH' onChange={(e) => setSearchfield(e.target.value)} />
                </div>
            </div>
            <div className="wrapper">
                <UserList users={filteredUsers} />
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </Container>
    )
}
