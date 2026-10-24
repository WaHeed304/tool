import BlogDetails3 from '@/app/Components/BlogDetails/BlogDetails3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import React from 'react';

const page = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Ahrefs vs SEMrush vs Moz: Tool Comparison"
            ></BreadCumb>
            <BlogDetails3></BlogDetails3>
            <ContactInfo4></ContactInfo4>                          
        </div>
    );
};

export default page;
