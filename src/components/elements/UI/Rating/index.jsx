import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import cls from './rating.module.scss'

const Rating = ({ productRating }) => {
  const rating = [];

  for (let i = 0; i < 5; i++) {
    if (productRating > i) {
      rating.push(<AiFillStar key={i}/>);
    } else {
      rating.push(<AiOutlineStar key={i} />);
    }
  }
  return <div className={cls['rating']}>{rating}</div>;
};

export default Rating;
