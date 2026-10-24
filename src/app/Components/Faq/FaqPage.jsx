"use client";
import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "What does Toolstap offer?",
    a: "We offer SEO, PPC, ecommerce, and spy tools for freelancers, bloggers, and small business owners. If you want to rank, optimize ads, research products, or analyze competitors, our group buy SEO tools are built for you — 50+ premium tools at affordable prices.",
  },
  {
    q: "What is a group buy SEO tool?",
    a: "A group buy SEO tool is shared access where multiple users share the cost of premium SEO software. You get industry-leading data and features without paying full retail for every seat.",
  },
  {
    q: "How is group buy different from individual subscriptions?",
    a: "Individual subscriptions give exclusive seats at full price. Group buy pools licenses so you access many tools for roughly the cost of one retail subscription — ideal for startups and agencies watching budget.",
  },
  {
    q: "Are these tools safe to use?",
    a: "Yes. Toolstap provides access through secure shared methods so you can research and audit with confidence. We focus on uptime and account health across the catalog.",
  },
  {
    q: "How can I get started?",
    a: "Pick a plan on the pricing page, complete payment, and get access — usually within seconds after signup.",
  },
  {
    q: "Will I get usernames and passwords?",
    a: "Generally no. You use tools through our system so you do not need individual logins. A few tools may use shared credentials when required.",
  },
  {
    q: "Do you provide private accounts?",
    a: "No — Toolstap is group buy. Tools are shared so we can keep prices low for everyone.",
  },
  {
    q: "Can I share my Toolstap account?",
    a: "No. Account sharing is not allowed and can lead to a permanent ban. Buy extra seats if your team needs more access, or contact us about reseller options.",
  },
  {
    q: "What if a tool stops working?",
    a: "We maintain multiple accounts for many tools. If one session fails, switch to another or contact support — we aim for 99.9% availability.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept PayPal, credit cards, and selected local payment options depending on your region.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel anytime, and we also offer a 30-day money-back guarantee on eligible plans.",
  },
  {
    q: "Do you support Mac and Linux?",
    a: "Yes. Access works on Windows, Mac, Chrome OS, and major Linux flavors. For some portable browser setups we can share VPS/RDP guidance.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bz-section white">
      <div className="bz-container">
        <div className="bz-center">
          <p className="bz-eyebrow">Before you buy</p>
          <h2 className="bz-h2">Frequently Asked Questions</h2>
          <p className="bz-lead center">
            Straight answers about Toolstap group buy SEO tools, access, and
            billing.
          </p>
        </div>

        <div className="bz-faq">
          {FAQS.map((item, i) => (
            <div
              key={item.q}
              className={`bz-faq-item${open === i ? " open" : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="bz-faq-toggle">{open === i ? "−" : "+"}</span>
              </button>
              <div className="bz-faq-answer">{item.a}</div>
            </div>
          ))}
        </div>

        <div className="bz-faq-cta-wrap">
          <Link href="/contact" className="bz-btn bz-btn-lavender">
            Still have questions?
            <span className="arrow">
              <i className="bi bi-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
