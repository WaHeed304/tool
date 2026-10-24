import Link from "next/link";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const POSTS = [
  {
    href: "/blog/group-buy-seo-tools",
    title: "Complete Guide to Group Buy SEO Tools: Save 90% on Premium Tools",
    excerpt:
      "Learn how group buy SEO tools work, what you get with shared access, and how Toolstap helps marketers cut software costs without losing capability.",
    tag: "Guides",
  },
  {
    href: "/blog/ahrefs-vs-semrush-vs-moz",
    title: "Ahrefs vs SEMrush vs Moz: Which SEO Tool is Best for Your Business?",
    excerpt:
      "A practical comparison of the three biggest SEO suites — backlinks, keywords, and reporting — so you know what to prioritize in your group buy plan.",
    tag: "Comparisons",
  },
  {
    href: "/blog/maximize-roi-seo-tools",
    title: "How to Maximize ROI with Group Buy SEO Tools in 2024",
    excerpt:
      "Workflow tips for freelancers and agencies: pair research, content, and creative tools from one membership to stretch every marketing dollar.",
    tag: "Strategy",
  },
];

const page = () => {
  return (
    <div>
      <BreadCumb Title="Blog" />

      <section className="bz-section white">
        <div className="bz-container">
          <div className="bz-center">
            <p className="bz-eyebrow">SEO resources</p>
            <h2 className="bz-h2">Latest SEO Tools & Group Buy Insights</h2>
            <p className="bz-lead center">
              Guides and comparisons to help you get more from Toolstap and
              premium SEO software.
            </p>
          </div>

          <div className="bz-blog-grid">
            {POSTS.map((post) => (
              <article key={post.href} className="bz-blog-card">
                <div className="bz-blog-card-top">
                  <span className="bz-blog-tag">{post.tag}</span>
                </div>
                <div className="body">
                  <h3>
                    <Link href={post.href}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link href={post.href} className="bz-blog-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
