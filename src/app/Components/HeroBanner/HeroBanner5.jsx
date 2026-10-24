import parse from 'html-react-parser';
import Image from 'next/image';

const HeroBanner5 = ({subtitle,title,content,img1,img2,shape1,shape2,shape3}) => {
    return (
        <div className="hero5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="main-heading">
                <p className="title" data-aos="fade-left" data-aos-duration="800"> <span className="span">
                <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20}   />
                  {subtitle}</span></p>
                <h1 className="text-anime-style-3">{title} </h1>
                <div className="space20"></div>
                <p data-aos="fade-right" data-aos-duration="800">
                  Get the most complete collection of <a href="https://seotoolsgroupbuy.us/" target="_blank" rel="noopener noreferrer" style={{color: '#ff6b35', textDecoration: 'underline'}}>Group Buy SEO Tools</a> at unbeatable prices. Why spend more when you can get the same <a href="https://seotoolsgroupbuy.us/" target="_blank" rel="noopener noreferrer" style={{color: '#ff6b35', textDecoration: 'underline'}}>Premium SEO Tools</a> for less?
                </p>
                <div className="form-area" data-aos="fade-right" data-aos-duration="1200">
                  <div className="form-btn">
                    <a href="https://members.seotoolsgroupbuy.us/signup" className="theme-btn3" style={{display: 'inline-block', padding: '15px 30px', fontSize: '16px', fontWeight: '600', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                      Get 7 Days Trial Now <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-images">
                <div className="image1">
                <Image src={img1} alt="img" width={471} height={472}   />
                </div>
                <div className="image2 round-circle">
                <Image src={img2} alt="img" width={608} height={604}   />
                </div>
                <div className="shape1 animate1">
                <Image src={shape1} alt="img" width={180} height={100}   />
                </div>
                <div className="shape2 animate2">
                <Image src={shape2} alt="img" width={180} height={99}   />
                </div>
                <div className="shape3">
                <Image src={shape3} alt="img" width={180} height={99}   />
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
};

export default HeroBanner5;