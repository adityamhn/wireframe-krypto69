import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './InstitutionDetails.scss'
import { useNavigate, useParams } from 'react-router'
import click_basic from '../../audio/click_basic.wav'
import Loader from '../../components/Loader'
import { GetInstDetails } from '../../services/users.service'

const InstitutionDetails = () => {
    const { instid } = useParams()
    const navigate = useNavigate()
    const [inst, setInst] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetInstDetails(instid)
            console.log(res)
            setInst(res.data)
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
        <Container fluid className="inst-detail-cont">
            <div className="posts-header">
                <div className="back-cont">
                    <div className="back" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate(-1)}>BACK</div>
                </div>
            </div>
            <div className='wrapper'>
                <div className="heading">
                    <h3 className="title">INSTITUTION DETAILS</h3>
                </div>
                <div className="body">

                    <div className="post-info">
                        <div className="text"><span className="text-title">VARIABLE : </span><span className="name" >{inst.variable}</span></div>
                        <div className="text"><span className="text-title">AREA NAME :</span>  {inst.area_name}</div>
                        <div className="text"><span className="text-title">TYPE :</span> {inst.type}</div>
                        <div className="text"><span className="text-title">YEAR :</span> {inst.year}</div>
                        <div className="text"><span className="text-title">VALUE :</span> {inst.value}</div>




                    </div>
                </div>

            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </Container>
    )
}

export default InstitutionDetails
