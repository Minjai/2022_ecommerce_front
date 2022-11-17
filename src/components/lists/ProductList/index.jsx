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
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
