import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out to us via email, live chat, or visit one of our offices.</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>Email Us</h3>
            <p><a href="mailto:contact@skillthread.com">contact@skillthread.com</a></p>
          </div>
          <div className="col-lg-6">
            <h3>Call Us</h3>
            <p>+1 (469) 669-3770</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;