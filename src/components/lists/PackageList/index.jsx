import { HiOutlineArrowRight } from 'react-icons/hi';
import cls from './packageList.module.scss';

const PackageList = ({ list, options }) => {
  const pickedPackageHandler = (item) => {
    setPricePackage(item);
  };

  const { pricePackage, setPricePackage } = options;

  return (
    <div className={cls['package']}>
      <div className={cls['package__header']}>
        <span>Package</span>
        <span>Price</span>
      </div>
      <div className={cls['package__body']}>
        {list?.map((item) => (
          <div
            onClick={() => pickedPackageHandler(item)}
            key={item['id']}
            className={cls['package__body__child']}
          >
            <div>
              <span
                className={cls[pricePackage?.id === item['id'] ? 'active' : '']}
              ></span>
              <p>{item['package']}</p>
            </div>
            <div>
              <p>
                <span className={cls['cross']}>
                  {item['currency']?.currency_value} {item['regular_price']}
                </span>
              </p>
              <HiOutlineArrowRight />
              <b>
                {item['currency']?.currency_value} {item['selling_price']}
              </b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
