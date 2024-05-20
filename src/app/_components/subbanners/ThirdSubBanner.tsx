import React from 'react';
import img1 from "/public/images/subbanner6.jpg";
import img2 from "/public/images/subbanner7.jpg";
import img3 from "/public/images/subbanner8.jpg";
import Image from 'next/image';


const ThirdSubBannerList = () => {
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

export default ThirdSubBannerList;
