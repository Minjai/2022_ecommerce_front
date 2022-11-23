import { setContent, setModal } from '../../../store/slices/modal';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { modalPaths } from '../../../constants/paths';
import { useState, useEffect } from 'react';
import cls from './reviewForm.module.scss';
import { useDispatch } from 'react-redux';

const ReviewForm = () => {
  const [rating, setRating] = useState([]);
  const [stars, setStars] = useState(3);

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

  const dispatch = useDispatch()

  const handleReviewModal = () => {
    dispatch(setModal(true))
    dispatch(setContent(modalPaths.REVIEW))
  }

  return (
    <div className={cls['review']}>
      <h3 className={cls['review-header']}>Write Review</h3>
      <div className={cls['review-body']}>
        <div className={cls['review-body__child']}>
          <h4>Item Name</h4>
          <div>
            <img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
              alt="review-pic"
            />
            <span>
              <p>Lorem ipsum dolor sit amet.</p>
              <b>100 ea</b>
              <h5>$ 15.34</h5>
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
          <textarea placeholder="Enter details of your review"></textarea>
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
        <button>Cancel</button>
        <button onClick={(handleReviewModal)} className={cls['active']}>Post</button>
      </div>
    </div>
  );
};

export default ReviewForm;
