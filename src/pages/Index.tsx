
const Index = () => {
  return (
    <div className="nellai-digital-hall">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <img src="/lovable-uploads/de99f51a-0b2e-46e3-aba8-eac2d14313f6.png" alt="Nellai Digital Hall Logo" className="logo" />
              <span className="logo-text">Nellai Digital Hall</span>
            </div>
            <ul className="nav-menu">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About Us</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#gallery" className="nav-link">Gallery</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Premium Digital Hall & Equipment Rental in Tirunelveli</h1>
            <p className="hero-subtitle">Professional halls, projectors, laptops, and computers for your events, meetings, and conferences</p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Our Services</a>
              <a href="https://wa.me/919876543210?text=Hello! I'm interested in your hall and equipment rental services." target="_blank" className="btn btn-secondary">WhatsApp Enquiry</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-badge">
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Nellai Digital Hall</h2>
            <p className="section-subtitle">Your trusted partner for premium event solutions in Tirunelveli</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Excellence in Event Solutions</h3>
              <p>Located in the heart of Tirunelveli, Nellai Digital Hall has been serving the community with premium hall rental and equipment services. We specialize in providing modern, well-equipped digital halls perfect for conferences, meetings, seminars, and special events.</p>
              <p>Our commitment to professionalism and quality has made us the preferred choice for businesses, educational institutions, and individuals looking for reliable event solutions in Tirunelveli and surrounding areas.</p>
              <div className="about-features">
                <div className="feature">
                  <h4>Modern Facilities</h4>
                  <p>State-of-the-art digital halls with premium amenities</p>
                </div>
                <div className="feature">
                  <h4>Professional Service</h4>
                  <p>Dedicated support team for seamless event execution</p>
                </div>
                <div className="feature">
                  <h4>Prime Location</h4>
                  <p>Conveniently located in Tirunelveli with easy accessibility</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Modern conference hall" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive rental solutions for all your event needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Digital Hall Rental" />
              </div>
              <h3>Digital Hall Rental</h3>
              <p>Premium digital halls equipped with modern audio-visual systems, comfortable seating, and professional ambiance perfect for conferences, seminars, and corporate events.</p>
              <ul>
                <li>Air-conditioned halls</li>
                <li>Professional lighting</li>
                <li>Sound systems</li>
                <li>Comfortable seating</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Projector Rental" />
              </div>
              <h3>Projector Rental</h3>
              <p>High-quality projectors with crystal-clear display for presentations, training sessions, and entertainment. Various models available to suit different venue sizes and requirements.</p>
              <ul>
                <li>HD & 4K projectors</li>
                <li>Multiple connectivity options</li>
                <li>Portable & fixed installations</li>
                <li>Technical support included</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Laptop Rental" />
              </div>
              <h3>Laptop Rental</h3>
              <p>Latest model laptops for business presentations, training programs, and temporary office setups. All devices come with pre-installed software and technical support.</p>
              <ul>
                <li>Latest models available</li>
                <li>Pre-configured software</li>
                <li>Various specifications</li>
                <li>Flexible rental periods</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Computer Rental" />
              </div>
              <h3>Computer Rental</h3>
              <p>Desktop computers for temporary office setups, training centers, or events requiring multiple workstations. Complete setup with monitors, keyboards, and peripherals.</p>
              <ul>
                <li>Complete workstation setup</li>
                <li>Multiple configurations</li>
                <li>Bulk rental discounts</li>
                <li>Installation & maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">Glimpses of our premium facilities and successful events</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Modern conference hall setup" />
              <div className="gallery-overlay">
                <h4>Conference Hall Setup</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Professional presentation setup" />
              <div className="gallery-overlay">
                <h4>Presentation Setup</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="High-quality projector" />
              <div className="gallery-overlay">
                <h4>HD Projector</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Laptop rental for events" />
              <div className="gallery-overlay">
                <h4>Laptop Setup</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Corporate event hall" />
              <div className="gallery-overlay">
                <h4>Corporate Event</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Training session setup" />
              <div className="gallery-overlay">
                <h4>Training Session</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">Get in touch for bookings and enquiries</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Ready to book our premium services? Contact us today for competitive pricing and personalized solutions.</p>
              <div className="contact-item">
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/919876543210?text=Hello! I'm interested in your hall and equipment rental services." target="_blank">+91 98765 43210</a></p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p><a href="mailto:info@nellaidigitalhall.com">info@nellaidigitalhall.com</a></p>
              </div>
              <div className="contact-item">
                <h4>Address</h4>
                <p>Nellai Digital Hall<br />
                Tirunelveli, Tamil Nadu<br />
                India - 627001</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form className="enquiry-form">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Your Phone Number" required />
                </div>
                <div className="form-group">
                  <select name="service" required>
                    <option value="">Select Service</option>
                    <option value="hall-rental">Digital Hall Rental</option>
                    <option value="projector-rental">Projector Rental</option>
                    <option value="laptop-rental">Laptop Rental</option>
                    <option value="computer-rental">Computer Rental</option>
                    <option value="multiple-services">Multiple Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                <p className="form-note">Note: This is a demo form. For immediate response, please use WhatsApp or call us directly.</p>
              </form>
            </div>
          </div>
          <div className="map-container">
            <h3>Find Us</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.36476321891!2d77.6870!3d8.7139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04115a8c5c0b77%3A0x3b04115a8c5c0b77!2sTirunelveli%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nellai Digital Hall Location - Tirunelveli">
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/lovable-uploads/de99f51a-0b2e-46e3-aba8-eac2d14313f6.png" alt="Nellai Digital Hall Logo" className="footer-logo-img" />
                <span className="footer-logo-text">Nellai Digital Hall</span>
              </div>
              <p>Premium digital hall and equipment rental services in Tirunelveli. Your trusted partner for professional events and meetings.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Digital Hall Rental</li>
                <li>Projector Rental</li>
                <li>Laptop Rental</li>
                <li>Computer Rental</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📱 <a href="tel:+919876543210">+91 98765 43210</a></p>
              <p>📧 <a href="mailto:info@nellaidigitalhall.com">info@nellaidigitalhall.com</a></p>
              <p>📍 Tirunelveli, Tamil Nadu</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Nellai Digital Hall. All rights reserved. | Professional Hall & Equipment Rental Services in Tirunelveli</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919876543210?text=Hello! I'm interested in your hall and equipment rental services." 
         className="whatsapp-float" 
         target="_blank" 
         title="Chat with us on WhatsApp">
        <span className="whatsapp-icon">💬</span>
      </a>
    </div>
  );
};

export default Index;
