import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "./ContactUs.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactUs = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    const revealConfig = {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
    };

    sr.reveal('.map-container, .contact-us, description,.contact-item, .contact-form, .form-group '  , revealConfig);
  }, []);
  return (
    <div className="contact-us-container">
      <div className="half">
      <div className="contact-us">
      <h1>Contact Us</h1>
      <p className="description">
        Got questions or just want to say hello? We’re all ears! Drop us a line and let’s make connecting as easy as a click. Your thoughts matter, and so do you. Reach out and let’s create something awesome together!
      </p>
      <div className="contact-item">
      <div class="svg-div">
      <FaLocationDot style={{fontSize:"21px", color:'#e6f7ff'}} />
      </div>
        <div>
          <h3>Headquarter</h3>
          <p>A/37, Metroville Sindh Industrial Trading Estate, Karachi, Karachi City, Sindh 75700, Pakistan</p>
        </div>
      </div>
      <div className="contact-item">
      <div class="svg-div">
      <FaPhone  style={{fontSize:"21px", color:'#e6f7ff'}} />
      </div>
        <div>
          <h3>Call Us</h3>
          <p>(+) 123 456 78 90</p>
        </div>
      </div>
      <div className="contact-item">
      <div class="svg-div">
      <MdEmail  style={{fontSize:"21px", color:'#e6f7ff'}} />
      </div>
        <div>
          <h3>Email Us</h3>
          <p>info@nacmpk.com</p>
        </div>
      </div>
    </div>
    <div className="contact-form">
      <form>
        <div className="form-group">
    <label htmlFor="name">Name <span style={{color:"red"}}>*</span></label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
    <label htmlFor="email">Email <span style={{color:"red"}}>*</span></label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
    <label htmlFor="subject">Subject <span style={{color:"red"}}>*</span></label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
    <label htmlFor="message">Comment or Message <span style={{color:"red"}}>*</span></label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0148234036633!2d67.04223441432017!3d24.931255048178814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fbdedd3d109%3A0x8dbf1dcd29a0d9c8!2sMetrovile%20Sindh%20Industrial%20Trading%20Estate%2C%20Karachi%2C%20Sindh%2075700%2C%20Pakistan!5e0!3m2!1sen!2s!4v1599828122914!5m2!1sen!2s"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Google Maps"
      ></iframe>
    </div>
  </div>
  );
}

export default ContactUs
