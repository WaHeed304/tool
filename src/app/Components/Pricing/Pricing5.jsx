import Link from "next/link";

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
      "+more",
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
      "+more",
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
      "+more",
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
      "+more",
    ],
  },
];

const Pricing5 = () => {
  return (
    <section className="bz-section" id="pricing">
      <div className="bz-container">
        <div className="bz-center">
          <p className="bz-eyebrow">Pricing plan</p>
          <h2 className="bz-h2">Toolstap Complete Pricing Plans</h2>
          <p className="bz-lead center">
            Honest, affordable group buy access — never pay full retail for
            premium SEO tools again.
          </p>
        </div>

        <div className="bz-pricing-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`bz-price-card${plan.active ? " active" : ""}`}
            >
              <h6>{plan.title}</h6>
              <ul>
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

        <div className="bz-center" style={{ marginTop: 32 }}>
          <Link href="/pricing" className="bz-btn bz-btn-orange">
            View Full Tools List <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing5;
