import { useGetSearchProductsQuery } from '../../../store/query/productSearch';
import { useDebounce } from '../../../hooks/useDebounce';
import CloseButton from '../../elements/UI/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../store/slices/modal';
import { addCart } from '../../../store/slices/cart';
import EmptyText from '../../elements/UI/EmptyText';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';
import { BsCart } from 'react-icons/bs';
import cls from './search.module.scss';
import { useState } from 'react';

const MobileSearch = () => {
  const { carts } = useSelector((state) => state.cart);
  const [searchValue, setSearchValue] = useState('');
  const debounced = useDebounce(searchValue);

  const { data } = useGetSearchProductsQuery(
    { str: debounced },
    {
      skip: debounced.length < 3,
    }
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isInCart = (id) => {
    return carts?.find((item) => item.id === id);
  };

  const cartNavigate = (e) => {
    e.stopPropagation();
    navigate(`/${paths.CART}`);
    window.scrollTo(window.scrollX, 0);
    dispatch(setModal(false));
  };

  const addCartHandler = (e, item) => {
    e.stopPropagation();

    dispatch(
      addCart({
        ...item,
        pickedPackage: item?.prices[0],
        pickedMethod:
          item?.shipping_method.length > 0
            ? item?.shipping_method[0]
            : { id: 0, price: 0 },
      })
    );
    const cart = JSON.parse(localStorage.getItem('shop-cart'));
    localStorage.setItem(
      'shop-cart',
      JSON.stringify([
        ...cart,
        {
          ...item,
          pickedPackage: item?.prices[0],
          pickedMethod:
            item?.shipping_method.length > 0
              ? item?.shipping_method[0]
              : { id: 0, price: 0 },
        },
      ])
    );
  };

  const productNavigateHandler = (id) => {
    dispatch(setModal(false));
    navigate(`/${paths.SINGLE_PRODUCT}/${id}`);
  };

  return (
    <div className={cls['search']}>
      <CloseButton />
      <div className={cls['search__header']}>
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
        />
        <span>
          <TfiSearch />
        </span>
      </div>
      <div className={cls['search__body']}>
        {data?.results.length > 0 ? (
          data?.results.map((item) => (
            <div
              onClick={() => productNavigateHandler(item.id)}
              key={item.id}
              className={cls['search__body__child']}
            >
              <img
                src={item.images.find((item) => item.is_feature === true).image}
                alt="search-pic"
              />
              <div className={cls['content']}>
                <p>{item.product_name}</p>
                <span>100 ea</span>
                <b>${item.prices[0].selling_price}</b>
              </div>
              <div className={cls['buttons']}>
                <button
                  className={cls[isInCart(item.id) ? 'active' : 'none']}
                  onClick={(e) =>
                    isInCart(item.id)
                      ? cartNavigate(e)
                      : addCartHandler(e, item)
                  }
                >
                  <BsCart />
                </button>
              </div>
            </div>
          ))
        ) : (
          <EmptyText text={'search'} />
        )}
      </div>
    </div>
  );
};

export default MobileSearch;
