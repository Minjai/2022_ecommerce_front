import { useGetSingleProductQuery } from '../../../store/query/productQuery';
import { setContent, setModal } from '../../../store/slices/modal';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { axiosInstance } from '../../../constants/axios';
import { modalPaths, paths } from '../../../constants/paths';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cls from './reviewForm.module.scss';
import { setPickedReview } from '../../../store/slices/review';

const ReviewForm = () => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState([]);
  const [stars, setStars] = useState(0);

  const { id } = useParams();
  const { pickedReview } = useSelector((state) => state.review);
  const { userInfo } = useSelector((state) => state.user);

  const { data: productData } = useGetSingleProductQuery({ id });

  useEffect(() => {
    const data = [];

    for (let i = 0; i < 5; i++) {
      if (stars > i) {
        data.push(<AiFillStar key={i} />);
      } else {
        data.push(<AiOutlineStar key={i} />);
      }
    }

    setRating(data);
  }, [stars]);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleReviewModal = async () => {
    if (
      pickedReview?.product?.id === +id &&
      pickedReview?.user?.email === userInfo?.email
    ) {
      try {
        const response = await axiosInstance.patch(
          `reviews/reviews/${pickedReview?.id}/`,
          {
            product: productData.id,
            comment,
            parent: pickedReview?.parent,
            stars,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        const setStars = await axiosInstance.post(
          'reviews/star/',
          {
            star: stars,
            product: productData.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        dispatch(setModal(true));
        dispatch(setContent(modalPaths.REVIEW));
        navigate(`/${paths.MY_PAGE}/${paths.USER_REVIEWS}`)
        dispatch(setPickedReview({}))
      } catch (error) {
        console.log(error.response);
      }
    } else {
      try {
        const response = await axiosInstance.post(
          'reviews/reviews/',
          {
            product: productData.id,
            comment,
            parent: null,
            stars,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        const setStars = await axiosInstance.post(
          'reviews/star/',
          {
            star: stars,
            product: productData.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        dispatch(setModal(true));
        dispatch(setContent(modalPaths.REVIEW));
        navigate(`/${paths.MY_PAGE}/${paths.USER_REVIEWS}`)
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div className={cls['review']}>
      <h3 className={cls['review-header']}>Write Review</h3>
      <div className={cls['review-body']}>
        <div className={cls['review-body__child']}>
          <h4>Item Name</h4>
          <div>
            <img
              src={
                productData?.images.find((item) => item.is_feature === true)
                  ?.image
              }
              alt="review-pic"
            />
            <span>
              <p>{productData?.product_name}</p>
              <b>{productData?.prices[0].package}</b>
              <h5>$ {productData?.prices[0].selling_price}</h5>
            </span>
          </div>
        </div>
      </div>
      <div className={cls['review-footer']}>
        <div>
          <p>Rate</p>
          <span>
            {rating.map((star, index) => (
              <p key={index} onClick={() => setStars(index + 1)}>
                {star}
              </p>
            ))}
          </span>
        </div>
        <div className={cls['review-details']}>
          <p>Details</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter details of your review"
          ></textarea>
        </div>
        <div className={cls['review-select']}>
          <p>Attachments</p>
          <label className={cls['input-file']}>
            <input type="file" name="file" />
            <span className={cls['input-file-btn']}>Select a file</span>
            <span className={cls['input-file-text']}>
              File is not selected yet
            </span>
          </label>
        </div>
      </div>
      <div className={cls['review-button']}>
        <button>{window.innerWidth <= 500 ? 'Go Back' : 'Cancel'}</button>
        <button onClick={handleReviewModal} className={cls['active']}>
          Post
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
