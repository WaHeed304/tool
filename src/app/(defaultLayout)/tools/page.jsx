import Link from "next/link";
import Image from "next/image";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const TOOLS = [
  {
    name: "Ahrefs",
    desc: "Backlink index, site audit, and keyword explorer.",
    icon: "bi-link-45deg",
  },
  {
    name: "SEMrush",
    desc: "Competitive research, PPC, and content toolkit.",
    icon: "bi-graph-up-arrow",
  },
  {
    name: "Moz",
    desc: "Domain authority, rank tracking, and link metrics.",
    icon: "bi-bar-chart",
  },
  {
    name: "Majestic",
    desc: "Deep backlink analysis and Trust Flow data.",
    icon: "bi-diagram-3",
  },
  {
    name: "SpyFu",
    desc: "Competitor keywords and ad history research.",
    icon: "bi-eye",
  },
  {
    name: "Grammarly",
    desc: "Writing clarity and grammar checks for content.",
    icon: "bi-pencil-square",
  },
  {
    name: "Canva",
    desc: "Design creatives, social posts, and presentations.",
    icon: "bi-palette",
  },
  {
    name: "WordAI",
    desc: "AI rewriting for faster content production.",
    icon: "bi-robot",
  },
  {
    name: "Ubersuggest",
    desc: "Keyword ideas, traffic estimates, and audits.",
    icon: "bi-lightbulb",
  },
  {
    name: "Keyword Tool",
    desc: "Long-tail keyword suggestions across platforms.",
    icon: "bi-search",
  },
  {
    name: "Screaming Frog",
    desc: "Crawl sites for technical SEO issues at scale.",
    icon: "bi-bug",
  },
  {
    name: "SimilarWeb",
    desc: "Traffic insights and competitive market data.",
    icon: "bi-globe2",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb Title="Our SEO Tools" />

      <section className="bz-section">
        <div className="bz-container">
          <div className="bz-tools-hero-img">
            <Image
              src="/assets/img/buzzoid/seo-dashboard-hero.jpg"
              alt="SEO tools dashboard"
              width={1100}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      <section className="bz-section white">
        <div className="bz-container">
          <div className="bz-center">
            <p className="bz-eyebrow">Tools catalog</p>
            <h2 className="bz-h2">
              Premium SEO tools, <span className="accent">group buy</span>{" "}
              access
            </h2>
            <p className="bz-lead center">
              Browse the tools included across Toolstap plans. Choose a plan on
              pricing, or sign up to unlock shared access instantly.
            </p>
          </div>

          <div className="bz-tools-grid">
            {TOOLS.map((tool) => (
              <Link
                key={tool.name}
                href="/pricing"
                className="bz-tool-card"
              >
                <div className="ico">
                  <i className={`bi ${tool.icon}`}></i>
                </div>
                <strong>{tool.name}</strong>
                <span className="desc">{tool.desc}</span>
                <span className="chev">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>

          <div className="bz-center" style={{ marginTop: 40 }}>
            <div className="bz-cta-row">
              <Link href="/pricing" className="bz-btn bz-btn-orange">
                Compare Plans <i className="bi bi-arrow-right"></i>
              </Link>
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                className="bz-btn bz-btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
