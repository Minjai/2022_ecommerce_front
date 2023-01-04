import { setAlert, setAlertContent } from '../../../store/slices/alert';
import { axiosInstance } from '../../../constants/axios';
import CloseButton from '../../elements/UI/CloseButton';
import { dateParser } from '../../../utils/dateParser';
import { setModal } from '../../../store/slices/modal';
import { useDispatch, useSelector } from 'react-redux';
import { nameClose } from '../../../utils/nameCloser';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import Rating from '../../elements/UI/Rating';
import cls from './reviewInfo.module.scss';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const ReviewInfo = () => {
  const { pickedReview } = useSelector((state) => state.review);
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteReviewHandler = async () => {
    try {
      const response = await axiosInstance.delete(
        `reviews/reviews/${pickedReview?.id}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      dispatch(setAlert(true));
      dispatch(setAlertContent('Your review has been deleted !'));
      dispatch(setModal(false));
    } catch (error) {}
  };

  const editReviewHandler = () => {
    dispatch(setModal(false));
    navigate(`/${paths.MY_PAGE}/write-review/${pickedReview?.product?.id}`);
  };

  const sliderRef = useRef();
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    sliderRef?.current?.swiper?.slideTo(myIndex);
  }, [myIndex]);

  return (
    <div className={cls['review-info']}>
      <CloseButton />
      <div className={cls['review-info-wrapper']}>
        <div className={cls['review-info-images']}>
          <div className={cls['review-carousel']}>
            <Swiper
              ref={sliderRef}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={(e) => setMyIndex(e.realIndex)}
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
          <div className={cls['review-picked-images']}>
            {pickedReview?.product?.images?.map((item, index) => (
              <img
                className={cls[myIndex === index ? 'active-pic' : '']}
                key={item.id}
                src={item?.image}
                alt="product-pic"
              />
            ))}
          </div>
        </div>
        <div className={cls['review-info-content']}>
          <div className={cls['review-info-content__child']}>
            <img
              src={
                pickedReview?.product?.images?.find(
                  (item) => item.is_feature === true
                )?.image
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
            <div>
              {nameClose(pickedReview?.user?.username)}
              <b>{dateParser(pickedReview?.created_at)}</b>
            </div>
            {pickedReview?.user?.email === userInfo?.email && (
              <div>
                <span onClick={editReviewHandler}>Edit</span>
                <span onClick={deleteReviewHandler}>Delete</span>
              </div>
            )}
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
