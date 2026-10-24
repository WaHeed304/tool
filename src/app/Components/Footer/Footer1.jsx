import Link from "next/link";
import LogoMark from "../Common/LogoMark";

const Footer1 = () => {
  return (
    <footer className="bz-footer">
      <div className="bz-container">
        <div className="bz-footer-grid">
          <div className="bz-footer-brand">
            <Link href="/" className="bz-logo">
              <LogoMark size={32} />
              <span>toolstap</span>
            </Link>
            <p>
              Ahrefs, SEMrush, Moz and more. Premium SEO tools — all in one
              affordable group buy.
            </p>
            <div className="bz-footer-social">
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <h3>Need a hand?</h3>
            <ul>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>SEO Tools</h3>
            <ul>
              <li>
                <Link href="/tools">Ahrefs Access</Link>
              </li>
              <li>
                <Link href="/tools">SEMrush Tools</Link>
              </li>
              <li>
                <Link href="/tools">Moz Pro</Link>
              </li>
              <li>
                <Link href="/tools">Majestic</Link>
              </li>
              <li>
                <Link href="/tools">Screaming Frog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Content Tools</h3>
            <ul>
              <li>
                <Link href="/tools">Grammarly</Link>
              </li>
              <li>
                <Link href="/tools">WordAI</Link>
              </li>
              <li>
                <Link href="/tools">Canva Pro</Link>
              </li>
              <li>
                <Link href="/tools">Spin Rewriter</Link>
              </li>
              <li>
                <Link href="/tools">Copyscape</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/testimonial">Testimonials</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Account</h3>
            <ul>
              <li>
                <a
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="https://members.seotoolsgroupbuy.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Log In
                </a>
              </li>
              <li>
                <a href="mailto:admin@groupbuyseotool.us">
                  admin@groupbuyseotool.us
                </a>
              </li>
              <li>
                <a href="https://wa.me/15205636362">+1 (520) 563‑6362</a>
              </li>
              <li>
                <span style={{ color: "#6b7280", fontSize: 14 }}>
                  24/7 Support Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bz-footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} Toolstap. All Rights
            Reserved.
          </p>
          <p>Accepted: PayPal · Cards · Local payments</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
