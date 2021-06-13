import React, { useEffect, useState } from 'react'
import { Container,Image } from 'react-bootstrap'
import './SpecPost.scss'
import { useNavigate, useParams } from 'react-router'
import click_basic from '../../audio/click_basic.wav'
import { GetParticularPost } from '../../services/users.service'
import Loader from '../../components/Loader'



const SpecPost = () => {
    const {postid} = useParams()
    const navigate = useNavigate()
    const [post,setPost] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetParticularPost(postid)
            console.log(res)
            setPost(res.data)
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
            <Loader/>
        )
    }

    return (
        <Container fluid className="spec-post-cont">
             <div className="posts-header">
                <div className="back-cont">
                    <div className="back" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate('/posts', { replace: true })}>BACK</div>
                </div>
            </div>
            <div className="wrapper">
           <h3 className="title">SOCIAL MEDIA POST DETAILS</h3>

                <div className="body">
                <div className="post-img">
                                <Image src={post.image} className="image" />
                            </div>
                            <div className="post-info">
                            <div className="text"><span className="text-title">PUBLISHED BY : </span><span className="name" >{post.owner.firstName + " " + post.owner.lastName}</span></div>
                                <div className="text"><span className="text-title">TEXT :</span>  {post.text}</div>
                                <div className="text"><span className="text-title">LIKES :</span> {post.likes}</div>
                                <div className="text"><span className="text-title">LINK :</span> <a href={post.link} target="_blank" className="link" > {post.link}</a></div>
                                <div className="text"><span className="text-title">TAGS :</span> {post.tags.map((tag,index) => <span key={index}>{tag} , </span>)} </div>
                                <div className="text"><span className="text-title">PUBLISHED ON : </span>{new Date(post.publishDate).toLocaleTimeString()} , {new Date(post.publishDate).toDateString()} </div>

 

                            </div>
                </div>
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
          
        </Container>
    )
}

export default SpecPost
