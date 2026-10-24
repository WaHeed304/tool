const ITEMS = [
  {
    icon: "bi-people",
    title: "Real Premium Tool Access",
    body: "All of our group buy plans give you shared access to the highest-quality SEO platforms marketers actually use — Ahrefs, SEMrush, Moz, and more. Real tools, real data, and uptime you can plan campaigns around.",
  },
  {
    icon: "bi-shield-lock",
    title: "Commitment to Security",
    body: "We go the extra mile to ensure that all of our customers’ personal and financial data stay safe, with secure servers and encrypted transactions guaranteeing that personal information always stays private.",
  },
  {
    icon: "bi-headset",
    title: "Premium Customer Experience",
    body: "It’s important to us that Toolstap’s service is as high-quality as the tools we provide. Our team is available 24/7 via chat, ticket, and WhatsApp so you’re never stuck without answers.",
  },
];

export default function BuzzoidGuarantees() {
  return (
    <section className="bz-dark">
      <div className="bz-container">
        <div className="bz-center">
          <h2 className="bz-h2">Our Guarantees</h2>
          <p className="bz-lead center">
            At Toolstap, we also pride ourselves on quality, security, and
            service.
          </p>
        </div>

        <div className="bz-guarantee">
          {ITEMS.map((item) => (
            <div key={item.title} className="bz-guarantee-item">
              <button type="button" tabIndex={-1} style={{ cursor: "default" }}>
                <span className="g-ico">
                  <i className={`bi ${item.icon}`}></i>
                </span>
                <span>
                  <h3>{item.title}</h3>
                </span>
              </button>
              <p className="g-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
