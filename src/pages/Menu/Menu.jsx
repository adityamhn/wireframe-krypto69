import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Menu.scss'
import { motion } from "framer-motion"
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router'
import { menuData } from './MenuData'
import click_basic from '../../audio/click_basic.wav'


const Menu = () => {
    const navigate = useNavigate()


    const letter = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        transition: {
            staggerChildren: 0.1,
        }
    }


    const menuTitle = 'U.S. SECRET TASK FORCE'

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
        <Container fluid className="menu-cont">
            <div className="menu-header">
                <div className="close-sec" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate('/', { replace: true })}>CLOSE</div>
            </div>
            <div className="menu-title-sec">
                <div className="menu-title">
                    {menuTitle.split("").map((word, index) => (
                        <motion.span variants={letter} initial="hidden" animate="visible" transition={{ duration: 0.3, delay: index*0.09 }} className="menu-title-letter" key={index}>{word}</motion.span>
                    ))}
                </div>
            </div>
            <div className="menu-items">

                {menuData.map((menu, index) => (
                    <div className="item" key={index}>
                        <div className="item-name" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => {
                            navigate(`${menu.path}`, { replace: true }
                        )}}>
                            {menu.name}
                        </div>
                    </div>

                ))}

            </div>
            <div className="side-text-cont">
                <div className="side-text">
                    UNITEDSTATES
                </div>
            </div>

            <div className="menu-footer">
                <div className="logo-sec">
                    <Image src={logo} className="logo" />
                </div>
                <div className="text-sec">
                    <div className="acc-text">ONLY ACCESSIBLE TO U.S.S.T.F. AUTHORITIES</div>
                </div>
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
          
        </Container>
    )
}

export default Menu
