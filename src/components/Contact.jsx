import React from 'react';
import './contact.css'; 

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether you have questions, suggestions, or feedback, feel free to reach out.</p>

      <form className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" placeholder="Write your message here" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: contact@travelmorocco.com</p>
        <p>Phone: +212 123 456 789</p>
        <p>Address: Marrakesh, Morocco</p>
      </div>
    </div>
  );
};

export default Contact;
