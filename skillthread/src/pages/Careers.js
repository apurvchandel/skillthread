import React from 'react';

function Careers() {
  return (
    <section id="careers" className="careers section">
      <div className="container">
        <div className="section-title">
          <h2>Careers</h2>
          <p>Looking for your next opportunity? Join our growing talent pool of engineers, analysts, and architects across the globe. Submit your profile to be considered for future roles.</p>
        </div>
        <form className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <label>Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" required />
            </div>
            <div className="col-md-6">
              <label>Your Email</label>
              <input type="email" className="form-control" placeholder="Enter your email address" required />
            </div>
            <div className="col-md-6">
              <label>Phone</label>
              <input type="text" className="form-control" placeholder="Enter your phone number" required />
            </div>
            <div className="col-md-6">
              <label>Location</label>
              <input type="text" className="form-control" placeholder="Enter your location" required />
            </div>
            <div className="col-md-12">
              <label>Skills</label>
              <textarea className="form-control" rows="4" placeholder="List your skills" required></textarea>
            </div>
            <div className="col-md-12">
              <label>Upload Resume</label>
              <input type="file" className="form-control" required />
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary">Submit Profile</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Careers;