import { Outfit } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import "./assets/buzzoid-theme.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'GROUP BUY SEO TOOLS - SEO & Digital Marketing Agency',
    template: '%s | GROUP BUY SEO TOOLS - SEO & Digital Marketing Agency',
  },
  description: 'GROUP BUY SEO TOOLS - SEO & Digital Marketing Agency',
  openGraph: {
    title: 'GROUP BUY SEO TOOLS - SEO & Digital Marketing Agency',
    description: 'GROUP BUY SEO TOOLS - SEO & Digital Marketing Agency',
  },
  verification: {
    google: 'QR-UsdH2_azApMufem74fUWhV32vAVkdy1z_qxevapA',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
