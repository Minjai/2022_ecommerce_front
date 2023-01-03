import { useGetBannersQuery } from '../../../store/query/settingsQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import EmptyText from '../UI/EmptyText';
import { Navigation } from 'swiper';
import Loader from '../UI/Loader';
import 'swiper/css/navigation';
import './mainCarousel.scss';

const MainCarousel = () => {
  const { data, isLoading } = useGetBannersQuery();

  return (
    <div className="main-carousel">
      {isLoading ? (
        <Loader />
      ) : data?.results.length > 0 ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="main-swiper"
        >
          {data?.results.map(({ banner_images }) =>
            banner_images.map((item) => (
              <SwiperSlide key={item.id}>
                <a
                  target={'_blank'}
                  rel="noreferrer"
                  href={item.link_to_product}
                >
                  <img src={item.image} alt="banner" />
                  <div>
                    <span>{item.description}</span>
                  </div>
                </a>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      ) : (
        <EmptyText text={'banner'} />
      )}
    </div>
  );
};

export default MainCarousel;
