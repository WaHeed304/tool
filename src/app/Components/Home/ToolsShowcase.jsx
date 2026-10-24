"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TOOLS = [
  {
    id: "ahrefs",
    title: "Ahrefs Access",
    short: "Backlinks & keywords",
    why: "Why Are Ahrefs Important?",
    whyBody:
      "Ahrefs is one of the most powerful SEO platforms for backlink research, keyword discovery, and competitor analysis. With Toolstap group buy access, you get the insights agencies rely on — without the full retail price.",
    reasons: "Key Reasons to Join Ahrefs via Group Buy",
    reasonsBody:
      "Track referring domains, find content gaps, audit your site, and reverse-engineer competitor strategies. Instant access after signup, with support when you need it.",
    href: "/tools",
    img: "/assets/img/buzzoid/seo-dashboard-hero.jpg",
  },
  {
    id: "semrush",
    title: "SEMrush Access",
    short: "Competitor & PPC intel",
    why: "Why Are SEMrush Tools Important?",
    whyBody:
      "SEMrush helps you uncover paid and organic opportunities, audit technical SEO, and plan content that ranks. Shared access through Toolstap makes the Guru-level toolkit affordable.",
    reasons: "Key Reasons to Buy SEMrush Access",
    reasonsBody:
      "Keyword Magic Tool, Site Audit, Position Tracking, and advertising research — all in one plan that fits freelancers and growing teams.",
    href: "/tools",
    img: "/assets/img/buzzoid/seo-toolkit-iso.jpg",
  },
  {
    id: "moz",
    title: "Moz Pro Access",
    short: "Authority & rankings",
    why: "Why Is Moz Pro Important?",
    whyBody:
      "Moz Pro is trusted for Domain Authority, link research, and on-page optimization. Group buy access lets you use the same metrics the industry still references daily.",
    reasons: "Key Reasons to Get Moz via Toolstap",
    reasonsBody:
      "Rank tracking, crawl insights, and link opportunities with transparent pricing and 24/7 support from our team.",
    href: "/tools",
    img: "/assets/img/buzzoid/marketers-collage.jpg",
  },
  {
    id: "content",
    title: "Content Tools",
    short: "Grammarly, Canva & more",
    why: "Why Are Content Tools Important?",
    whyBody:
      "Great rankings need great content. Grammarly, WordAI, Canva Pro, and Spin Rewriter help you write, design, and scale content faster — included in selected Toolstap plans.",
    reasons: "Key Reasons to Bundle Content Tools",
    reasonsBody:
      "One membership unlocks writing and design tools alongside SEO platforms, so your workflow stays in one place.",
    href: "/pricing",
    img: "/assets/img/buzzoid/seo-toolkit-iso.jpg",
  },
];

export default function ToolsShowcase() {
  const [open, setOpen] = useState({ tool: "ahrefs", panel: "why" });

  return (
    <section className="bz-section white bz-tools-showcase">
      <div className="bz-container">
        <div className="bz-center" style={{ marginBottom: 40 }}>
          <p className="bz-eyebrow">Toolstap&apos;s Tools</p>
          <h2 className="bz-h2">Premium SEO Tools</h2>
          <p className="bz-lead center">
            Everything you need to research, rank, and grow — shared access at
            group-buy prices.
          </p>
        </div>

        <div className="bz-showcase-list">
          {TOOLS.map((tool) => {
            const isOpen = open.tool === tool.id;
            return (
              <article key={tool.id} className="bz-showcase-item">
                <div className="bz-showcase-media">
                  <Image
                    src={tool.img}
                    alt={tool.title}
                    width={480}
                    height={360}
                    className="bz-showcase-img"
                  />
                </div>
                <div className="bz-showcase-copy">
                  <Link href={tool.href} className="bz-showcase-title">
                    {tool.title}
                  </Link>
                  <p className="bz-showcase-short">{tool.short}</p>

                  <button
                    type="button"
                    className={`bz-acc-btn${isOpen && open.panel === "why" ? " open" : ""}`}
                    onClick={() =>
                      setOpen(
                        isOpen && open.panel === "why"
                          ? { tool: null, panel: null }
                          : { tool: tool.id, panel: "why" }
                      )
                    }
                  >
                    {tool.why}
                    <span>{isOpen && open.panel === "why" ? "−" : "+"}</span>
                  </button>
                  {isOpen && open.panel === "why" && (
                    <p className="bz-acc-body">{tool.whyBody}</p>
                  )}

                  <button
                    type="button"
                    className={`bz-acc-btn${isOpen && open.panel === "reasons" ? " open" : ""}`}
                    onClick={() =>
                      setOpen(
                        isOpen && open.panel === "reasons"
                          ? { tool: null, panel: null }
                          : { tool: tool.id, panel: "reasons" }
                      )
                    }
                  >
                    {tool.reasons}
                    <span>{isOpen && open.panel === "reasons" ? "−" : "+"}</span>
                  </button>
                  {isOpen && open.panel === "reasons" && (
                    <p className="bz-acc-body">{tool.reasonsBody}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
