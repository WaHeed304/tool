"use client";
import { useState } from "react";
import Link from "next/link";
import LogoMark from "../Common/LogoMark";


export default function Header1() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setSvcOpen(false);
  };

  return (
    <>
      <header className="bz-header bz-header-desk">
        <div className="bz-header-bar">
          <Link href="/" className="bz-logo" onClick={close}>
            <LogoMark size={34} />
            <span className="bz-logo-text">toolstap</span>
          </Link>

          <nav className="bz-nav-desk" aria-label="Main">
            <div
              className="bz-nav-drop"
              onMouseEnter={() => setSvcOpen(true)}
              onMouseLeave={() => setSvcOpen(false)}
            >
              <button
                type="button"
                className="bz-nav-link"
                aria-expanded={svcOpen}
                onClick={() => setSvcOpen(!svcOpen)}
              >
                Tools <i className="bi bi-chevron-down"></i>
              </button>
              {svcOpen && (
                <div className="bz-nav-menu">
                  <Link href="/tools" onClick={close}>
                    All SEO Tools
                  </Link>
                  <Link href="/pricing" onClick={close}>
                    Pricing Plans
                  </Link>
                  <Link href="/#services" onClick={close}>
                    Tool Categories
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="bz-nav-link">
              Blog
            </Link>
            <Link href="/faq" className="bz-nav-link">
              Help
            </Link>
          </nav>

          <div className="bz-header-actions">
            <a
              href="https://members.seotoolsgroupbuy.us/"
              className="bz-login-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
            </a>
            <button
              type="button"
              className="bz-icon-btn bz-menu-toggle"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </header>
      <div className="bz-header-spacer" />

      <div
        className={`bz-menu-overlay${open ? " open" : ""}`}
        onClick={close}
        role="presentation"
      >
        <div
          className="bz-menu-panel"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="bz-menu-head">
            <Link href="/" className="bz-logo" onClick={close}>
              <LogoMark size={34} />
              <span className="bz-logo-text">toolstap</span>
            </Link>
            <button
              type="button"
              className="bz-icon-btn"
              aria-label="Close menu"
              onClick={close}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <ul className="bz-menu-nav">
            <li>
              <Link href="/tools" onClick={close}>
                Tools
              </Link>
            </li>
            <li>
              <Link href="/#services" onClick={close}>
                Categories
              </Link>
            </li>
            <li>
              <Link href="/pricing" onClick={close}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={close}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={close}>
                Help
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={close}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={close}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="bz-menu-cta">
            <a
              href="https://members.seotoolsgroupbuy.us/signup"
              className="bz-btn bz-btn-orange"
              style={{ width: "100%" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get 7 Days Trial
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
