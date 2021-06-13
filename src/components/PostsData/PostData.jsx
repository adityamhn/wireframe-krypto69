import React from 'react'
import { Card,Image } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import './PostData.scss'


const PostData = ({posts}) => {
    const navigate = useNavigate()


    return (
        <div className="posts-list-cont">
            <div className="posts-body">
            {posts.map((post, index) => (
                    <Card key={index} className="social-post-card" onClick={() => navigate(`/posts/${post._id}`,{replace:true})}>
                        <Card.Body className="post-card-body">
                            <div className="post-img">
                                <Image src={post.image} className="image" />
                            </div>
                            <div className="post-info">
                                <div className="text"><span className="text-title">TEXT :</span>  {post.text}</div>
                                <div className="text"><span className="text-title">LIKES :</span> {post.likes}</div>
                                <div className="text"><span className="text-title">LINK :</span> {post.link}</div>
                                <div className="text"><span className="text-title">TAGS :</span> {post.tags.map((tag,index) => <span key={index}>{tag} , </span>)} </div>
                                <div className="text"><span className="text-title">PUBLISHED ON : </span>{new Date(post.publishDate).toLocaleTimeString()} , {new Date(post.publishDate).toDateString()} </div>

 

                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default PostData
