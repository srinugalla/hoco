import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Get in Touch</h1>
                <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Visit Us</h2>
                    <div className="store-locations">
                        <div className="store">
                            <h3>ILAC Shopping Centre</h3>
                            <p className="address">Ilac Centre, Unit 59 Parnell Mall, Henry St, North City, Dublin 1, D01 WC79</p>
                            <p className="phone">Phone: (01) 878 8378</p>
                            <p className="hours">Hours: Mon-Sat 10am-7pm, Sun 11am-6pm</p>
                            <div className="map-link">
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-map-marker-alt"></i> View on Map
                                </a>
                            </div>
                        </div>
                        <div className="store">
                            <h3>Stephen's Green Shopping Centre</h3>
                            <p className="address">Unit 2A, Stephen's Green Shopping Centre, Dublin 2</p>
                            <p className="phone">Phone: (01) 475 8490</p>
                            <p className="hours">Hours: Mon-Sat 10am-7pm, Sun 11am-6pm</p>
                            <div className="map-link">
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-map-marker-alt"></i> View on Map
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-details">
                        <h2>Contact Details</h2>
                        <p className="email"><i className="far fa-envelope"></i> info@hocomobile.ie</p>
                        <div className="social-links">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send Us a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;