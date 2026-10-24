import Link from "next/link";
import Image from "next/image";
import BuzzoidHero from "../Components/HeroBanner/BuzzoidHero";
import BuzzoidSelector from "../Components/HeroBanner/BuzzoidSelector";
import Pricing5 from "../Components/Pricing/Pricing5";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import BuzzoidGuarantees from "../Components/Guarantees/BuzzoidGuarantees";
import BuzzoidFaq from "../Components/Faq/BuzzoidFaq";
import ToolsShowcase from "../Components/Home/ToolsShowcase";
import ToolsIntro from "../Components/Home/ToolsIntro";
import VisibilitySection from "../Components/Home/VisibilitySection";
import GrowthSection from "../Components/Home/GrowthSection";
import LogoMark from "../Components/Common/LogoMark";

const page = () => {
    return (
        <div>
      <BuzzoidHero />
      <BuzzoidSelector />

      <div className="bz-divider">
        <LogoMark size={22} className="bz-divider-mark" />
                            </div>

      {/* Trusted tools marquee */}
      <section className="bz-seen" aria-label="Trusted tools we provide">
        <div className="bz-seen-label">Trusted tools we provide</div>
        <div className="bz-seen-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="bz-seen-logos"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              <span>AHREFS</span>
              <span>SEMRUSH</span>
              <span>MOZ</span>
              <span>MAJESTIC</span>
              <span>SPYFU</span>
              <span>CANVA</span>
              <span>GRAMMARLY</span>
              <span>AHREFS</span>
              <span>SEMRUSH</span>
              <span>MOZ</span>
              <span>MAJESTIC</span>
              <span>SPYFU</span>
              <span>CANVA</span>
              <span>GRAMMARLY</span>
                        </div>
          ))}
                    </div>
      </section>

      {/* Image 1 — centered intro like Buzzoid's Services */}
      <ToolsIntro />

      {/* Image 2 — visibility split */}
      <VisibilitySection />

      {/* Image 3 — accelerated growth split */}
      <GrowthSection />

      <ToolsShowcase />

      {/* About tools with image */}
      <section className="bz-section white">
        <div className="bz-container">
          <div className="bz-about-with-img">
            <div>
              <p className="bz-eyebrow">About Our SEO Tools</p>
              <h2 className="bz-h2">
                Toolstap provides shared access to top SEO tools
              </h2>
              <p className="bz-lead" style={{ maxWidth: "100%" }}>
                Toolstap provides shared access to top SEO tools like Ahrefs,
                SEMrush, Moz, Grammarly, WordAI, Canva, and more. These tools
                help users perform keyword research, backlink analysis, content
                optimization, and competitor tracking. By joining our group buy,
                you can save huge costs while still accessing premium-level SEO
                data and insights.
              </p>
              <div className="bz-feat-grid" style={{ marginTop: 28 }}>
                <div className="bz-feat-card">
                  <div className="ico">
                    <i className="bi bi-currency-dollar"></i>
                                </div>
                  <h4>Affordable pricing for everyone</h4>
                            </div>
                <div className="bz-feat-card">
                  <div className="ico">
                    <i className="bi bi-shield-check"></i>
                        </div>
                  <h4>99% uptime on most tools</h4>
                                </div>
                <div className="bz-feat-card">
                  <div className="ico">
                    <i className="bi bi-tools"></i>
                            </div>
                  <h4>Multiple tools in one plan</h4>
                        </div>
                <div className="bz-feat-card">
                  <div className="ico">
                    <i className="bi bi-headset"></i>
                                </div>
                  <h4>24/7 customer support</h4>
                            </div>
                        </div>
                                </div>
            <div className="bz-about-img-wrap">
              <Image
                src="/assets/img/buzzoid/seo-toolkit-iso.jpg"
                alt="SEO toolkit"
                width={520}
                height={400}
                className="bz-about-img"
              />
                        </div>
                    </div>
                </div>
            </section>

      <Pricing5 />

      <WhyChooseUs />

      {/* How it works */}
      <section className="bz-section">
        <div className="bz-container">
          <div className="bz-center">
            <h2 className="bz-h2">
              Welcome to <span className="accent">toolstap</span>
            </h2>
            <p className="bz-lead center">
              Four simple steps to premium SEO tools at group-buy prices.
            </p>
                            </div>
          <div className="bz-steps">
            <div className="bz-step">
              <div className="bz-step-num">1</div>
              <h3>Select the package</h3>
              <p>
                Check the pricing table to find the SEO and spy tools you need —
                Moz, Ahrefs, SEMrush, and more.
              </p>
                        </div>
            <div className="bz-step">
              <div className="bz-step-num">2</div>
              <h3>Fill Signup Form</h3>
              <p>
                Complete the signup form with your details including a working
                email and password.
              </p>
                    </div>
            <div className="bz-step">
              <div className="bz-step-num">3</div>
              <h3>Complete Purchase</h3>
              <p>
                After filling the signup form, select your plan and make
                payment.
              </p>
                            </div>
            <div className="bz-step">
              <div className="bz-step-num">4</div>
              <h3>Instant Access</h3>
              <p>
                After payment you will have instant access in just a few
                seconds.
              </p>
                        </div>
                    </div>
                </div>
            </section>

      <BuzzoidGuarantees />

      <BuzzoidFaq />

      {/* Get Started CTA */}
      <section className="bz-cta">
        <div className="bz-container">
          <div className="bz-center">
            <h2 className="bz-h2">
              Get Started
              <br />
              Now
            </h2>
            <p className="bz-lead center">
              And importantly, Toolstap’s premium SEO tools are available at
              very reasonable prices — never higher than what you’d expect from
              a reputable group buy provider. Join our family of satisfied
              customers today!
            </p>
          </div>

          <div className="bz-cta-grid">
            <div className="bz-cta-col">
              <h4>
                <i className="bi bi-graph-up-arrow"></i> SEO Tools
              </h4>
              <Link href="/tools">Ahrefs Access</Link>
              <Link href="/tools">SEMrush Guru</Link>
              <Link href="/tools">Moz Pro</Link>
              <Link href="/tools">Majestic</Link>
                                </div>
            <div className="bz-cta-col">
              <h4>
                <i className="bi bi-pencil-square"></i> Content
              </h4>
              <Link href="/tools">Grammarly</Link>
              <Link href="/tools">WordAI</Link>
              <Link href="/tools">Canva Pro</Link>
              <Link href="/tools">Spin Rewriter</Link>
                            </div>
            <div className="bz-cta-col">
              <h4>
                <i className="bi bi-eye"></i> Spy &amp; Research
              </h4>
              <Link href="/tools">SpyFu</Link>
              <Link href="/tools">Ubersuggest</Link>
              <Link href="/tools">Keyword Tool</Link>
              <Link href="/pricing">All Plans</Link>
                        </div>
                    </div>
                </div>
            </section>
            
      <section
        className="bz-contact-strip bz-section white"
        style={{ paddingTop: 24 }}
      >
        <div className="bz-container">
          <h2 className="bz-h2">Contact Information</h2>
          <p className="bz-lead center">
            If you have any questions or issues, feel free to contact our
            support team. We&apos;re available 24/7 to help you make the most
            out of your SEO journey.
          </p>
          <p style={{ marginTop: 20, fontWeight: 700, color: "#1a1d23" }}>
            Website: Toolstap.com
          </p>
          <div style={{ marginTop: 24 }}>
            <Link href="/contact" className="bz-btn bz-btn-lavender">
              Contact us
              <span className="arrow">
                <i className="bi bi-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default page;
