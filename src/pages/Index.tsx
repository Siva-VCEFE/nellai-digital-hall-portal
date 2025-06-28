
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Index = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Conference Hall"
    },
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Premium Digital Hall"
    },
    {
      url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Professional Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Latest Technology"
    }
  ];

  return (
    <div className="nellai-digital-hall">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <a href="#home" className="logo-link">
                <img src="/lovable-uploads/de99f51a-0b2e-46e3-aba8-eac2d14313f6.png" alt="Nellai Digital Hall Logo" className="logo" />
              </a>
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
            <p className="hero-subtitle">Professional halls, projectors, laptops, and computers for your events, meetings, and conferences in Palayamkottai, Tirunelveli</p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Our Services</a>
              <a href="https://wa.me/919944222744?text=Hello! I'm interested in your hall and equipment rental services." target="_blank" className="btn btn-secondary">WhatsApp Enquiry</a>
            </div>
          </div>
          <div className="hero-carousel">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="carousel-item">
                      <img src={image.url} alt={image.title} className="carousel-image" />
                      <div className="carousel-overlay">
                        <h3>{image.title}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
              <p>Located at Palayamkottai, Tirunelveli, Nellai Digital Hall has been serving the community with premium hall rental and equipment services. We specialize in providing modern, well-equipped digital halls perfect for conferences, meetings, seminars, and special events.</p>
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
                  <p>Conveniently located in Palayamkottai, Tirunelveli with easy accessibility</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Modern conference hall in Tirunelveli" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">Comprehensive rental solutions for all your event needs in Tirunelveli</p>
          </div>
          
          {/* Hall Rental Services */}
          <div className="service-category">
            <h3 className="category-title">Digital Hall Rental Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Conference Hall Rental in Tirunelveli" />
                </div>
                <h4>Conference Hall</h4>
                <p>Premium conference halls for corporate meetings and business events with modern audio-visual systems.</p>
                <ul>
                  <li>50-100 seating capacity</li>
                  <li>Professional lighting</li>
                  <li>Advanced sound systems</li>
                  <li>Air conditioning</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Seminar Hall Rental in Tirunelveli" />
                </div>
                <h4>Seminar Hall</h4>
                <p>Spacious seminar halls perfect for educational workshops, training sessions, and academic events.</p>
                <ul>
                  <li>100-200 seating capacity</li>
                  <li>Digital projector setup</li>
                  <li>Microphone systems</li>
                  <li>Comfortable seating</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Event Hall Rental in Tirunelveli" />
                </div>
                <h4>Multi-Purpose Hall</h4>
                <p>Versatile halls suitable for various events including cultural programs, celebrations, and community gatherings.</p>
                <ul>
                  <li>200+ seating capacity</li>
                  <li>Stage setup available</li>
                  <li>Flexible arrangements</li>
                  <li>Event coordination support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equipment Rental Services */}
          <div className="service-category">
            <h3 className="category-title">Equipment Rental Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Projector Rental in Tirunelveli" />
                </div>
                <h4>HD & 4K Projectors</h4>
                <p>High-quality projectors with crystal-clear display for presentations, training sessions, and entertainment.</p>
                <ul>
                  <li>HD & 4K resolution</li>
                  <li>Multiple connectivity options</li>
                  <li>Portable & fixed installations</li>
                  <li>Technical support included</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Laptop Rental in Tirunelveli" />
                </div>
                <h4>Latest Model Laptops</h4>
                <p>Premium laptops for business presentations, training programs, and temporary office setups.</p>
                <ul>
                  <li>Latest models available</li>
                  <li>Pre-configured software</li>
                  <li>Various specifications</li>
                  <li>Flexible rental periods</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Computer Rental in Tirunelveli" />
                </div>
                <h4>Desktop Computers</h4>
                <p>Complete desktop setups for training centers, temporary offices, or events requiring multiple workstations.</p>
                <ul>
                  <li>Complete workstation setup</li>
                  <li>Multiple configurations</li>
                  <li>Bulk rental discounts</li>
                  <li>Installation & maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="service-category">
            <h3 className="category-title">Additional Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Audio Visual Equipment Rental" />
                </div>
                <h4>Audio Visual Equipment</h4>
                <p>Complete AV solutions including sound systems, microphones, and lighting equipment for professional events.</p>
                <ul>
                  <li>Professional sound systems</li>
                  <li>Wireless microphones</li>
                  <li>LED lighting setup</li>
                  <li>Technical operator support</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Event Management Services" />
                </div>
                <h4>Event Coordination</h4>
                <p>Professional event coordination services to ensure your events run smoothly from start to finish.</p>
                <ul>
                  <li>Event planning support</li>
                  <li>Setup & coordination</li>
                  <li>Technical assistance</li>
                  <li>On-site support team</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Furniture Rental Services" />
                </div>
                <h4>Furniture & Accessories</h4>
                <p>Additional furniture and accessories to complement your event setup and enhance the overall experience.</p>
                <ul>
                  <li>Premium seating options</li>
                  <li>Tables & podiums</li>
                  <li>Decorative accessories</li>
                  <li>Custom arrangements</li>
                </ul>
              </div>
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
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Modern conference hall setup in Tirunelveli" />
              <div className="gallery-overlay">
                <h4>Conference Hall Setup</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Professional presentation setup in Palayamkottai" />
              <div className="gallery-overlay">
                <h4>Presentation Setup</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="High-quality projector rental Tirunelveli" />
              <div className="gallery-overlay">
                <h4>HD Projector</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Laptop rental for events in Tirunelveli" />
              <div className="gallery-overlay">
                <h4>Laptop Setup</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Corporate event hall in Tirunelveli" />
              <div className="gallery-overlay">
                <h4>Corporate Event</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Training session setup in Nellai Digital Hall" />
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
                <p><a href="https://wa.me/919944222744?text=Hello! I'm interested in your hall and equipment rental services." target="_blank">+91 99442 22744</a></p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p><a href="tel:+919944222744">+91 99442 22744</a></p>
              </div>
              <div className="contact-item">
                <h4>Address</h4>
                <p>Nellai Digital Hall<br />
                10K/4, Trivandrum Road<br />
                Palayamkottai, Tirunelveli - 627 002<br />
                Tamil Nadu, India</p>
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
                    <option value="av-equipment">Audio Visual Equipment</option>
                    <option value="event-coordination">Event Coordination</option>
                    <option value="multiple-services">Multiple Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Tell us about your event requirements..." rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                <p className="form-note">Note: This is a demo form. For immediate response, please use WhatsApp or call us directly.</p>
              </form>
            </div>
          </div>
          <div className="map-container">
            <h3>Find Us in Palayamkottai, Tirunelveli</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125477.90765838374!2d77.63139245820312!3d8.713900000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04115a8c5c0b77%3A0x1234567890abcdef!2sPalayamkottai%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627002!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nellai Digital Hall Location - 10K/4, Trivandrum Road, Palayamkottai, Tirunelveli">
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
              </div>
              <p>Premium digital hall and equipment rental services in Tirunelveli. Your trusted partner for professional events and meetings.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/nellaidigitalhall" target="_blank" className="social-link" title="Follow us on Facebook">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/nellaidigitalhall" target="_blank" className="social-link" title="Follow us on Instagram">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://g.page/nellaidigitalhall" target="_blank" className="social-link" title="Find us on Google">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
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
              <h4>Our Services</h4>
              <ul>
                <li>Conference Hall Rental</li>
                <li>Seminar Hall Rental</li>
                <li>HD & 4K Projector Rental</li>
                <li>Laptop & Computer Rental</li>
                <li>Audio Visual Equipment</li>
                <li>Event Coordination</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p><strong>Phone:</strong> <a href="tel:+919944222744">+91 99442 22744</a></p>
              <p><strong>Address:</strong><br />10K/4, Trivandrum Road<br />Palayamkottai, Tirunelveli - 627 002<br />Tamil Nadu, India</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Nellai Digital Hall. All rights reserved. | Professional Hall & Equipment Rental Services in Tirunelveli</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919944222744?text=Hello! I'm interested in your hall and equipment rental services." 
         className="whatsapp-float" 
         target="_blank" 
         title="Chat with us on WhatsApp">
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
