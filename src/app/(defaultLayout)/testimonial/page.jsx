import Link from "next/link";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "SEO Agency Owner",
    quote:
      "Toolstap cut our Ahrefs and SEMrush spend dramatically. My team still gets the backlink and keyword data we need for client audits every week.",
  },
  {
    name: "James Okonkwo",
    role: "Freelance SEO Consultant",
    quote:
      "I switched from juggling free trials to one group buy plan. Moz, Majestic, and SpyFu in one place made pitching retainers a lot easier.",
  },
  {
    name: "Priya Nair",
    role: "Content Marketing Lead",
    quote:
      "Grammarly, Canva, and WordAI on the same plan keep our editorial calendar moving without three separate invoices.",
  },
  {
    name: "Marcus Lee",
    role: "E-commerce SEO Manager",
    quote:
      "Ubersuggest and Keyword Tool cover our long-tail research. Support fixed a login glitch the same day — rare for group buy services.",
  },
  {
    name: "Elena Rossi",
    role: "Digital Marketing Freelancer",
    quote:
      "As a solo consultant I could never justify full Ahrefs. Toolstap’s combo plan finally let me compete with agencies on competitor analysis.",
  },
  {
    name: "Daniel Brooks",
    role: "In-house Growth Marketer",
    quote:
      "We run Screaming Frog crawls and SimilarWeb checks regularly. Group buy pricing meant our startup could keep premium SEO tools after Series A budget cuts.",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb Title="Testimonials" />

      <section className="bz-section white bz-testimonial">
        <div className="bz-container">
          <div className="bz-center">
            <p className="bz-eyebrow">Social proof</p>
            <h2 className="bz-h2">
              Marketers who use <span className="accent">Toolstap</span>
            </h2>
            <p className="bz-lead center">
              Real feedback from SEO pros who chose group buy access over full
              retail seats.
            </p>
          </div>

          <div className="bz-testi-grid">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="bz-testi-card">
                <div className="bz-testi-stars" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>“{t.quote}”</p>
                <div className="author">{t.name}</div>
                <div className="role">{t.role}</div>
              </article>
            ))}
          </div>

          <div className="bz-center" style={{ marginTop: 40 }}>
            <Link href="/pricing" className="bz-btn bz-btn-orange">
              See Pricing Plans <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
