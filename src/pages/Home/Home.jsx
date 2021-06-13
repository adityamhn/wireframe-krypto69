import React, { useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Home.scss'
import logo from '../../images/logo.svg'
import { motion } from "framer-motion"
import click_basic from '../../audio/click_basic.wav'
import { useNavigate } from 'react-router'



const Home = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });


    const letter = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
        },
        transition: {
            staggerChildren: 0.1,
        }
    }

    const text = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 0.8,
            x: 0,
        },
        transition: {
            staggerChildren: 0.1,
        }
    }


    const image = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: {
            staggerChildren: 0.09,
        }
    }

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
        <Container fluid className="home-page-cont">
            <div className="home-header">
                <Image className="logo" src={logo} alt="main-logo" />
            </div>
            <div className="wrapper">
                <div className="gallery-sec">
                    <motion.div   onMouseEnter={playClick} onMouseLeave={stopClick} className="gallery gallery-1">

                        <div className="gallery-img-cont">

                            <motion.div variants={image} initial="hidden" animate="visible" transition={{ duration: 0.7 }} className="gallery-img-sec">
                                <div className="gallery1-img" />
                            </motion.div>
                            <motion.div variants={text} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.7 }} className="img-caption">Arresting The Godfather (John Gotti)</motion.div>

                        </div>

                        <div className="info">
                            <motion.h5 variants={letter} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.4 }} className="year">1989</motion.h5>
                            <motion.h4 variants={letter} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.4 }} className="name">CATCHING JOHNNY</motion.h4>
                        </div>
                    </motion.div>

                    <motion.div   onMouseEnter={playClick} onMouseLeave={stopClick} className="gallery gallery-2">
                        <div className="gallery-img-cont">
                            <motion.div variants={image} initial="hidden" animate="visible" transition={{ duration: 0.7 }} className="gallery-img-sec">
                                <div className="gallery1-img" />
                            </motion.div>
                            <motion.div variants={text} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.7 }} className="img-caption">The Mission To Capture The Devil.</motion.div>

                        </div>

                        <div className="info">
                            <motion.h5 variants={letter} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.4 }} className="year">2003</motion.h5>
                            <motion.h4 variants={letter} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.4 }} className="name">RED DAWN</motion.h4>
                        </div>
                    </motion.div>

                    <motion.div   onMouseEnter={playClick} onMouseLeave={stopClick} className="gallery gallery-3">
                        <div className="gallery-img-cont">
                            <motion.div variants={image} initial="hidden" animate="visible" transition={{ duration: 0.7 }} className="gallery-img-sec">
                                <div className="gallery1-img" />
                            </motion.div>
                            <motion.div variants={text} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.7 }} className="img-caption">Longest Pursuit In US History (LA).</motion.div>

                        </div>

                        <div className="info">
                            <motion.h5 variants={letter} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.4 }} className="year">2021</motion.h5>
                            <motion.h4 variants={letter} initial="hidden" animate="visible" transition={{ duration: 1, delay: 0.4 }} className="name">HOT PURSUIT</motion.h4>
                        </div>
                    </motion.div>


                </div>
                <div className="details-cont">
                    <div className="access-sec">
                        <h5 className="menu-title">ACCESS PORTAL</h5>
                        <div className="menu" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate('/menu')}>
                            <div className="line-1" />
                            <div className="line-2" />
                            <div className="line-3" />
                        </div>
                    </div>
                    <div className="time-sec">
                        <h5 className="time">{date.getHours()}<span className="blink">:</span>{date.getMinutes()} HRS</h5>
                        <h6 className="date">{date.toDateString()}</h6>
                    </div>

                </div>
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </Container>
    )
}

export default Home



