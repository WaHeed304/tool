"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TABS = {
  seo: {
    label: "SEO Tools",
    icon: "bi-graph-up-arrow",
    items: [
      {
        title: "Ahrefs",
        desc: "Grow your rankings",
        icon: "bi-link-45deg",
        href: "/tools",
      },
      {
        title: "SEMrush",
        desc: "Beat your competitors",
        icon: "bi-bar-chart",
        href: "/tools",
      },
      {
        title: "Moz Pro",
        desc: "Track authority",
        icon: "bi-trophy",
        href: "/tools",
      },
      {
        title: "Majestic",
        desc: "Link intelligence",
        icon: "bi-diagram-3",
        href: "/tools",
      },
    ],
  },
  content: {
    label: "Content",
    icon: "bi-pencil-square",
    items: [
      {
        title: "Grammarly",
        desc: "Write clearer, faster",
        icon: "bi-spellcheck",
        href: "/tools",
      },
      {
        title: "WordAI",
        desc: "Rewrite & spin",
        icon: "bi-magic",
        href: "/tools",
      },
      {
        title: "Canva Pro",
        desc: "Design in minutes",
        icon: "bi-palette",
        href: "/tools",
      },
      {
        title: "Spin Rewriter",
        desc: "Unique variations",
        icon: "bi-arrow-repeat",
        href: "/tools",
      },
    ],
  },
  spy: {
    label: "Spy Tools",
    icon: "bi-eye",
    items: [
      {
        title: "SpyFu",
        desc: "Ad & keyword spy",
        icon: "bi-binoculars",
        href: "/tools",
      },
      {
        title: "SimilarWeb",
        desc: "Traffic insights",
        icon: "bi-globe2",
        href: "/tools",
      },
      {
        title: "Ubersuggest",
        desc: "Keyword ideas",
        icon: "bi-lightbulb",
        href: "/tools",
      },
      {
        title: "Keyword Tool",
        desc: "Long-tail research",
        icon: "bi-search",
        href: "/tools",
      },
    ],
  },
};

const TAB_KEYS = Object.keys(TABS);

export default function BuzzoidSelector() {
  const [tab, setTab] = useState("seo");
  const active = TABS[tab];

  return (
    <section className="bz-services-section" id="services">
      <div className="bz-services-wrap">
        <div className="bz-selector">
          <div className="bz-tabs" role="tablist">
            {TAB_KEYS.map((key, i) => {
              const val = TABS[key];
              const isActive = tab === key;
              let curveClass = "";
              if (isActive) {
                if (i === 0) curveClass = " curve-right";
                else if (i === TAB_KEYS.length - 1) curveClass = " curve-left";
                else curveClass = " curve-both";
              }
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`bz-tab${isActive ? " active" : ""}${curveClass}`}
                  onClick={() => setTab(key)}
                >
                  <i className={`bi ${val.icon}`}></i>
                  <span>{val.label}</span>
                </button>
              );
            })}
          </div>

          <div className="bz-service-grid" role="tabpanel">
            {active.items.map((item) => (
              <Link key={item.title} href={item.href} className="bz-service-card">
                <span className="ico">
                  <i className={`bi ${item.icon}`}></i>
                </span>
                <strong>{item.title}</strong>
                <span className="desc">{item.desc}</span>
                <span className="chev">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust bar — image 2 style */}
        <div className="bz-trust-bar">
          <div className="bz-trust-left">
            <Image
              src="/assets/img/buzzoid/trust-avatars.jpg"
              alt=""
              width={140}
              height={32}
              className="bz-trust-avatar-img"
            />
            <span className="stars" aria-label="5 star rating">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </span>
            <span className="trust-text">
              <strong>Thousands+</strong> marketers served with Toolstap
            </span>
          </div>
          <div className="bz-trust-mid">
            <i className="bi bi-lock-fill"></i>
            <span>Secure access</span>
          </div>
          <div className="bz-trust-pay">
            <span className="pay-badge">PayPal</span>
            <span className="pay-badge">Visa</span>
            <span className="pay-badge">MC</span>
            <span className="pay-badge">Amex</span>
          </div>
        </div>
      </div>
    </section>
  );
}
