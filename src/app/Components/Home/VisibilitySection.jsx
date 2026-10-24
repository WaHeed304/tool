import Image from "next/image";

export default function VisibilitySection() {
  return (
    <section className="bz-story-section">
      <div className="bz-container">
        <div className="bz-story-grid">
          <div className="bz-story-text">
            <h2 className="bz-story-h2">
              SEO Tools{" "}
              <span className="bz-story-accent">
                Visibility
                <span className="bz-spark-mini" aria-hidden>
                  ✦
                </span>
              </span>
            </h2>
            <p className="bz-story-p">
              Premium SEO platforms have become so essential worldwide that
              it&apos;s almost impossible for marketers to earn strong rankings
              and traffic without keyword, backlink, and competitor data.
            </p>
            <div className="bz-story-callout">
              <span className="bz-story-ico" aria-hidden>
                ♥
              </span>
              <p>
                But when you use the same tools the top agencies rely on —
                Ahrefs, SEMrush, Moz, and more — you&apos;re far more likely to
                find opportunities and grow faster.
              </p>
            </div>
          </div>

          <div className="bz-story-visual bz-vis-visual">
            <div className="bz-blob bz-blob-lavender" aria-hidden />
            <div className="bz-photo bz-photo-lg">
              <Image
                src="/assets/img/buzzoid/seo-dashboard-hero.jpg"
                alt="SEO dashboard visibility"
                width={280}
                height={280}
              />
            </div>
            <div className="bz-photo bz-photo-sm bz-photo-top">
              <Image
                src="/assets/img/buzzoid/marketers-collage.jpg"
                alt=""
                width={110}
                height={110}
              />
            </div>
            <div className="bz-photo bz-photo-sm bz-photo-bot">
              <Image
                src="/assets/img/buzzoid/seo-toolkit-iso.jpg"
                alt=""
                width={110}
                height={110}
              />
            </div>
            <div className="bz-eye-badge" aria-hidden>
              <i className="bi bi-eye"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
