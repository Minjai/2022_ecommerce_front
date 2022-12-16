import { HiOutlineArrowRight } from 'react-icons/hi';
import cls from './packageList.module.scss';
import { useState } from 'react';

const PackageList = ({ list }) => {
  const productPrices = list.map(item => ({...item, is_picked: false}))
  const [data, setData] = useState(productPrices)

  const pickedPackageHandler = (id) => {
    setData((prev) => prev.map(item => item.id === id ? ({...item, is_picked: !item.is_picked}) : item))
  }

  return (
    <div className={cls['package']}>
      <div className={cls['package__header']}>
        <span>Package</span>
        <span>Price</span>
      </div>
      <div className={cls['package__body']}>
        {data.map(({ id, package: packages, regular_price, selling_price, is_picked }) => (
          <div onClick={() => pickedPackageHandler(id)} key={id} className={cls['package__body__child']}>
            <div>
              <span className={cls[is_picked ? 'active' : '']}></span>
              <p>{packages}</p>
            </div>
            <div>
              <p>{`$ ${regular_price}`}</p>
              <HiOutlineArrowRight />
              <b>{`$ ${selling_price}`}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
