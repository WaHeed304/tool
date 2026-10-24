const BLOCKS = [
  {
    spark: true,
    title: "Industry-Leading Tools",
    body: "Toolstap has been delivering high-quality shared access to Ahrefs, SEMrush, Moz, and dozens of premium SEO tools — helping freelancers, agencies, and marketers save thousands every year without sacrificing the data they need to rank.",
    callout:
      "When you need competitor intel, backlink audits, or keyword research, our group buy plans put the same industry-standard tools in your hands at a fraction of retail pricing.",
  },
  {
    spark: true,
    title: "Trusted Growth Experts",
    body: "Since we began operations, we’ve helped countless users grow their online presence with reliable uptime, secure access, and support that actually responds. Small businesses and independent marketers choose Toolstap because quality and price finally meet.",
    callout:
      "We care about customer satisfaction and offer excellent support so you can get the most out of your tools — day or night.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bz-section white">
      <div className="bz-container">
        <div className="bz-center" style={{ marginBottom: 48 }}>
          <h2 className="bz-h2">
            Why <span className="accent">Toolstap</span>?
          </h2>
          <p className="bz-lead center">
            We’re not the only provider offering group buy SEO tools. We’re the
            best fit when you want premium access, fair pricing, and support you
            can count on.
          </p>
        </div>

        {BLOCKS.map((b) => (
          <div key={b.title} className="bz-why-block">
            {b.spark && <div className="bz-spark">✦ ✦ ✦</div>}
            <h3 className="bz-h2" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
              {b.title}
            </h3>
            <p className="bz-lead" style={{ maxWidth: "100%" }}>
              {b.body}
            </p>
            <div className="bz-callout">
              <span className="heart">♥</span>
              {b.callout}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
