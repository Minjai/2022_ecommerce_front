import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './reviewsCarousel.module.scss';
import { Navigation, Grid } from 'swiper';
import ReviewItem from '../ReviewItem';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const ReviewsCarousel = ({ data }) => {
  return (
    <div className={cls['review-carousel']}>
      <div className={cls['review-carousel__list']}>
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
            fill: 2,
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Grid]}
          className={`mySwiper ${cls['review-swiper']}`}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 1.7,
            },
            1100: {
              slidesPerView: 2,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide className={cls['review-slide']} key={item.id}>
              <ReviewItem review={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
