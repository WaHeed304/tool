"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const ContactIno3 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
<div className="cta2" data-background="/assets/img/bg/cta3-bg.jpg" >
    <div className="container _relative">
      <div className="row">
        <div className="col-lg-6 m-auto text-center">
          <div className="heading">
            <h2>Access 50+ Premium SEO Tools at toolstap Prices</h2>
            <p style={{color: '#fff', fontSize: '18px', marginBottom: '30px'}}>Save up to 90% on premium SEO tools including Ahrefs, SEMrush, Moz Pro, and more. Get instant access to all tools with our affordable toolstap plans.</p>
            <div className="form-area">
              <a href="https://members.seotoolsgroupbuy.us/signup" className="theme-btn2" style={{display: 'inline-block', padding: '15px 40px', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">Buy Now <span><i className="bi bi-arrow-right"></i></span></a>
            </div>
          </div>
        </div>
      </div>
      <Image src="/assets/img/others/cta2-img1.png" alt="img" width={238} height={226} className="image1"   />
      <Image src="/assets/img/others/cta2-img2.png" alt="img" width={238} height={226} className="image2"   />
    </div>
   </div>

    );
};

export default ContactIno3;