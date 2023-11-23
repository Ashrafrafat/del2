import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../../src/images/sld1.gif';
import slide2 from '../../../../src/images/sld2.gif';
import slide3 from '../../../../src/images/sld3.gif';
import slide4 from '../../../../src/images/sld5.jpg';
import slide5 from '../../../../src/images/sld6.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle
            heading={"Only for Summer"}
            subHeading={"March 2024 to July 2024"}>
                
            </SectionTitle>

<Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Panjabi</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Panjabi & Kamij</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Women's Kurti</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>for Womens</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Fatua</h3>
        </SwiperSlide>
      </Swiper>

        </section>

        
    );
};
export default Category;