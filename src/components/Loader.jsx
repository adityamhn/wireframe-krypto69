import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Loader.scss'
import logo from '../images/logo.svg'
import { motion } from "framer-motion"



const Loader = () => {

    const img = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
        },
        transition: {
            staggerChildren: 0.1,
        }
    }
    return (
        <Container fluid className="loader-cont">
            <motion.img variants={img} initial="hidden" animate="visible" transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} className="loading-logo" src={logo} />
            <div class="dot-collision"></div>

        </Container>
    )
}

export default Loader
