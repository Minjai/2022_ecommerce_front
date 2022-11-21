import cls from './checkoutButtons.module.scss';

const CheckoutButtons = ({ prev, next }) => {
  return (
    <div className={cls['buttons']}>
      <button onClick={prev}>Go Back</button>
      <button onClick={next} className={cls['active']}>
        Next
      </button>
    </div>
  );
};

export default CheckoutButtons;
