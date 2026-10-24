import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>Home</Link>
      </li>
      <li>
        <Link href="/tools" onClick={() => setMobileToggle(false)}>Tools</Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/testimonial" onClick={() => setMobileToggle(false)}>
              Testimonial
              </Link>
            </li>                                
            <li>
              <Link href="/pricing" onClick={() => setMobileToggle(false)}>
              Pricing
              </Link>
            </li> 
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link href="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>      
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog/group-buy-seo-tools" onClick={() => setMobileToggle(false)}>
                Group Buy SEO Tools Guide
              </Link>
            </li>
            <li>
              <Link href="/blog/ahrefs-vs-semrush-vs-moz" onClick={() => setMobileToggle(false)}>
                Ahrefs vs SEMrush vs Moz
              </Link>
            </li>            
            <li>
              <Link href="/blog/maximize-roi-seo-tools" onClick={() => setMobileToggle(false)}>
                Maximize ROI with SEO Tools
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
