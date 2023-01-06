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

const CategoryCarousel = ({ data, path, hasFeatures = false }) => {
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
      className={`category-swiper`}
      breakpoints={{
        300: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        380: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 5.5,
          spaceBetween: 10,
        },
        850: {
          slidesPerView: 6.5,
        },
        1000: {
          spaceBetween: 20,
          slidesPerView: 7.5,
        },
        1150: {
          spaceBetween: 30,
          slidesPerView: 8,
        },
        1300: {
          slidesPerView: 8.5,
          spaceBetween: 30,
        },
      }}
    >
      <div>
        {hasFeatures
          ? data?.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => pickCategoryHandler(item)}
                  className={cls['category-child']}
                >
                  <div className={cls['category-child__image']}>
                    <img src={item.image} alt="category-pic" />
                  </div>
                  <div className={cls['category-child__body']}>
                    <p>{item.title}</p>
                    <span>
                      {item?.count_products}{' '}
                      {item?.count_products === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : data?.children?.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => categoryHandler(data)}
                  className={cls['category-child']}
                >
                  <div className={cls['category-child__image']}>
                    <img src={item.image} alt="category-pic" />
                  </div>
                  <div className={cls['category-child__body']}>
                    <p>{item.title}</p>
                    <span>
                      {item?.count_products}{' '}
                      {item?.count_products === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </div>
    </Swiper>
  );
};

export default CategoryCarousel;
