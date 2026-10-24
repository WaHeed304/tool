"use client";
import Image from "next/image";
import { useState } from "react";

const ContactInfo7 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        // Create WhatsApp message
        const whatsappMessage = `Hello! I'm ${formData.firstName} ${formData.lastName}.

${formData.email ? `Email: ${formData.email}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}

Message: ${formData.message}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number
        const whatsappNumber = '15205636362'; // +1 (520) 563‑6362
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        setSubmitStatus('success');
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: ''
        });
        
        setIsSubmitting(false);
    };
    return (
        <div>
  <div className="faq-contact contact-page sp bg1">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="heading1">
                    <p className="title"> <span className="span">
                    <Image src="/assets/img/icons/span1.svg" alt="img" width={21} height={20}   />
                        Contact us seotoolsgroupbuy</span></p>
                    <h2>Get in Touch with Our Support Team</h2>
                    <div className="space16"></div>
                    <p>We&apos;re here to help! Reach out to us through any of the following channels. Our dedicated support team is available 24/7 to assist you with any questions about our SEO group buy tools, technical issues, or general inquiries.</p>

                    <div className="contact-methods" style={{marginBottom: '40px'}}>
                        <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '30px', color: '#333'}}>Contact Methods</h3>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-method" style={{
                                    backgroundColor: '#fff',
                                    padding: '25px',
                                    borderRadius: '10px',
                                    marginBottom: '15px',
                                    border: '1px solid #e9ecef',
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <div className="method-icon" style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#ff6b35',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '20px',
                                        flexShrink: '0'
                                    }}>
                                        <i className="bi bi-envelope" style={{fontSize: '20px', color: '#fff'}}></i>
                                    </div>
                                    <div className="method-info">
                                        <h4 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333'}}>Email Support</h4>
                                        <p style={{fontSize: '16px', fontWeight: '600', color: '#ff6b35', marginBottom: '5px'}}>admin@groupbuyseotool.us</p>
                                        <span style={{fontSize: '14px', color: '#666'}}>24/7 Support Available</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-method" style={{
                                    backgroundColor: '#fff',
                                    padding: '25px',
                                    borderRadius: '10px',
                                    marginBottom: '15px',
                                    border: '1px solid #e9ecef',
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <div className="method-icon" style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#25D366',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '20px',
                                        flexShrink: '0'
                                    }}>
                                        <i className="bi bi-whatsapp" style={{fontSize: '20px', color: '#fff'}}></i>
                                    </div>
                                    <div className="method-info">
                                        <h4 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333'}}>WhatsApp Support</h4>
                                        <p style={{fontSize: '16px', fontWeight: '600', color: '#25D366', marginBottom: '5px'}}>+1 (520) 563‑6362</p>
                                        <span style={{fontSize: '14px', color: '#666'}}>Instant messaging support</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-method" style={{
                                    backgroundColor: '#fff',
                                    padding: '25px',
                                    borderRadius: '10px',
                                    marginBottom: '15px',
                                    border: '1px solid #e9ecef',
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <div className="method-icon" style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#ff6b35',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '20px',
                                        flexShrink: '0'
                                    }}>
                                        <i className="bi bi-chat-dots" style={{fontSize: '20px', color: '#fff'}}></i>
                                    </div>
                                    <div className="method-info">
                                        <h4 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333'}}>Live Chat</h4>
                                        <p style={{fontSize: '16px', color: '#666', marginBottom: '5px'}}>Available on our website</p>
                                        <span style={{fontSize: '14px', color: '#666'}}>Quick response time</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-method" style={{
                                    backgroundColor: '#fff',
                                    padding: '25px',
                                    borderRadius: '10px',
                                    marginBottom: '15px',
                                    border: '1px solid #e9ecef',
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <div className="method-icon" style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#ff6b35',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '20px',
                                        flexShrink: '0'
                                    }}>
                                        <i className="bi bi-skype" style={{fontSize: '20px', color: '#fff'}}></i>
                                    </div>
                                    <div className="method-info">
                                        <h4 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333'}}>Skype Support</h4>
                                        <p style={{fontSize: '16px', fontWeight: '600', color: '#ff6b35', marginBottom: '5px'}}>seogroupbuy.support</p>
                                        <span style={{fontSize: '14px', color: '#666'}}>Direct communication</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-method" style={{
                                    backgroundColor: '#fff',
                                    padding: '25px',
                                    borderRadius: '10px',
                                    marginBottom: '15px',
                                    border: '1px solid #e9ecef',
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <div className="method-icon" style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#ff6b35',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '20px',
                                        flexShrink: '0'
                                    }}>
                                        <i className="bi bi-ticket" style={{fontSize: '20px', color: '#fff'}}></i>
                                    </div>
                                    <div className="method-info">
                                        <h4 style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333'}}>Ticket System</h4>
                                        <p style={{fontSize: '16px', color: '#666', marginBottom: '5px'}}>Create support tickets</p>
                                        <span style={{fontSize: '14px', color: '#666'}}>Track your requests</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="business-hours" style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e9ecef'
                    }}>
                        <h3 style={{fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#333'}}>Business Hours</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <div style={{textAlign: 'center', padding: '15px'}}>
                                    <h5 style={{fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#333'}}>Monday - Friday</h5>
                                    <p style={{fontSize: '14px', color: '#666', margin: '0'}}>9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div style={{textAlign: 'center', padding: '15px'}}>
                                    <h5 style={{fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#333'}}>Saturday</h5>
                                    <p style={{fontSize: '14px', color: '#666', margin: '0'}}>10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div style={{textAlign: 'center', padding: '15px'}}>
                                    <h5 style={{fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#333'}}>Sunday</h5>
                                    <p style={{fontSize: '14px', color: '#666', margin: '0'}}>Closed</p>
                                </div>
                            </div>
                        </div>
                        <p style={{
                            fontSize: '14px',
                            color: '#666',
                            textAlign: 'center',
                            marginTop: '15px',
                            fontStyle: 'italic'
                        }}>
                            * Emergency support available 24/7 for critical issues
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="faq-contact-form">
                    <h4>Send us a Message</h4>
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
                                        placeholder="Phone Number (Optional)" 
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
                                        placeholder="Email Address (Optional)" 
                                        value={formData.email}
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
                                        <i className="bi bi-whatsapp"></i> WhatsApp opened! Please send your message there.
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
                                        {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'} 
                                        <span><i className="bi bi-whatsapp"></i></span>
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

        </div>
    );
};

export default ContactInfo7;