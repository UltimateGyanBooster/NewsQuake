// Contact.js

import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>
                If you have any questions, feedback, or business inquiries, please feel
                free to contact us using the form below. We'll get back to you as soon as
                possible.
            </p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
