import CloseButton from '../../elements/UI/CloseButton';
import { dateParser } from '../../../utils/dateParser';
import { nameClose } from '../../../utils/nameCloser';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '../../elements/UI/Rating';
import cls from './reviewInfo.module.scss';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const ReviewInfo = () => {
  const { pickedReview } = useSelector((state) => state.review);

  return (
    <div className={cls['review-info']}>
      <CloseButton />
      <div className={cls['review-info-wrapper']}>
        <div className={cls['review-info-images']}>
          <div className={cls['review-carousel']}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper review-swiper"
            >
              {pickedReview.product?.images.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <div>
                    <img src={image} alt="banner" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={cls['review-info-content']}>
          <div className={cls['review-info-content__child']}>
            <img
              src={
                pickedReview?.product?.images?.find(
                  (item) => item.is_feature === true
                ).image
              }
              alt="review-pic"
            />
            <div>
              <h5>{pickedReview?.product?.category?.title}</h5>
              <p>{pickedReview?.product?.product_name}</p>
              <span>{pickedReview?.product?.prices[0]?.package}</span>
            </div>
          </div>
          <div className={cls['review-info-content__stars']}>
            <Rating productRating={pickedReview?.stars} />
            <b>({pickedReview.stars})</b>
          </div>
          <div className={cls['review-info-content__user']}>
              {nameClose(pickedReview?.user?.username)}
              <b>{dateParser(pickedReview?.created_at)}</b>
          </div>
          <div className={cls['review-info-content__message']}>
            <p>{pickedReview?.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;
