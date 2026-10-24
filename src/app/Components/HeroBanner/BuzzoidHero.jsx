import LogoMark from "../Common/LogoMark";

export default function BuzzoidHero() {
  return (
    <section className="bz-hero">
      <div className="bz-hero-inner">
        <h1>
          Access{" "}
          <span className="hl-icon" aria-hidden>
            <i className="bi bi-tools"></i>
          </span>{" "}
          <span className="hl-seo">SEO tools</span> and{" "}
          <span className="hl-icon hl-icon-dark" aria-hidden>
            <i className="bi bi-robot"></i>
          </span>{" "}
          <span className="hl-tools">AI tools</span>
          <br />
          <span className="hl-speed">
            <span className="speed-lines" aria-hidden>
              <span />
              <span />
              <span />
            </span>
            Delivered Instantly!
          </span>
        </h1>

        <p className="bz-hero-sub">
          Count on Toolstap&apos;s{" "}
          <LogoMark size={16} className="bz-inline-mark" />{" "}
          <strong className="hl-rank">#1</strong> ranked group buy service{" "}
          <span className="avatars" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </span>{" "}
          to help you grow with premium SEO &amp; AI tools at a fraction of the
          cost!
          <a
            href="#services"
            className="bz-scroll-hint"
            aria-label="See our tools"
          >
            <i className="bi bi-arrow-down"></i>
          </a>
        </p>
      </div>
    </section>
  );
}
