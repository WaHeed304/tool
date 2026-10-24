"use client";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  const benefits = [
    {
      icon: "bi bi-currency-dollar",
      title: "Cost-Effective Solution",
      description: "Access premium SEO tools at a fraction of individual costs. Save up to 90% while getting enterprise-level tools.",
      highlight: "Save 90% on costs"
    },
    {
      icon: "bi bi-star",
      title: "Premium Tools Access",
      description: "Get exclusive access to premium SEO tools that would otherwise be too expensive to purchase individually.",
      highlight: "50+ Premium tools"
    },
    {
      icon: "bi bi-people",
      title: "Learning Community",
      description: "Join a community of professionals who share knowledge, best practices, and SEO strategies.",
      highlight: "Expert collaboration"
    },
    {
      icon: "bi bi-tools",
      title: "Complete Tool Suite",
      description: "Access keyword research, backlink analysis, rank tracking, and site audit tools in one platform.",
      highlight: "All-in-one toolkit"
    }
  ];

  return (
    <section className="benefits-area sp" style={{backgroundColor: '#f8f9fa', padding: '80px 0'}}>
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
                  Why Choose Our Platform
                </span>
              </p>
              <h2 className="text-anime-style-3">
                Benefits of Our SEO Tools
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6',
                marginTop: '20px',
                maxWidth: '600px',
                margin: '20px auto 0'
              }}>
                Discover the powerful advantages of our group buy SEO tools platform designed to maximize your digital marketing potential while minimizing costs.
              </p>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="benefit-card"
                style={{
                  backgroundColor: '#fff',
                  padding: '30px 25px',
                  borderRadius: '15px',
                  marginBottom: '30px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid #e9ecef',
                  height: '280px',
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
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#ff6b35',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative'
                  }}
                >
                  <i 
                    className={benefit.icon}
                    style={{
                      fontSize: '24px',
                      color: '#fff'
                    }}
                  ></i>
                </div>
                
                <h4
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: '#333',
                    lineHeight: '1.3'
                  }}
                >
                  {benefit.title}
                </h4>
                
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '15px',
                    flex: '1'
                  }}
                >
                  {benefit.description}
                </p>
                
                <div
                  className="highlight-badge"
                  style={{
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'inline-block',
                    border: '1px solid #bbdefb'
                  }}
                >
                  {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row" style={{marginTop: '50px'}}>
          <div className="col-lg-12">
            <div className="cta-section" style={{
              backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '50px 40px',
              borderRadius: '15px',
              textAlign: 'center',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '50px 40px',
                borderRadius: '15px',
                textAlign: 'center',
                color: '#fff'
              }}>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#fff'
                }}>
                  Ready to Transform Your SEO Strategy?
                </h3>
                <p style={{
                  fontSize: '18px',
                  marginBottom: '30px',
                  opacity: '0.9',
                  maxWidth: '600px',
                  margin: '0 auto 30px'
                }}>
                  Join thousands of successful businesses who have already discovered the power of our group buy SEO tools platform.
                </p>
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup" 
                  className="theme-btn1" 
                  style={{
                    display: 'inline-block',
                    padding: '15px 40px',
                    backgroundColor: '#fff',
                    color: '#667eea',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Get Started Now <span><i className="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
