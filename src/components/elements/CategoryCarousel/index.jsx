import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './categoryCarousel.module.scss';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const CategoryCarousel = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      navigation={true}
      modules={[Navigation]}
      className={`mySwiper ${cls['category-swiper']}`}
      breakpoints={{
        300: {
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 3.6,
          spaceBetween: 10,
        },
        600: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        900: {
          spaceBetween: 20,
          slidesPerView: 5,
        },
        1100: {
          spaceBetween: 30,
          slidesPerView: 6,
        },
        1300: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className={cls['category-child']}>
            <div className={cls['category-child__image']}>
              <img src={item.image} alt="category-pic" />
            </div>
            <div className={cls['category-child__body']}>
              <p>{item.category}</p>
              <span>{item.amount} items</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoryCarousel;
