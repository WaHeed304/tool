import Link from "next/link";
import Image from "next/image";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const FEATURES = [
  {
    icon: "bi-tools",
    title: "50+ Premium SEO Tools",
    text: "Ahrefs, SEMrush, Moz, Majestic, SpyFu, Canva, Grammarly, and more — one membership.",
  },
  {
    icon: "bi-shield-check",
    title: "99.9% Uptime Focus",
    text: "Shared access built for reliability so your keyword research and audits stay on schedule.",
  },
  {
    icon: "bi-currency-dollar",
    title: "Group Buy Pricing",
    text: "Pay a fraction of retail. Plans start at $10/month so freelancers and agencies can scale.",
  },
  {
    icon: "bi-headset",
    title: "24/7 Support",
    text: "Email, WhatsApp, and Skype help when a tool needs a reset or you have billing questions.",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb Title="About Toolstap" />

      <section className="bz-section white">
        <div className="bz-container">
          <div className="bz-about-with-img">
            <div>
              <p className="bz-eyebrow">Who we are</p>
              <h2 className="bz-h2">
                Affordable access to premium{" "}
                <span className="accent">SEO tools</span>
              </h2>
              <p className="bz-lead" style={{ maxWidth: "100%" }}>
                Toolstap is a group buy platform for marketers, freelancers, and
                small businesses who need enterprise SEO software without
                enterprise invoices. We share licensed access so you get real
                Ahrefs, SEMrush, Moz, and dozens of other tools at a fair price.
              </p>
            </div>
            <div className="bz-about-img-wrap">
              <Image
                src="/assets/img/buzzoid/marketers-collage.jpg"
                alt="Toolstap marketers"
                width={520}
                height={360}
                className="bz-about-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bz-section">
        <div className="bz-container">
          <div className="bz-about-split">
            <div>
              <p className="bz-eyebrow">Our mission</p>
              <h2 className="bz-h2">Democratize premium SEO data</h2>
              <p className="bz-lead">
                Too many teams are locked out of backlink indexes, rank
                trackers, and content suites because retail seats cost hundreds
                per month. Our mission is simple: pool demand, buy legitimate
                group licenses, and pass the savings on — so ranking work stays
                within reach for UK, US, Canada, Europe, and Asia customers
                alike.
              </p>
            </div>
            <div className="bz-about-panel">
              <h3>Why Toolstap</h3>
              <ul className="bz-check-list">
                <li>
                  <i className="bi bi-check-lg"></i>
                  One dashboard for research, content, and creative tools
                </li>
                <li>
                  <i className="bi bi-check-lg"></i>
                  Instant signup — start after payment, no long waitlists
                </li>
                <li>
                  <i className="bi bi-check-lg"></i>
                  Transparent plans from Lite to Mega
                </li>
                <li>
                  <i className="bi bi-check-lg"></i>
                  Human support when tools need attention
                </li>
              </ul>
              <Link href="/pricing" className="bz-btn bz-btn-orange">
                View Pricing Plans <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bz-section white">
        <div className="bz-container">
          <div className="bz-center">
            <p className="bz-eyebrow">What you get</p>
            <h2 className="bz-h2">Built for serious SEO work</h2>
            <p className="bz-lead center">
              Your Reliable Partner for Affordable and High-Quality SEO Tools —
              analyze sites, fix issues, and rank with confidence.
            </p>
          </div>
          <div className="bz-feat-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="bz-feat-card bz-feat-card-left">
                <div className="ico">
                  <i className={`bi ${f.icon}`}></i>
                </div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bz-section">
        <div className="bz-container bz-center">
          <h2 className="bz-h2">Ready to save on SEO tools?</h2>
          <p className="bz-lead center">
            Pick a plan, join the group buy, and unlock the stack marketers
            actually use.
          </p>
          <div className="bz-cta-row">
            <a
              href="https://members.seotoolsgroupbuy.us/signup"
              className="bz-btn bz-btn-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started <i className="bi bi-arrow-right"></i>
            </a>
            <Link href="/tools" className="bz-btn bz-btn-dark">
              Browse Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
