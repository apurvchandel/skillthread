import React from 'react';

function Home() {
  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1>Empowering Digital Confidence, <br />One Innovation at a Time</h1>
              <p>Skillthread Consultancy Services is a next-generation IT Services & Consulting company helping global enterprises and government agencies build, secure, and modernize the technology that powers their success.</p>
              <div className="d-flex gap-3">
                <a href="#services" className="btn-get-started">Discover Our Services</a>
                <a href="#services" className="btn-get-started">Join Our Talent Community</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;