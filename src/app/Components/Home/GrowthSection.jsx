import Image from "next/image";

export default function GrowthSection() {
  return (
    <section className="bz-story-section bz-story-alt">
      <div className="bz-container">
        <div className="bz-story-grid reverse">
          <div className="bz-story-visual bz-growth-visual">
            <div className="bz-growth-arrow" aria-hidden>
              <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 150C40 120 70 70 120 45C150 30 175 22 200 18"
                  stroke="#7DD3C0"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M175 8L205 18L180 40"
                  stroke="#7DD3C0"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bz-photo bz-photo-sm bz-growth-a">
              <Image
                src="/assets/img/buzzoid/marketers-collage.jpg"
                alt=""
                width={120}
                height={120}
              />
            </div>
            <div className="bz-photo bz-photo-sm bz-growth-b">
              <Image
                src="/assets/img/buzzoid/seo-toolkit-iso.jpg"
                alt=""
                width={120}
                height={120}
              />
            </div>
            <span className="bz-star-deco" aria-hidden>
              ★
            </span>
          </div>

          <div className="bz-story-text">
            <h2 className="bz-story-h2">
              Accelerated SEO Growth{" "}
              <span className="bz-glasses" aria-hidden>
                <i className="bi bi-eyeglasses"></i>
              </span>
            </h2>
            <p className="bz-story-p">
              That gets more search traffic to your pages — making you more
              visible, more competitive, and more important in Google with
              better keywords, backlinks, and content.
            </p>
            <div className="bz-story-callout">
              <span className="bz-story-ico" aria-hidden>
                ★
              </span>
              <p>
                Toolstap can make it happen! Our SEO and AI tool packages unlock
                instantly, your workflow stays safe, and you see fast results
                for your sites, content, and campaigns!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
