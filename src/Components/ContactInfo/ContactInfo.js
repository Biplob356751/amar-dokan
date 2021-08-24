import React from 'react';
import { Link } from 'react-router-dom';
import './ContactInfo.css'

const ContactInfo = () => {
    return (
        <div className="contact_info_content">
            <p>Any Kind Of Help Please Contact With Us.</p>
            <button><Link to="/contact">Contact With Us</Link></button>
        </div>
    );
};

export default ContactInfo;