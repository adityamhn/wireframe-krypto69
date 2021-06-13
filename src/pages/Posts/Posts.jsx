import React, { useState, useEffect } from 'react'
import { Container, FormControl } from 'react-bootstrap'
import './Posts.scss'
import PostsData from '../../components/PostsData/PostData'
import click_basic from '../../audio/click_basic.wav'
import { useNavigate } from 'react-router'
import { GetAllPosts } from '../../services/users.service'
import Loader from '../../components/Loader'



const Posts = () => {
    const navigate = useNavigate()
    const [searchfield, setSearchfield] = useState("");
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetAllPosts()
            console.log(res)
            setPosts(res.data.slice(0, res.data.length - 1))
        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)
    }, [])



    const filteredPosts = posts.filter((post) => {

        return (
            post.text.toLowerCase().includes(searchfield.toLowerCase()) ||
            post.tags.indexOf(searchfield.toLowerCase()) >= 0




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
        <Container fluid className="social-posts-cont">
            <div className="posts-header">
                <div className="back-cont">
                    <div className="back" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate(-1)}>BACK</div>
                </div>
                <div className="search-cont">
                    <FormControl className="search-field" placeholder='SEARCH' onChange={(e) => setSearchfield(e.target.value)} />
                </div>
            </div>
            <div className="wrapper-header">
                <div className="header-col">
                    <h3 className="title">SOCIAL MEDIA POSTS</h3>
                </div>
            </div>
            <div className="wrapper">
                <PostsData posts={filteredPosts} />
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </Container>
    )
}

export default Posts
