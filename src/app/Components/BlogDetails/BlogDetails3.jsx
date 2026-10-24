import Image from "next/image";
import Link from "next/link";

const BlogDetails3 = () => {
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
                                  <li><a href="#">#Ahrefs</a></li>
                                  <li><a href="#">#SEMrush</a></li>
                                  <li><a href="#">#Moz Pro</a></li>
                                  <li><a href="#">#Tool Comparison</a></li>
                                  <li><a href="#">#SEO Tools</a></li>
                                  <li><a href="#">#Keyword Research</a></li>
                                  <li><a href="#">#Backlink Analysis</a></li>
                                  <li><a href="#">#Competitor Analysis</a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="details-sidebox">
                        <h3>Need Help Choosing SEO Tools?</h3>
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
                                <Image src="/assets/img/blog/blog1-img2.jpg" alt="img" width={826} height={555}   />
                                </div>
                                <div className="details-tagsdates">
                                    <ul>
                                        <li className="tag"><a href="#">#Tool Comparison</a></li>
                                        <li className="date"><a href="#"><Image src="/assets/img/icons/details-date.svg" alt="img" width={20} height={20}   /> 10 October 2023</a></li>
                                        <li className="date"><a href="#"><Image src="/assets/img/icons/details-comment.svg" alt="img" width={20} height={20}   /> 2 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="space30"></div>
                                <div className="heading1">
                                    <h3>Ahrefs vs SEMrush vs Moz: Which SEO Tool is Best for Your Business?</h3>
                                    <div className="space16"></div>
                                    <p>Choosing the right SEO tool can make or break your digital marketing strategy. This comprehensive comparison of Ahrefs, SEMrush, and Moz Pro helps you understand their unique strengths, pricing models, and best use cases. Ahrefs excels in backlink analysis and keyword research, SEMrush offers comprehensive competitive intelligence, while Moz Pro provides excellent local SEO features. Learn which tool aligns best with your business goals and budget, and discover how group buy access can give you all three tools for the price of one individual subscription.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <ul className="details-list">
                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Ahrefs: Best for Backlink Analysis</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> SEMrush: Comprehensive Competitive Intel</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Moz Pro: Excellent Local SEO Features</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="details-list">
                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Detailed Feature Comparison</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Pricing Analysis & ROI</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Best Use Cases for Each Tool</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="space70"></div>
                        <div className="heading1">
                            <h3>Detailed Feature Comparison: Ahrefs vs SEMrush vs Moz Pro</h3>
                            <div className="space16"></div>
                            <p>Dive deep into the specific features of each tool to make an informed decision. Ahrefs offers the largest backlink database with 15+ trillion links, SEMrush provides 40+ tools for comprehensive SEO analysis, and Moz Pro focuses on domain authority and local SEO optimization. This detailed comparison covers keyword research capabilities, competitor analysis features, reporting options, and integration possibilities to help you choose the perfect tool for your SEO needs.</p>
                        </div>

                        <div className="space70"></div>
                        <div className="details-border"></div>
                        <div className="details-social-area">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tags-area">
                                        <ul>
                                            <li className="text">Posts Tags:</li>
                                            <li className="tag"><a href="#">Ahrefs</a></li>
                                            <li className="tag"><a href="#">SEMrush</a></li>
                                            <li className="tag"><a href="#">Moz Pro</a></li>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BlogDetails3;
