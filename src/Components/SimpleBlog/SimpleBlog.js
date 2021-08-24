import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SimpleBlog.css';
import SimpleBlogData from './SimpleBolgData.json';

const SimpleBlog = () => {
    const [simpleBlog, setSimpleBlog] = useState([]);
    useEffect(() => {
        setSimpleBlog(SimpleBlogData);
    }, [])
    return (
        <div className="simple_blog_content">
            {
                simpleBlog.map(simpleBlog =>
                    <div className="simple_blog_item" key={simpleBlog.id}>
                        <img src={simpleBlog.image} alt="image" />
                        <div className="simple_blog_item_item">
                            <h3>{simpleBlog.title}</h3>
                            <div className="blog_item_content">
                                <span>Post By: {simpleBlog.authore}</span>
                                <span>{new Date().toDateString()}</span>
                            </div>
                            <p>{simpleBlog.sortDescription}</p>
                            <button><Link to="/blogDetails">Read More</Link></button>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default SimpleBlog;