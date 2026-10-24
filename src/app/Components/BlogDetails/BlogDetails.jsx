import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
    return (
        <div className="blog-details-area sp _relative">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="side-all">
                        <div className="details-sidebox">
                          <h3>Search</h3>
                          <div className="search-area">
                              <form action="#">
                                  <input type="search" placeholder="Search..." />
                                  <div className="button">
                                      <button type="submit"><i className="bi bi-search"></i></button>
                                  </div>
                              </form>
                          </div>
                      </div>

                      <div className="details-sidebox">
                          <h3>SEO Tools Category</h3>
                          <div className="categorys">
                              <ul>
                              <li><Link href="/case/case-details">Group Buy SEO Tools <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Ahrefs Tools & Features <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">SEMrush Analytics <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Moz Pro Features <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Keyword Research Tools <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Competitor Analysis <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                              </ul>
                          </div>
                      </div>

                      <div className="details-sidebox">
                          <h3>Popular Tags</h3>
                          <div className="tags">
                              <ul>
                                  <li><a href="#">#Group Buy SEO</a></li>
                                  <li><a href="#">#Ahrefs Tools</a></li>
                                  <li><a href="#">#SEMrush</a></li>
                                  <li><a href="#">#Moz Pro</a></li>
                                  <li><a href="#">#Keyword Research</a></li>
                                  <li><a href="#">#SEO Tools</a></li>
                                  <li><a href="#">#Competitor Analysis</a></li>
                                  <li><a href="#">#SEO Strategies</a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="details-sidebox">
                        <h3>Need Help with Group Buy SEO Tools?</h3>
                        <div className="phone-btn">
                            <a href="tel:(123)3344567890"><Image src="/assets/img/icons/details-call-icon.svg" alt="img" width={24} height={24}   /> (123) 334 456 7890</a>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="details-posts left">
                        <article>
                            <div className="details-post-single">
                                <div className="image image-anime">
                                <Image src="/assets/img/case/case-details-img1.png" alt="img" width={826} height={555}   />
                                </div>
                                <div className="details-tagsdates">
                                    <ul>
                                        <li className="tag"><a href="#">#Group Buy SEO</a></li>
                                        <li className="date"><a href="#"><Image src="/assets/img/icons/details-date.svg" alt="img" width={20} height={20}   /> 10 October 2023</a></li>
                                        <li className="date"><a href="#"><Image src="/assets/img/icons/details-comment.svg" alt="img" width={20} height={20}   /> 2 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="space30"></div>
                                <div className="heading1">
                                    <h3>Complete Guide to Group Buy SEO Tools: Save 90% on Premium Tools</h3>
                                    <div className="space16"></div>
                                    <p>Group buy SEO tools have revolutionized how businesses access premium SEO software without breaking the bank. By pooling resources with other users, you can access industry-leading tools like Ahrefs, SEMrush, Moz Pro, and Majestic SEO at a fraction of their individual costs. This comprehensive guide explores how group buy platforms work, their benefits, and how to maximize your ROI while maintaining the same quality and features as individual subscriptions. Learn how thousands of agencies and freelancers are saving 90% on their SEO tool expenses while maintaining professional-grade capabilities.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <ul className="details-list">
                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Access to 50+ Premium SEO Tools</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Save Up to 90% on Tool Costs</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Unlimited Usage & Reports</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="details-list">
                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> 24/7 Customer Support</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Regular Tool Updates</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Instant Access After Payment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="space70"></div>
                        <article>
                            <div className="details-post-single">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="image image-anime">
                                        <Image src="/assets/img/case/case-details-img2.png" alt="img" width={401} height={347}   />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="image image-anime">
                                        <Image src="/assets/img/case/case-details-img3.png" alt="img" width={401} height={347}   />
                                        </div>
                                    </div>

                                </div>
                                <div className="space30"></div>
                                <div className="heading1">
                                    <h3>Ahrefs vs SEMrush vs Moz: Which SEO Tool is Best for Your Business?</h3>
                                    <div className="space16"></div>
                                    <p>Choosing the right SEO tool can make or break your digital marketing strategy. This comprehensive comparison of Ahrefs, SEMrush, and Moz Pro helps you understand their unique strengths, pricing models, and best use cases. Ahrefs excels in backlink analysis and keyword research, SEMrush offers comprehensive competitive intelligence, while Moz Pro provides excellent local SEO features. Learn which tool aligns best with your business goals and budget, and discover how group buy access can give you all three tools for the price of one individual subscription.</p>
                                </div>
                            </div>
                        </article>

                        <div className="details-border"></div>
                        <div className="details-social-area">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tags-area">
                                        <ul>
                                            <li className="text">Posts Tags:</li>
                                            <li className="tag"><a href="#">Group Buy SEO</a></li>
                                            <li className="tag"><a href="#">SEO Tools</a></li>
                                            <li className="tag"><a href="#">Ahrefs</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="social-area">
                                        <ul>
                                            <li className="text">Share On:</li>
                                            <li className="icon"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                            <li className="icon"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                            <li className="icon"><a href="#"><i className="bi bi-instagram"></i></a></li>
                                            <li className="icon"><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="space60"></div>
                        <div className="comment-boxs">
                            <div className="heading1">
                                <h3>Blog Comments (2)</h3>
                            </div>
                            <div className="comment-box">
                                <div className="outhor-area-all">
                                    <div className="author-area">
                                        <div className="image">
                                        <Image src="/assets/img/blog/comment-img1.png" alt="img" width={80} height={80}   />
                                            
                                        </div>
                                        <div className="heading">
                                            <a href="#" className="date"><Image src="/assets/img/icons/date.svg" alt="img" width={20} height={20}   />8 December 2024</a>
                                            <h4><a href="#">Alex Robertson</a></h4>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                        <a href="#"><i className="fa-solid fa-reply"></i> Reply</a>
                                    </div>
                                </div>
                                <p>SEO and digital marketing are crucial components of a successful online strategy. SEO, or Search Engine Optimization, involves optimizing your website to improve its visibility on search engines like Google. </p>
                            </div>

                            <div className="comment-box">
                                <div className="outhor-area-all">
                                    <div className="author-area">
                                        <div className="image">
                                        <Image src="/assets/img/blog/comment-img1.png" alt="img" width={80} height={80}   />
                                            
                                        </div>
                                        <div className="heading">
                                            <a href="#" className="date"><Image src="/assets/img/icons/date.svg" alt="img" width={20} height={20}   /> 8 December 2024</a>
                                            <h4><a href="#">Alex Robertson</a></h4>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                        <a href="#"><i className="fa-solid fa-reply"></i> Reply</a>
                                    </div>
                                </div>
                                <p>SEO and digital marketing are crucial components of a successful online strategy. SEO, or Search Engine Optimization, involves optimizing your website to improve its visibility on search engines like Google. </p>
                            </div>

                        </div>

                        <div className="space60"></div>
                        <div className="details-contact-area">
                            <div className="heading1">
                                <h3>Leave A Reply Now</h3>
                            </div>
                            <div className="space30"></div>

                            <div className="faq-contact-form">
                                <h4>Send Us A Message</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
            
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
            
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone Number" />
                                            </div>
                                        </div>
            
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email Address" />
                                            </div>
                                        </div>
            
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <input type="url" placeholder="Website URL" />
                                            </div>
                                        </div>
            
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <textarea rows="5" placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="space30"></div>
                                            <div className="button">
                                                <button className="theme-btn1">Start Your Free Audit <span><i className="bi bi-arrow-right"></i></span></button>
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
      </div>
    );
};

export default BlogDetails;