import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import './PostData.scss'
import click_basic from '../../audio/click_basic.wav'


const PostData = ({ posts }) => {
    const navigate = useNavigate()


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
        <div className="posts-list-cont">
            <div className="posts-body">
                {posts.map((post, index) => (
                    <Card onMouseEnter={playClick} onMouseLeave={stopClick} key={index} className="social-post-card" onClick={() => navigate(`/posts/${post._id}`)}>
                        <Card.Body className="post-card-body">
                            <div className="post-img">
                                <Image src={post.image} className="image" />
                            </div>
                            <div className="post-info">
                                <div className="text"><span className="text-title">TEXT :</span>  {post.text}</div>
                                <div className="text"><span className="text-title">LIKES :</span> {post.likes}</div>
                                <div className="text"><span className="text-title">LINK :</span> {post.link}</div>
                                <div className="text"><span className="text-title">TAGS :</span> {post.tags.map((tag, index) => <span key={index}>{tag} , </span>)} </div>
                                <div className="text"><span className="text-title">PUBLISHED ON : </span>{new Date(post.publishDate).toLocaleTimeString()} , {new Date(post.publishDate).toDateString()} </div>



                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </div>
    )
}

export default PostData
