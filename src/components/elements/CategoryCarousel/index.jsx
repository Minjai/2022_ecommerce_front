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
        900: {
          slidesPerView: 6,
        },
        1300: {
          slidesPerView: 7,
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
