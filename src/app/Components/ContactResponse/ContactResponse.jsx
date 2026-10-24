"use client";
import Image from "next/image";
import React from "react";

const ContactResponse = () => {
    const responseTimes = [
        {
            icon: "bi bi-lightning",
            title: "Live Chat",
            description: "Immediate response during business hours",
            time: "0-2 minutes"
        },
        {
            icon: "bi bi-envelope",
            title: "Email Support",
            description: "Detailed responses to your queries",
            time: "2-4 hours"
        },
        {
            icon: "bi bi-ticket",
            title: "Support Tickets",
            description: "Tracked support for complex issues",
            time: "4-8 hours"
        },
        {
            icon: "bi bi-skype",
            title: "Skype Support",
            description: "Direct communication with our team",
            time: "1-2 hours"
        }
    ];

    return (
        <section className="response-time sp" style={{backgroundColor: '#fff', padding: '80px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading5">
                            <p className="title">
                                <span className="span">
                                    <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20} />{" "}
                                    Response Times
                                </span>
                            </p>
                            <h2 className="text-anime-style-3">Our Response Times</h2>
                            <p style={{
                                fontSize: '18px',
                                color: '#666',
                                lineHeight: '1.6',
                                marginTop: '20px'
                            }}>
                                We pride ourselves on quick and efficient customer support across all channels
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space30"></div>
                
                <div className="row">
                    {responseTimes.map((response, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="response-item" style={{
                                backgroundColor: '#f8f9fa',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                marginBottom: '30px',
                                textAlign: 'center',
                                border: '1px solid #e9ecef',
                                transition: 'all 0.3s ease-in-out',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.backgroundColor = '#fff';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div className="response-icon" style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#ff6b35',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 25px',
                                    position: 'relative'
                                }}>
                                    <i className={response.icon} style={{
                                        fontSize: '36px',
                                        color: '#fff'
                                    }}></i>
                                </div>
                                
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    marginBottom: '15px',
                                    color: '#333',
                                    lineHeight: '1.3'
                                }}>
                                    {response.title}
                                </h3>
                                
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666',
                                    lineHeight: '1.6',
                                    marginBottom: '20px'
                                }}>
                                    {response.description}
                                </p>
                                
                                <div className="time-badge" style={{
                                    backgroundColor: '#ff6b35',
                                    color: '#fff',
                                    padding: '8px 20px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    display: 'inline-block'
                                }}>
                                    {response.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="row" style={{marginTop: '50px'}}>
                    <div className="col-lg-12">
                        <div className="business-hours" style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '15px',
                            border: '1px solid #e9ecef'
                        }}>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: '#333',
                                textAlign: 'center'
                            }}>
                                Business Hours
                            </h3>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="hour-item" style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        marginBottom: '15px',
                                        border: '1px solid #e9ecef'
                                    }}>
                                        <h5 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            marginBottom: '8px',
                                            color: '#333'
                                        }}>Monday - Friday</h5>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#666',
                                            margin: '0'
                                        }}>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hour-item" style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        marginBottom: '15px',
                                        border: '1px solid #e9ecef'
                                    }}>
                                        <h5 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            marginBottom: '8px',
                                            color: '#333'
                                        }}>Saturday</h5>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#666',
                                            margin: '0'
                                        }}>10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hour-item" style={{
                                        textAlign: 'center',
                                        padding: '20px',
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        marginBottom: '15px',
                                        border: '1px solid #e9ecef'
                                    }}>
                                        <h5 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            marginBottom: '8px',
                                            color: '#333'
                                        }}>Sunday</h5>
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#666',
                                            margin: '0'
                                        }}>Closed</p>
                                    </div>
                                </div>
                            </div>
                            <p style={{
                                fontSize: '14px',
                                color: '#666',
                                textAlign: 'center',
                                marginTop: '20px',
                                fontStyle: 'italic'
                            }}>
                                * Emergency support available 24/7 for critical issues
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactResponse;
