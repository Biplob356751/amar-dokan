import React from 'react';
import { Link } from 'react-router-dom';
import './Club.css'
const Club = () => {
    return (
        <div className="club_container">
            <div className="club_container_content container">
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                laying out print, graphic or web designs. The passage is attributed to an unknown </p>
                <Link to="/marketClub">Join Our Club</Link>
            </div>
        </div>
    );
};

export default Club;