import BlogDetails4 from '@/app/Components/BlogDetails/BlogDetails4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import React from 'react';

const page = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Maximize ROI with SEO Tools 2024"
            ></BreadCumb>
            <BlogDetails4></BlogDetails4>
            <ContactInfo4></ContactInfo4>                          
        </div>
    );
};

export default page;
