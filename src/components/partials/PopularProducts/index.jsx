import {
  useGetSingleCategoryProductsQuery,
} from '../../../store/query/productQuery';
import { useGetCategoriesQuery } from '../../../store/query/categoryQuery';
import {
  removePopularCategory,
  setCategoryData,
  setInitPopularCategories,
} from '../../../store/slices/category';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import { setPopularProducts } from '../../../store/slices/product';
import CategoryButtons from '../../elements/CategoryButtons';
import { useDispatch, useSelector } from 'react-redux';
import Description from '../../elements/UI/Description';
import EmptyText from '../../elements/UI/EmptyText';
import ProductList from '../../lists/ProductList';
import { paths } from '../../../constants/paths';
import cls from './popularProducts.module.scss';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import { useEffect } from 'react';

const PopularProducts = () => {
  const { popularCategories, popularId } = useSelector(
    (state) => state.category
  );
  const { popularProducts } = useSelector((state) => state.product);

  const { data: categoryData } = useGetCategoriesQuery();
  const popularCategory = categoryData?.find(
    (item) => item.title === 'Popular'
  );

  const { data: popularProduct, isLoading } = useGetSingleCategoryProductsQuery({
    id: popularId ? popularId : popularCategory?.id
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CATEGORY}`);
    dispatch(setCategoryData(popularCategory))
  };

  useEffect(() => {
    dispatch(setInitPopularCategories(popularCategory?.children));
  }, [popularCategory, dispatch]);

  useEffect(() => {
    dispatch(setPopularProducts(popularProduct?.results));
  }, [popularProduct?.results, dispatch]);

  return (
    <div className={cls['popular']}>
      <div className={cls['popular__header']}>
        <Description>Popular Products</Description>
        <span onClick={navigateHandler}>View More <AiOutlineRight/></span>
      </div>
      <CategoryButtons
        picker={removePopularCategory}
        data={popularCategories}
      />
      {isLoading ? (
        <ProductListSkeleton />
      ) : popularProducts?.length > 0 ? (
        <ProductList products={popularProducts} />
      ) : (
        <EmptyText text={'product'} />
      )}
    </div>
  );
};

export default PopularProducts;
