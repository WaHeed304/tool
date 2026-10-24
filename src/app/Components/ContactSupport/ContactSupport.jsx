"use client";
import Image from "next/image";
import React from "react";

const ContactSupport = () => {
    const supportTypes = [
        {
            icon: "bi bi-tools",
            title: "Technical Support",
            description: "Get help with tool access, technical issues, and platform navigation. Our technical team is available to assist you with any problems you encounter.",
            features: [
                "Tool access issues",
                "Platform navigation",
                "Browser compatibility",
                "Account setup"
            ]
        },
        {
            icon: "bi bi-question-circle",
            title: "General Inquiries",
            description: "Have questions about our services, pricing, or features? Our support team can provide detailed information about all our offerings.",
            features: [
                "Service information",
                "Pricing questions",
                "Feature explanations",
                "Account management"
            ]
        },
        {
            icon: "bi bi-graph-up",
            title: "SEO Guidance",
            description: "Need help with SEO strategies or tool recommendations? Our experts can guide you on the best practices and tool usage.",
            features: [
                "SEO strategy advice",
                "Tool recommendations",
                "Best practices",
                "Optimization tips"
            ]
        },
        {
            icon: "bi bi-credit-card",
            title: "Billing Support",
            description: "Questions about payments, refunds, or subscription management? Our billing team is here to help with all financial matters.",
            features: [
                "Payment issues",
                "Refund requests",
                "Subscription changes",
                "Invoice queries"
            ]
        }
    ];

    return (
        <section className="support-types sp" style={{backgroundColor: '#f8f9fa', padding: '80px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading5">
                            <p className="title">
                                <span className="span">
                                    <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20} />{" "}
                                    Support Services
                                </span>
                            </p>
                            <h2 className="text-anime-style-3">How We Can Help You</h2>
                            <p style={{
                                fontSize: '18px',
                                color: '#666',
                                lineHeight: '1.6',
                                marginTop: '20px'
                            }}>
                                Our dedicated support team is here to assist you with all your SEO group buy tool needs
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space30"></div>
                
                <div className="row">
                    {supportTypes.map((support, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="support-card" style={{
                                backgroundColor: '#fff',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                marginBottom: '30px',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease-in-out',
                                border: '1px solid #e9ecef',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
                            }}>
                                <div className="support-icon" style={{
                                    width: '70px',
                                    height: '70px',
                                    backgroundColor: '#ff6b35',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '25px',
                                    position: 'relative'
                                }}>
                                    <i className={support.icon} style={{
                                        fontSize: '32px',
                                        color: '#fff'
                                    }}></i>
                                </div>
                                
                                <h3 style={{
                                    fontSize: '22px',
                                    fontWeight: '700',
                                    marginBottom: '15px',
                                    color: '#333',
                                    lineHeight: '1.3'
                                }}>
                                    {support.title}
                                </h3>
                                
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    flex: '1'
                                }}>
                                    {support.description}
                                </p>
                                
                                <ul style={{
                                    listStyle: 'none',
                                    padding: '0',
                                    margin: '0'
                                }}>
                                    {support.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} style={{
                                            fontSize: '14px',
                                            color: '#555',
                                            marginBottom: '8px',
                                            paddingLeft: '20px',
                                            position: 'relative'
                                        }}>
                                            <i className="bi bi-check-circle" style={{
                                                position: 'absolute',
                                                left: '0',
                                                top: '2px',
                                                color: '#ff6b35',
                                                fontSize: '12px'
                                            }}></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSupport;
