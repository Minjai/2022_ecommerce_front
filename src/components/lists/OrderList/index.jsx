import cls from './orderList.module.scss';
import React from 'react';

const OrderList = ({ data }) => {
  return (
    <div className={cls['order']}>
      <div className={cls['order__child']}>
        <div className={cls['order__child__header']}>
          <div>
            <span>
              <p>Order Date</p>
              <p>01/02/2020</p>
            </span>
            <span>
              <p>Total</p>
              <p>$14.50</p>
            </span>
          </div>
          <span>
            <p>Order number</p>
            <p>234534534</p>
          </span>
        </div>
        <div className={cls['order__child__body']}>
          <h4>Awaiting Payment</h4>
          <div className={cls['order__child__body__content']}>
            <img
              src={
                'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752'
              }
              alt="order-product-pic"
            />
            <div>
              <p>Item name goes here</p>
              <span>100 ea</span>
              <p>$14.40</p>
              <button>Write a review</button>
            </div>
          </div>
          <div className={cls['order__child__body__buttons']}>
            <button>Cancel Order</button>
            <button className={cls['active']}>Make a Payment</button>
            <p>*Please upload either bank receipt or screenshot</p>
          </div>
        </div>
      </div>
      <div className={cls['order__child']}>
        <div className={cls['order__child__header']}>
          <div>
            <span>
              <p>Order Date</p>
              <p>01/02/2020</p>
            </span>
            <span>
              <p>Total</p>
              <p>$14.50</p>
            </span>
          </div>
          <span>
            <p>Order number</p>
            <p>234534534</p>
          </span>
        </div>
        <div className={cls['order__child__body']}>
          <h4 className={cls['active']}>Awaiting Payment</h4>
          <div className={cls['order__child__body__content']}>
            <img
              src={
                'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752'
              }
              alt="order-product-pic"
            />
            <div>
              <p>Item name goes here</p>
              <span>100 ea</span>
              <p>$14.40</p>
            </div>
          </div>
          <div className={cls['order__child__body__buttons']}>
            <button>Cancel Order</button>
            <button className={cls['active']}>Make a Payment</button>
          </div>
        </div>
      </div>
      <div className={cls['order__child']}>
        <div className={cls['order__child__header']}>
          <div>
            <span>
              <p>Order Date</p>
              <p>01/02/2020</p>
            </span>
            <span>
              <p>Total</p>
              <p>$14.50</p>
            </span>
          </div>
          <span>
            <p>Order number</p>
            <p>234534534</p>
          </span>
        </div>
        <div className={cls['order__child__body']}>
          <h4>Delivered</h4>
          <div className={cls['order__child__body__content']}>
            <img
              src={
                'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752'
              }
              alt="order-product-pic"
            />
            <div>
              <p>Item name goes here</p>
              <span>100 ea</span>
              <p>$14.40</p>
            </div>
          </div>
          <div className={cls['order__child__body__content']}>
            <img
              src={
                'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752'
              }
              alt="order-product-pic"
            />
            <div>
              <p>Item name goes here</p>
              <span>100 ea</span>
              <p>$14.40</p>
            </div>
          </div>
          <div className={cls['order__child__body__buttons']}>
            <button>Cancel Order</button>
            <button id={cls['invalid']} className={cls['active']}>
              Make a Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
