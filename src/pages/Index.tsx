
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

const Index = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Hall images first, then event images
  const heroImages = [
    {
      url: "/lovable-uploads/ada55ee4-5db5-445b-890f-5f19e6a7cdb1.png",
      title: "Professional Conference Setup"
    },
    {
      url: "/lovable-uploads/efde9524-931b-4cdb-b74d-94a6526a64a4.png",
      title: "Modern Training Hall"
    },
    {
      url: "/lovable-uploads/8a2c5b5c-96f1-418c-b41e-39daaec837e2.png",
      title: "Executive Meeting Room"
    },
    {
      url: "/lovable-uploads/1e6b4475-9175-4b47-9902-e7f365f3f870.png",
      title: "Premium Conference Hall"
    }
  ];

  // WhatsApp enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/919944222744?text=Hello! I'm interested in your hall and equipment rental services.", "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'm interested in your services.
    
Name: ${enquiryForm.name}
Phone: ${enquiryForm.phone}
Email: ${enquiryForm.email}
Event Type: ${enquiryForm.eventType}
Date: ${enquiryForm.date}
Number of Guests: ${enquiryForm.guests}
Message: ${enquiryForm.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919944222744?text=${encodedMessage}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="nellai-digital-hall">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <a href="#home" className="logo-link">
                <img src="/lovable-uploads/eb406ff7-b430-4263-b659-0fcb8150db93.png" alt="Nellai Digital Hall - Premium Event Solutions" className="logo" />
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
            <p className="hero-subtitle">Professional conference halls, modern equipment, and expert event solutions for businesses, training institutes, and organizations in Palayamkottai, Tirunelveli</p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Explore Our Services</a>
              <button onClick={handleWhatsAppContact} className="btn btn-secondary">
                WhatsApp Enquiry
              </button>
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
            <p className="section-subtitle">Your trusted partner for premium conference halls and professional event solutions in Tirunelveli</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Excellence in Event Solutions</h3>
              <p>Located at 10K/4, Trivandrum Road, Palayamkottai, Tirunelveli, Nellai Digital Hall has been serving businesses, educational institutions, and organizations with premium conference hall rentals and modern equipment solutions.</p>
              <p>We specialize in providing fully-equipped digital halls perfect for corporate meetings, training sessions, seminars, workshops, and professional events. Our commitment to quality and professional service has made us the preferred choice in Tirunelveli.</p>
              <div className="about-features">
                <div className="feature">
                  <h4>Modern Infrastructure</h4>
                  <p>State-of-the-art conference halls with premium seating and professional setup</p>
                </div>
                <div className="feature">
                  <h4>Professional Support</h4>
                  <p>Dedicated technical team for seamless event execution and equipment management</p>
                </div>
                <div className="feature">
                  <h4>Prime Location</h4>
                  <p>Conveniently located in Palayamkottai with easy accessibility and parking facilities</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/lovable-uploads/ada55ee4-5db5-445b-890f-5f19e6a7cdb1.png" alt="Professional conference hall setup in Tirunelveli" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Professional Services</h2>
            <p className="section-subtitle">Comprehensive event solutions and equipment rental services for all your business needs</p>
          </div>
          
          {/* Conference Hall Services */}
          <div className="service-category">
            <h3 className="category-title">Conference Hall Rental</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src="/lovable-uploads/ada55ee4-5db5-445b-890f-5f19e6a7cdb1.png" alt="Professional Conference Hall in Tirunelveli" />
                </div>
                <h4>Executive Conference Hall</h4>
                <p>Premium conference halls with professional seating arrangements for corporate meetings and business presentations.</p>
                <ul>
                  <li>50-80 seating capacity</li>
                  <li>Professional lighting system</li>
                  <li>Advanced audio equipment</li>
                  <li>Air conditioning facility</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="/lovable-uploads/efde9524-931b-4cdb-b74d-94a6526a64a4.png" alt="Training Hall Rental in Tirunelveli" />
                </div>
                <h4>Training & Seminar Hall</h4>
                <p>Spacious halls designed for training programs, workshops, and educational seminars with modern amenities.</p>
                <ul>
                  <li>60-100 seating capacity</li>
                  <li>Projector and screen setup</li>
                  <li>Wireless microphone system</li>
                  <li>Comfortable seating arrangement</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="/lovable-uploads/8a2c5b5c-96f1-418c-b41e-39daaec837e2.png" alt="Meeting Room Rental in Tirunelveli" />
                </div>
                <h4>Executive Meeting Room</h4>
                <p>Intimate meeting spaces perfect for board meetings, interviews, and small group discussions.</p>
                <ul>
                  <li>20-30 seating capacity</li>
                  <li>Conference table setup</li>
                  <li>Professional ambiance</li>
                  <li>Privacy and comfort assured</li>
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
                  <img src="/lovable-uploads/1e6b4475-9175-4b47-9902-e7f365f3f870.png" alt="Audio Visual Equipment Rental" />
                </div>
                <h4>HD Projectors & Screens</h4>
                <p>High-definition projectors with crystal-clear display for professional presentations and training sessions.</p>
                <ul>
                  <li>HD & Full HD resolution</li>
                  <li>Large projection screens</li>
                  <li>Multiple input connectivity</li>
                  <li>Technical support included</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Laptop Rental Services in Tirunelveli" />
                </div>
                <h4>Laptop & Computer Rental</h4>
                <p>Latest model laptops and desktop computers for training programs and temporary office setups.</p>
                <ul>
                  <li>Latest model laptops</li>
                  <li>Pre-configured software</li>
                  <li>Desktop workstations</li>
                  <li>Flexible rental periods</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Audio Visual Equipment Rental" />
                </div>
                <h4>Audio Visual Equipment</h4>
                <p>Complete audio-visual solutions including sound systems, microphones, and lighting for professional events.</p>
                <ul>
                  <li>Professional sound systems</li>
                  <li>Wireless microphones</li>
                  <li>Stage lighting equipment</li>
                  <li>Technical operator support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="service-category">
            <h3 className="category-title">Event Support Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Event Management Services" />
                </div>
                <h4>Event Coordination</h4>
                <p>Professional event planning and coordination services to ensure your events run smoothly from start to finish.</p>
                <ul>
                  <li>Event planning consultation</li>
                  <li>Setup and coordination</li>
                  <li>Technical assistance</li>
                  <li>On-site support team</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Furniture and Seating Arrangements" />
                </div>
                <h4>Furniture & Seating</h4>
                <p>Premium seating arrangements and furniture to complement your event setup and enhance participant comfort.</p>
                <ul>
                  <li>Premium seating options</li>
                  <li>Conference tables</li>
                  <li>Podiums and lecterns</li>
                  <li>Custom arrangements</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Catering and Refreshment Services" />
                </div>
                <h4>Refreshment Services</h4>
                <p>Professional catering and refreshment arrangements to keep your participants energized throughout the event.</p>
                <ul>
                  <li>Tea & coffee arrangements</li>
                  <li>Lunch and snack catering</li>
                  <li>Water and refreshments</li>
                  <li>Customized meal plans</li>
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
            <h2 className="section-title">Our Facilities Gallery</h2>
            <p className="section-subtitle">Take a look at our professional conference halls and successful events</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/lovable-uploads/efde9524-931b-4cdb-b74d-94a6526a64a4.png" alt="Modern training hall setup in Nellai Digital Hall" />
              <div className="gallery-overlay">
                <h4>Training Hall Setup</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/lovable-uploads/ada55ee4-5db5-445b-890f-5f19e6a7cdb1.png" alt="Professional conference in progress" />
              <div className="gallery-overlay">
                <h4>Conference in Progress</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/lovable-uploads/8a2c5b5c-96f1-418c-b41e-39daaec837e2.png" alt="Executive meeting room arrangement" />
              <div className="gallery-overlay">
                <h4>Executive Meeting Room</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/lovable-uploads/1e6b4475-9175-4b47-9902-e7f365f3f870.png" alt="Premium conference hall with projector setup" />
              <div className="gallery-overlay">
                <h4>Premium Conference Hall</h4>
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
            <p className="section-subtitle">Get in touch for bookings and enquiries - We're here to help you plan your perfect event</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Ready to book our premium conference halls and equipment? Contact us today for competitive pricing and personalized event solutions.</p>
              <div className="contact-item">
                <h4>WhatsApp & Phone</h4>
                <p><a href="https://wa.me/919944222744?text=Hello! I'm interested in your hall and equipment rental services." target="_blank">+91 99442 22744</a></p>
              </div>
              <div className="contact-item">
                <h4>Our Address</h4>
                <p>Nellai Digital Hall<br />
                10K/4, Trivandrum Road<br />
                Palayamkottai, Tirunelveli - 627 002<br />
                Tamil Nadu, India</p>
              </div>
              <div className="contact-item">
                <h4>Business Hours</h4>
                <p>Monday to Sunday: 8:00 AM - 10:00 PM<br />
                Available for bookings and site visits</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us an Enquiry</h3>
              <form onSubmit={handleFormSubmit} className="enquiry-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={enquiryForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={enquiryForm.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={enquiryForm.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="eventType"
                    value={enquiryForm.eventType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Event Type *</option>
                    <option value="Conference">Conference</option>
                    <option value="Training">Training Session</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Meeting">Business Meeting</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    value={enquiryForm.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    value={enquiryForm.guests}
                    onChange={handleInputChange}
                    min="1"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Additional Requirements or Message"
                    value={enquiryForm.message}
                    onChange={handleInputChange}
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary whatsapp-btn">
                  <svg className="whatsapp-icon-btn" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                  Send WhatsApp Message
                </button>
                <p className="form-note">Your enquiry will be sent directly to our WhatsApp for quick response.</p>
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
                <img src="/lovable-uploads/eb406ff7-b430-4263-b659-0fcb8150db93.png" alt="Nellai Digital Hall Logo" className="footer-logo-img" />
              </div>
              <p>Premium digital hall and equipment rental services in Tirunelveli. Your trusted partner for professional conferences, training sessions, and corporate events.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/nellaidigitalhall" target="_blank" className="social-link facebook" title="Follow us on Facebook">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/nellaidigitalhall" target="_blank" className="social-link instagram" title="Follow us on Instagram">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://g.page/nellaidigitalhall" target="_blank" className="social-link google" title="Find us on Google">
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
                <li><a href="#services">Our Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Our Services</h4>
              <ul>
                <li>Conference Hall Rental</li>
                <li>Training & Seminar Halls</li>
                <li>HD Projector Rental</li>
                <li>Laptop & Computer Rental</li>
                <li>Audio Visual Equipment</li>
                <li>Event Coordination</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Information</h4>
              <p><strong>Phone & WhatsApp:</strong><br /><a href="tel:+919944222744">+91 99442 22744</a></p>
              <p><strong>Address:</strong><br />10K/4, Trivandrum Road<br />Palayamkottai, Tirunelveli - 627 002<br />Tamil Nadu, India</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Nellai Digital Hall. All rights reserved. | Professional Conference Hall & Equipment Rental Services in Tirunelveli</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button onClick={handleWhatsAppContact} className="whatsapp-float" title="Chat with us on WhatsApp">
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
