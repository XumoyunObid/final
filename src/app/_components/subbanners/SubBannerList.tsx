import React from 'react';
import img1 from "/public/images/subbanner1.jpg";
import img2 from "/public/images/subbanner2.jpg";
import img3 from "/public/images/subbanner3.jpg";
import Image from 'next/image';


const SubBannerList = () => {
  return (
    <div className='grid grid-row-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-5 pb-10 pt-5'>
      <div>
        <Image src={img1} alt="Image"/>
      </div>
      <div>
        <Image src={img2} alt="Image"/>
      </div>
      <div>
        <Image src={img3} alt="Image"/>
      </div>
    </div>
  );
};

export default SubBannerList;
