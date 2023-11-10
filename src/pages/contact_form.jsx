/*contact_me.jsx*/

//Import(s)
import React, { useEffect } from 'react';
import "../pages/contact_form.css";
import Sidebar from './Sidebar'
import emailjs from "@emailjs/browser";
import { logEvent } from 'firebase/analytics';

const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailjsUserId = process.env.REACT_APP_EMAILJS_USER_ID;

//View to return 
const ContactForm = ({ analytics }) => {

  useEffect(() => {
    // Log a custom event to Firebase Analytics
    logEvent(analytics, 'page_view', { page_path: './contact_form' });
  }, [analytics]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsServiceId, // EmailJS service ID
        emailjsTemplateId, // EmailJS template ID
        e.target,
        emailjsUserId // EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Email could not be sent:", error.text);
        }
      );

    e.target.reset(); // Clear the form after submission
  };

  return (
    <div className="Main">
        <title>Nikhail's Site</title>
        <div className="grid-container">
        <div className="grid-item-sidebar"><Sidebar/></div>
            <div className="grid-item-non-sidebar"><b>Contact Me</b>
                <div className="Note1">
                    <form className="contact-form" onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input type="text" name="name" required />

                    <label>Email:</label>
                    <input type="email" name="email" required />

                    <label>Message:</label>
                    <textarea name="message" required />

                    <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
