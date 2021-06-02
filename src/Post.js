/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Post.css';



function Post({username, caption, imageUrl}) {
    
    return (
        <div classname= "post">
            <div className="post__header">
            
            <h3>{username}</h3>
            
            </div>

            {/* header, avatar, username */}
            
            <img className="post__image" src={imageUrl}/>
            {/* image */}
            <h4 className="post__text"><strong>{username}:</strong> {caption}</h4>
            {/* username and captions */}
        </div>
    )
}

export default Post
