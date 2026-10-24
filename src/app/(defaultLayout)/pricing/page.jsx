import Link from "next/link";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const PLANS = [
  {
    title: "Lite Plan",
    price: "$10",
    features: [
      "SEMrush",
      "Canva",
      "Grammarly",
      "Woorank",
      "Spin Rewriter",
      "Ubersuggest",
      "Ispionage",
      "StockUnlimited",
      "CBEngine",
      "Buzzstream",
      "Unbounce",
      "Quillbot AI",
    ],
  },
  {
    title: "Small Plan",
    price: "$15",
    active: true,
    features: [
      "SEMrush",
      "Moz Pro",
      "Majestic",
      "Ubersuggest",
      "Spyfu",
      "Ispionage",
      "KwFinder",
      "Pexda",
      "SaleHoo",
      "StockUnlimited",
      "Spin Rewriter",
      "Grammarly",
      "Buzzsumo",
      "Indexifications",
      "Lynda",
      "Woorank",
      "Envato Elements",
      "Skills Share",
      "Spamzilla",
      "Cognitive SEO",
      "Canva Pro",
      "Crello",
      "CBEngine",
      "Buzzstream",
      "Vyond",
      "LongTailPro",
      "Article Builder",
      "WordAi",
      "Seo Profiler",
      "SE Ranking",
      "Themes/Plugin WordPress",
      "Spinner Português",
      "Fotojet",
      "Audioblocks",
      "Storyblocks",
      "Videoblocks",
      "Unbounce",
      "Quillbot",
      "Chat GPT",
    ],
  },
  {
    title: "Ahref$ Combo",
    price: "$25",
    features: [
      "AHREF$",
      "SEMR$H guru",
      "M0Z PR0",
      "Majestic",
      "Kwfinder",
      "Keywordtool i0",
      "Grammarly",
      "Helium 10",
      "Jungle Scout",
      "Chat GPT",
      "Spyfu",
      "EcomHunt",
      "Ispionage",
      "Pexda",
      "SaleHoo",
      "StockUnlimited",
      "Spin Rewriter",
      "Buzzsumo",
      "Netflix",
      "Indexifications",
      "Lynda",
      "Woorank",
      "Envato Elements",
      "Skills Share",
      "Freepik",
      "Spamzilla",
      "Cognitive SEO",
      "Canva Pro",
      "Crello",
      "CBEngine",
      "Buzzstream",
      "Sellthetrend",
      "Vyond",
      "LongTailPro",
      "Article Builder",
      "WordAi",
      "Seo Profiler",
      "SE Ranking",
      "Themes/Plugin WordPress",
      "Spinner Português",
      "Fotojet",
      "Audioblocks",
      "Storyblocks",
      "Videoblocks",
      "Unbounce",
      "Jasper Ai",
      "Quillbot",
      "Chat GPT",
    ],
  },
  {
    title: "Mega Plan",
    price: "$50",
    features: [
      "Ahrefs",
      "SEMrush",
      "Moz Pro",
      "Ubersuggest",
      "Majestic",
      "keywordtool.io",
      "KwFinder",
      "Grammarly",
      "Helium 10",
      "Jungle Scout",
      "Chat GPT",
      "Spyfu",
      "EcomHunt",
      "Ispionage",
      "Pexda",
      "SaleHoo",
      "StockUnlimited",
      "Spin Rewriter",
      "Buzzsumo",
      "Netflix",
      "Indexifications",
      "Lynda",
      "Woorank",
      "Envato Elements",
      "Skills Share",
      "Freepik",
      "Spamzilla",
      "Cognitive SEO",
      "Canva Pro",
      "Crello",
      "CBEngine",
      "Buzzstream",
      "Sellthetrend",
      "Vyond",
      "LongTailPro",
      "Article Builder",
      "WordAi",
      "Seo Profiler",
      "SE Ranking",
      "Themes/Plugin WordPress",
      "Spinner Português",
      "Fotojet",
      "Audioblocks",
      "Storyblocks",
      "Videoblocks",
      "Unbounce",
      "Jasper Ai",
      "Quillbot",
      "Chat GPT",
    ],
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb Title="Pricing Plan" />

      <section className="bz-section white">
        <div className="bz-container">
          <div className="bz-center">
            <p className="bz-eyebrow">Full tools list</p>
            <h2 className="bz-h2">Toolstap Complete Pricing Plans</h2>
            <p className="bz-lead center">
              Honest, affordable group buy access — never pay full retail for
              premium SEO tools again. Every plan lists the tools included.
            </p>
          </div>

          <div className="bz-pricing-grid bz-pricing-page">
            {PLANS.map((plan) => (
              <div
                key={plan.title}
                className={`bz-price-card${plan.active ? " active" : ""}`}
              >
                <h6>{plan.title}</h6>
                <ul className="bz-price-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span>
                        <i className="bi bi-check-lg"></i>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="price">
                  {plan.price}
                  <span>/Month</span>
                </div>
                <a
                  href="https://members.seotoolsgroupbuy.us/signup"
                  className="bz-btn bz-btn-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>

          <div className="bz-center" style={{ marginTop: 40 }}>
            <p className="bz-lead center" style={{ marginBottom: 16 }}>
              Not sure which plan fits? Browse the tools catalog or ask support.
            </p>
            <div className="bz-cta-row">
              <Link href="/tools" className="bz-btn bz-btn-orange">
                Browse Tools <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="/contact" className="bz-btn bz-btn-dark">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
