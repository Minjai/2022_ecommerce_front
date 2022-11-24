import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './reviewsCarousel.module.scss';
import { Navigation, Grid } from 'swiper';
import ReviewItem from '../ReviewItem';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const data = [
  {
    id: 1,
    image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'Hello world',
    date: '34/15/2020',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 5,
    user: 'Bayel',
  },
  {
    id: 2,
    image:
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'Hello world',
    date: '34/15/2020',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 1,
    user: 'Timur',
  },
  {
    id: 3,
    image:
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'React',
    date: '34/15/2020',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 3,
    user: 'Almaz',
  },
  {
    id: 4,
    image:
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'Next',
    date: '34/15/2534',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 2,
    user: 'Bayel',
  },
  {
    id: 5,
    image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'Redux',
    date: '34/15/3343',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 2,
    user: 'Bayel',
  },
];

const ReviewsCarousel = () => {
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
          {data.map((item) => (
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
