import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import './mainCarousel.scss';

const MainCarousel = () => {
  return (
    <div className="main-carousel">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper main-swiper">
        <SwiperSlide><div>1</div></SwiperSlide>
        <SwiperSlide><div>2</div></SwiperSlide>
        <SwiperSlide><div>3</div></SwiperSlide>
        <SwiperSlide><div>4</div></SwiperSlide>
        <SwiperSlide><div>5</div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainCarousel;
