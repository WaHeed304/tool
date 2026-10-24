"use client";
import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "What is a group buy SEO tool?",
    a: "A group buy SEO tool is a shared access service where multiple users share the cost of premium SEO tools, making them more affordable while still getting industry-leading data and features.",
  },
  {
    q: "Are these tools safe to use?",
    a: "Yes. Toolstap ensures all tools are accessed safely using secure methods so you can work with confidence.",
  },
  {
    q: "How can I get started?",
    a: "Just pick a plan, complete the payment, and get instant access to your selected tools — usually within seconds.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept multiple payment methods including PayPal, credit cards, and local payment options.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel anytime and we also provide a 30-day money-back guarantee.",
  },
];

export default function BuzzoidFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bz-section white">
      <div className="bz-container">
        <div className="bz-center">
          <p className="bz-eyebrow">Before You Buy</p>
          <h2 className="bz-h2">Frequently Asked Questions</h2>
          <p className="bz-lead center">
            What years of serving marketers have taught us to answer before you
            even ask.
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
                <span className="bz-faq-toggle">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <div className="bz-faq-answer">{item.a}</div>
            </div>
          ))}
        </div>

        <div className="bz-faq-cta-wrap">
          <Link href="/contact" className="bz-btn bz-btn-lavender">
            Contact us
            <span className="arrow">
              <i className="bi bi-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
