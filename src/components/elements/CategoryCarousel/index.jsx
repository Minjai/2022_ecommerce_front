import {
  setCategoryData,
  setPickedCategories,
} from '../../../store/slices/category';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './categoryCarousel.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const CategoryCarousel = ({
  data,
  path,
  hasFeatures = false,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryHandler = (item) => {
    window.scrollTo(window.scrollX, 0);
    dispatch(setCategoryData(item));
    navigate(path);
  };

  const pickCategoryHandler = (item) => {
    dispatch(setPickedCategories({ ...item, isActive: true }));
  };

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
        500: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 5,
        },
        900: {
          spaceBetween: 20,
          slidesPerView: 6,
        },
        1100: {
          spaceBetween: 30,
          slidesPerView: 7,
        },
        1300: {
          slidesPerView: 8.5,
          spaceBetween: 30,
        },
      }}
    >
      {hasFeatures
        ? data?.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() =>
                  hasFeatures
                    ? pickCategoryHandler(item)
                    : categoryHandler(data)
                }
                className={cls['category-child']}
              >
                <div className={cls['category-child__image']}>
                  <img src={item.image} alt="category-pic" />
                </div>
                <div className={cls['category-child__body']}>
                  <p>{item.title}</p>
                  <span>{item.children?.length} items</span>
                </div>
              </div>
            </SwiperSlide>
          ))
        : data?.children?.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() =>
                  hasFeatures
                    ? pickCategoryHandler(item.title)
                    : categoryHandler(data)
                }
                className={cls['category-child']}
              >
                <div className={cls['category-child__image']}>
                  <img src={item.image} alt="category-pic" />
                </div>
                <div className={cls['category-child__body']}>
                  <p>{item.title}</p>
                  <span>{item.children?.length} items</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default CategoryCarousel;
