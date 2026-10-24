"use client";
import Image from "next/image";
import React from "react";

const MissionVision = () => {
  const sections = [
    {
      icon: "bi bi-bullseye",
      title: "Our Mission",
      content: "To democratize access to premium SEO tools by making them affordable for small businesses, freelancers, and individual website owners. We believe that everyone should have access to the tools they need to succeed online, regardless of their budget constraints.",
      highlight: "Making premium tools accessible to everyone"
    },
    {
      icon: "bi bi-eye",
      title: "Our Vision",
      content: "To become the leading provider of group buy SEO tools, helping thousands of businesses worldwide improve their online presence and achieve their digital marketing goals through affordable access to premium tools.",
      highlight: "Leading provider of group buy SEO tools"
    },
    {
      icon: "bi bi-heart",
      title: "Our Values",
      content: "We are committed to providing reliable, high-quality services with excellent customer support. We believe in transparency, affordability, and helping our customers succeed in their digital marketing endeavors.",
      highlight: "Reliability, transparency, and customer success"
    }
  ];

  return (
    <section className="mission-vision-area sp" style={{backgroundColor: '#fff', padding: '80px 0'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading5">
              <p className="title">
                <span className="span">
                  <Image
                    src="/assets/img/logo/span5.svg"
                    alt="img"
                    width={20}
                    height={20}
                  />{" "}
                  Company Foundation
                </span>
              </p>
              <h2 className="text-anime-style-3">
                Our Mission, Vision & Values
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6',
                marginTop: '20px',
                maxWidth: '600px',
                margin: '20px auto 0'
              }}>
                Discover the core principles that drive our commitment to making premium SEO tools accessible to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          {sections.map((section, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="mission-card"
                style={{
                  backgroundColor: '#fff',
                  padding: '40px 30px',
                  borderRadius: '15px',
                  marginBottom: '30px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid #e9ecef',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
                }}
              >
                <div
                  className="icon-wrapper"
                  style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#ff6b35',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px',
                    position: 'relative'
                  }}
                >
                  <i 
                    className={section.icon}
                    style={{
                      fontSize: '28px',
                      color: '#fff'
                    }}
                  ></i>
                </div>
                
                <h4
                  style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    color: '#333',
                    lineHeight: '1.3'
                  }}
                >
                  {section.title}
                </h4>
                
                <p
                  style={{
                    fontSize: '16px',
                    color: '#666',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    flex: '1'
                  }}
                >
                  {section.content}
                </p>
                
                <div
                  className="highlight-badge"
                  style={{
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    padding: '10px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'inline-block',
                    border: '1px solid #bbdefb',
                    textAlign: 'center',
                    width: '100%'
                  }}
                >
                  {section.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row" style={{marginTop: '50px'}}>
          <div className="col-lg-12">
            <div className="commitment-section" style={{
              backgroundColor: '#f8f9fa',
              padding: '50px 40px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '2px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#333'
              }}>
                <i className="bi bi-shield-check" style={{color: '#ff6b35', marginRight: '15px'}}></i>
                Our Commitment to You
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.7',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: '30px'
              }}>
                We are dedicated to providing exceptional value through our group buy SEO tools platform. Our commitment extends beyond just offering affordable tools - we ensure reliable service, comprehensive support, and continuous innovation to help your business thrive in the digital landscape.
              </p>
              <div className="row" style={{marginTop: '40px'}}>
                <div className="col-lg-4 col-md-6">
                  <div className="commitment-item" style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <i className="bi bi-award" style={{
                      fontSize: '32px',
                      color: '#ff6b35',
                      marginBottom: '15px'
                    }}></i>
                    <h5 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px'
                    }}>Quality Assurance</h5>
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      margin: '0'
                    }}>Premium tools with guaranteed reliability</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="commitment-item" style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <i className="bi bi-headset" style={{
                      fontSize: '32px',
                      color: '#ff6b35',
                      marginBottom: '15px'
                    }}></i>
                    <h5 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px'
                    }}>24/7 Support</h5>
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      margin: '0'
                    }}>Round-the-clock customer assistance</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="commitment-item" style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <i className="bi bi-arrow-up-circle" style={{
                      fontSize: '32px',
                      color: '#ff6b35',
                      marginBottom: '15px'
                    }}></i>
                    <h5 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px'
                    }}>Continuous Growth</h5>
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      margin: '0'
                    }}>Regular updates and new tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
