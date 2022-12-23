import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../../elements/ProductItem';
import cls from './productList.module.scss';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const ProductList = ({ products }) => {
  return (
    <div className={cls['product-list']}>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        navigation={true}
        modules={[Navigation]}
        className={`mySwiper ${cls['product-swiper']}`}
        breakpoints={{
          300: {
            slidesPerView: 1.4,
            spaceBetween: 10,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 3,
          },
          1150: {
            slidesPerView: 4,
          },
        }}
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
