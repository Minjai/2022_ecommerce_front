import { mathCurrency } from '../../../utils/mathCurrency';
import { BsArrowRightShort } from 'react-icons/bs';
import cls from './packageList.module.scss';
import { useSelector } from 'react-redux';

const PackageList = ({ list, options }) => {
  const pickedPackageHandler = (item) => {
    setPricePackage(item);
  };

  const { pricePackage, setPricePackage } = options;

  const { activeCurrency } = useSelector((state) => state.currency);

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
                  {activeCurrency?.currency_value}{' '}
                  {mathCurrency(
                    item['regular_price'],
                    activeCurrency?.currency_price
                  )}
                </span>
              </p>
              <BsArrowRightShort />
              <b>
                {activeCurrency?.currency_value}{' '}
                {mathCurrency(
                  item['selling_price'],
                  activeCurrency?.currency_price
                )}
              </b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
