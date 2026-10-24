"use client";
import Image from "next/image";
import { useState } from "react";

const ContactInfo6 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        website: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    website: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="faq-contact sp bg1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="heading1">
                        <p className="title"> <span className="span">
                        <Image src="/assets/img/icons/span1.svg" alt="img" width={21} height={20}   />
                            Contact us seotoolsgroupbuy</span></p>
                        <h2>Still Have Questions?</h2>
                        <div className="space16"></div>
                        <p>Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you 24/7. We understand that navigating SEO tools and group buy services can raise numerous questions. Our dedicated support team is ready to assist you with any queries about our services, tools, or technical issues.</p>
    
                        <div className="faq-contact-boxs">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-box">
                                        <div className="icon">
                                        <Image src="/assets/img/icons/contact-icon1.svg" alt="img" width={33} height={32}   />
                                        </div>
                                        <div className="heading">
                                            <h6>our Email</h6>
                                            <a href="mailto:admin@seotoolsgroupbuy.com">admin@seotoolsgroupbuy.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-box">
                                        <div className="icon">
                                        <Image src="/assets/img/icons/contact-icon2.svg" alt="img" width={32} height={32}   />
                                        </div>
                                        <div className="heading">
                                            <h6>Phone</h6>
                                            <a href="tel:+11234567890">+1 123 456 7890</a>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-contact-form">
                        <h4>Contact Support</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-input">
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            placeholder="First Name" 
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-input">
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            placeholder="Last Name" 
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-input">
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            placeholder="Phone Number" 
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-input">
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="Email Address" 
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="single-input">
                                        <input 
                                            type="url" 
                                            name="website"
                                            placeholder="Website URL" 
                                            value={formData.website}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="single-input">
                                        <textarea 
                                            rows="5" 
                                            name="message"
                                            placeholder="Your Message" 
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="space30"></div>
                                    
                                    {submitStatus === 'success' && (
                                        <div style={{
                                            backgroundColor: '#d4edda',
                                            color: '#155724',
                                            padding: '12px 20px',
                                            borderRadius: '5px',
                                            marginBottom: '20px',
                                            border: '1px solid #c3e6cb'
                                        }}>
                                            <i className="bi bi-check-circle"></i> Message sent successfully! We&apos;ll get back to you soon.
                                        </div>
                                    )}
                                    
                                    {submitStatus === 'error' && (
                                        <div style={{
                                            backgroundColor: '#f8d7da',
                                            color: '#721c24',
                                            padding: '12px 20px',
                                            borderRadius: '5px',
                                            marginBottom: '20px',
                                            border: '1px solid #f5c6cb'
                                        }}>
                                            <i className="bi bi-exclamation-triangle"></i> Failed to send message. Please try again.
                                        </div>
                                    )}
                                    
                                    <div className="button">
                                        <button 
                                            type="submit"
                                            className="theme-btn1" 
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'} 
                                            <span><i className="bi bi-arrow-right"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default ContactInfo6;