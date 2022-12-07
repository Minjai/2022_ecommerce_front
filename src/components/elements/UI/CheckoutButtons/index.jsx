import cls from './checkoutButtons.module.scss';

const CheckoutButtons = ({ prev, next }) => {
  const handlerNavigate = (cb) => {
    window.scrollTo(window.scrollX, 0);
    cb();
  };

  return (
    <div className={cls['buttons']}>
      <button onClick={() => handlerNavigate(prev)}>Go Back</button>
      <button onClick={() => handlerNavigate(next)} className={cls['active']}>
        Next
      </button>
    </div>
  );
};

export default CheckoutButtons;
