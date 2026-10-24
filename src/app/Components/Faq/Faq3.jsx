"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';
import Image from "next/image";

const Faq3 = () => {

    const [openItems, setOpenItems] = useState({});
  
    const handleItemClick = (categoryIndex, itemIndex) => {
      const key = `${categoryIndex}-${itemIndex}`;
      setOpenItems(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    const faqCategories = [
      {
        title: "General Questions",
        icon: "bi bi-question-circle",
        items: [
          {
            title: "What does seotoolsgroupbuy offer?",
            desc: "We offer SEO/PPC/Ecommerce and Spy tools for freelancers, bloggers, and small business owners. If you want to be listed in search engines, optimize your ads, product research, or competitor analysis, then our SEO tools group buy is certainly going to work for you. Our platform provides access to 50+ premium tools at affordable group buy prices."
          },
          {
            title: "What is an SEO group buying tool?",
            desc: "An SEO group buy tool is a platform that provides access to premium SEO tools at a significantly lower price than their original cost. Group buy tools work by pooling resources and buying bulk licenses for various SEO tools, then reselling access to individual users. This allows small businesses and freelancers to access enterprise-level tools at fraction of the cost."
          },
          {
            title: "How is SEO group buying different from individual subscriptions?",
            desc: "SEO group buy allows users to access premium SEO tools at a lower cost by sharing resources and buying bulk licenses. Individual subscriptions are more expensive but offer exclusive access to the tools for a specific period. With group buy, you get access to multiple tools for the price of one individual subscription."
          },
          {
            title: "Are SEO group buy tools legal?",
            desc: "Yes, using SEO group buy tools is legal. The group buy provider purchases a subscription to the tools, and users access the tools through the provider's account. However, it is important to note that some tool providers may have terms and conditions that restrict sharing their tools through group buy services."
          }
        ]
      },
      {
        title: "How It Works",
        icon: "bi bi-gear",
        items: [
          {
            title: "How does seotoolsgroupbuy work?",
            desc: "We offer one-click access for all operating systems and Firefox browser for some tools. We share VPS (RDP) to use portable browser for those who don't want to use browser on their PC or Mac users. Tools which are shared via one-click access can be used on Windows, Linux, Mac, ChromeBook, and even on mobile phones."
          },
          {
            title: "Will I get username & passwords?",
            desc: "No, we don't share usernames or passwords. You will use our SEO Group Buy Tools via our system, which contains all tools logins, so you don't need logins of any tools. But there are some tools which can be shared via logins when necessary."
          },
          {
            title: "Do you provide individual account for each user?",
            desc: "No, we offer only shared SEO group buy tools which means sharing accounts with other users. We purchase multiple-tool subscriptions and then share with other users at affordable rates. This is how we keep the costs low for everyone."
          },
          {
            title: "Do you provide private accounts?",
            desc: "No, we don't share private accounts as it's SEO Group Buy. All tools will be shared with users to maintain affordability and accessibility for everyone. This shared approach allows us to offer premium tools at group buy prices."
          }
        ]
      },
      {
        title: "Account & Sharing",
        icon: "bi bi-people",
        items: [
          {
            title: "Can I share access with others?",
            desc: "No, it's strictly not allowed. As you are paying already a low price, you can easily buy multiple accounts for your office and home. If you want to resell our tools, then contact us via email. Account sharing will result in permanent ban."
          },
          {
            title: "Can I share my account?",
            desc: "Yes, only if you want to get banned for a lifetime. Otherwise, never share credentials with any other users as we have one of the best monitoring systems. Once we detect account sharing, we will ban you permanently."
          },
          {
            title: "What will happen if I share my account?",
            desc: "We have one of the best monitoring systems. Once we detect account sharing, we will ban you for a lifetime. This policy ensures fair usage for all our customers and maintains the integrity of our service."
          }
        ]
      },
      {
        title: "Technical Issues",
        icon: "bi bi-tools",
        items: [
          {
            title: "What will happen if any tool doesn't work?",
            desc: "We share multiple accounts for each SEO tool. So if an account is not working, you can use other accounts for the same tools. In this way, you will not face problems accessing your SEO tools group buy plans. We ensure 99.9% uptime."
          },
          {
            title: "Do you offer service for Mac users?",
            desc: "Our service works on all major platforms like Windows, MAC, Google Chrome OS, and almost all major flavors of Linux. We will share VPS to use portable browser on Mac. Our tools are compatible with all operating systems."
          },
          {
            title: "How often are the SEO group buy tools updated?",
            desc: "The frequency of tool updates varies depending on the tool provider. However, most SEO group buy tools are updated regularly to ensure users can access the latest features and functionalities. We maintain up-to-date access to all tools."
          },
          {
            title: "Are the SEO group buy tools reliable?",
            desc: "The reliability of SEO group buy tools depends on the provider. We are a reliable and trustworthy platform that offers access to legitimate and up-to-date tools. We have a good reputation in the industry and provide excellent customer support."
          }
        ]
      },
      {
        title: "Pricing & Payment",
        icon: "bi bi-currency-dollar",
        items: [
          {
            title: "Do you offer refund?",
            desc: "Yes, we offer a 24-hour refund policy without any questions from new users. For existing users, if tools are not working, you can get a partial refund by contacting us. We stand behind our service quality."
          },
          {
            title: "How much can I save by using SEO group buy tools?",
            desc: "The amount you can save by using SEO group buy tools varies depending on the tools you need and your chosen provider. However, you can save anywhere from 50% to 90% off the regular price of the tools. Our platform offers the best value for money."
          },
          {
            title: "Is the SEO group buying a one-time purchase?",
            desc: "No, SEO group buy is typically a subscription-based service. Users pay a monthly or yearly fee to access the platform and its tools, which varies depending on the platform and the number of tools they wish to access. We offer flexible subscription plans."
          },
          {
            title: "Can I cancel my subscription to an SEO group buy tool?",
            desc: "Yes, you can cancel your SEO group buy tool subscription anytime. However, it's essential to check the cancellation policy before subscribing to avoid any unexpected fees or charges. We offer flexible cancellation options."
          }
        ]
      },
      {
        title: "Tools & Features",
        icon: "bi bi-laptop",
        items: [
          {
            title: "Is there a limit to the number of SEO tools I can access?",
            desc: "The number of SEO tools you can access through our group buy platform depends on your chosen plan. Some plans offer access to a limited number of tools, while others provide access to our complete range of 50+ premium SEO tools."
          },
          {
            title: "Can I trust the data provided by SEO group buy tools?",
            desc: "The data provided by our SEO group buy tools is generally reliable. However, it's important to remember that some providers may have limitations on the number of requests you can make or the accuracy of the data provided. We ensure access to the most up-to-date versions."
          },
          {
            title: "What are SEO group buy tools, and how do they work?",
            desc: "SEO group buy tools are a collection of SEO software made available to users at a significantly lower cost than purchasing them individually. A group buy provider purchases subscriptions to popular SEO tools and then offers access to those tools to its members at affordable rates."
          }
        ]
      },
      {
        title: "Support",
        icon: "bi bi-headset",
        items: [
          {
            title: "How do I choose the right SEO group buy provider?",
            desc: "When choosing an SEO group buy provider, look for a provider that offers access to the tools you need, has a good reputation in the industry, and provides reliable customer support. Look for providers that offer a trial period or money-back guarantee."
          }
        ]
      }
    ];

    return (
<div className="service-faq sp accordion-3-area" style={{backgroundColor: '#f8f9fa'}}>
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
                      FAQ
                    </span>
                  </p>
                  <h2 className="text-anime-style-3">
                    Frequently Asked Questions
                  </h2>
                  <p style={{
                    fontSize: '18px',
                    color: '#666',
                    lineHeight: '1.6',
                    marginTop: '20px'
                  }}>
                    Find answers to common questions about our SEO Group Buy services
                  </p>
                </div>
              </div>
            </div>
            <div className="space30"></div>
            
            <div className="faq-categories">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="faq-category" style={{
                  marginBottom: '50px',
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  padding: '40px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
                }}>
                  <div className="category-header" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '30px',
                    paddingBottom: '20px',
                    borderBottom: '2px solid #f0f0f0'
                  }}>
                    <i className={category.icon} style={{
                      fontSize: '32px',
                      color: '#ff6b35',
                      marginRight: '15px'
                    }}></i>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#333',
                      margin: '0'
                    }}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="accordion accordion1">
                    {category.items.map((item, itemIndex) => {
                      const key = `${categoryIndex}-${itemIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div key={itemIndex} className={`cs_accordian accordion-item ${isOpen ? "active" : ""}`} style={{
                          marginBottom: '15px',
                          borderRadius: '10px',
                          overflow: 'hidden'
                        }}>
                          <h2 className="accordion-header">
                            <button 
                              onClick={() => handleItemClick(categoryIndex, itemIndex)}
                              className="accordion-button" 
                              type="button"
                              style={{
                                backgroundColor: isOpen ? '#ff6b35' : '#fff',
                                color: isOpen ? '#fff' : '#333',
                                border: 'none',
                                padding: '20px 25px',
                                fontSize: '16px',
                                fontWeight: '600',
                                width: '100%',
                                textAlign: 'left',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              {item.title}
                            </button>
                    </h2>
                          <div className="accordion-collapse" style={{
                            display: isOpen ? 'block' : 'none',
                            backgroundColor: '#fff'
                          }}>
                            <div className="accordion-body" style={{
                              padding: '25px',
                              fontSize: '15px',
                              lineHeight: '1.7',
                              color: '#666',
                              borderTop: '1px solid #e9ecef'
                            }}>
                      {item.desc}
                      </div>
                    </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Faq3;