import React from 'react';
import HeroBanner5 from '../Components/HeroBanner/HeroBanner5';
import About5 from '../Components/About/About5';
import ContactIno3 from '../Components/ContactInfo/ContactIno3';
import Pricing5 from '../Components/Pricing/Pricing5';
import Blog5 from '../Components/Blog/Blog5';
import Testimonial7 from '../Components/Testimonial/Testimonial7';

const page = () => {
    return (
        <div>
            <HeroBanner5
                subtitle="toolstap"
                title="Access 50+ Premium Tools"
                content="Get the most complete collection of SEO tools at unbeatable prices. Why spend more when you can get the same tools for less?"
                img1="/assets/img/hero/hero5-img1.png"
                img2="/assets/img/hero/hero5-img2 (1).png"
                shape1="/assets/img/shapes/hero5-shape1.png"
                shape2="/assets/img/shapes/hero5-shape2.png"
                shape3="/assets/img/shapes/hero5-shape2.png"
            ></HeroBanner5>  
            <About5
                shape="/assets/img/shapes/about1-bg-shape.png"
                img1="/assets/img/about/about5-img1.png"
                img2="/assets/img/about/about5-img2.png"
                subtitle="WHY CHOOSE US"
                title="Premium SEO Tools at toolstap Prices"
                content="Access industry-leading SEO tools without breaking the bank. <br> Our toolstap platform offers premium tools at fraction of individual costs."
                FeatureList={[
                    "50+ Premium SEO Tools",
                    "Unlimited Usage Access",
                    "24/7 Customer Support",
                    "Regular Tool Updates"
                ]}
                btnname="View All Tools"
                btnurl="/tools"
            ></About5> 
            <Pricing5></Pricing5>
            <section className="process-steps" style={{
                padding: '80px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <div className="container">
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '60px',
                        color: '#333'
                    }}>WELCOME TO GROUP BUY SEO TOOLS BEST IN THE WORLD</h2>
                    <div className="steps-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>1</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Select the package</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>Check The Pricing Table to findout your Needy Seo and Spy Tools Like Moz, Alexa.</p>
                        </div>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>2</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Fill Signup Form</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>Complete Signup Form with your Details including Working mail and password</p>
                        </div>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>3</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Complete Purchase</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>After Filling the Signup Form Select Your Plan and make payment</p>
                        </div>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>4</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Instant Access</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>After Payment you will Have Instant Access in some Seconds.</p>
                        </div>
                    </div>
                </div>
            </section>  
            <Testimonial7></Testimonial7>  
            <Blog5></Blog5>
            <ContactIno3></ContactIno3>                           
        </div>
    );
};

export default page;