import {
  removeRecommendedCategory,
  setInitRecommendedCategories,
} from '../../../store/slices/category';
import { useGetSingleCategoryProductsQuery } from '../../../store/query/productQuery';
import { useGetCategoriesQuery } from '../../../store/query/categoryQuery';
import { setRecommendedProducts } from '../../../store/slices/product';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import CategoryButtons from '../../elements/CategoryButtons';
import Description from '../../elements/UI/Description';
import { useDispatch, useSelector } from 'react-redux';
import EmptyText from '../../elements/UI/EmptyText';
import ProductList from '../../lists/ProductList';
import cls from './recommend.module.scss';
import { useEffect } from 'react';

const Recommendations = () => {
  const { recommendedCategories, recommendedId } = useSelector(
    (state) => state.category
  );
  const { recommendedProducts } = useSelector((state) => state.product);

  const { data: categoryData } = useGetCategoriesQuery();
  const recommendedCategory = categoryData?.find(
    (item) => item.title === 'Recommended'
  );

  const dispatch = useDispatch();

  const { data: recommendedProduct, isLoading } =
    useGetSingleCategoryProductsQuery({
      id: recommendedId ? recommendedId : recommendedCategory?.id,
    });

  useEffect(() => {
    dispatch(setInitRecommendedCategories(recommendedCategory?.children));
  }, [recommendedCategory, dispatch]);

  useEffect(() => {
    dispatch(setRecommendedProducts(recommendedProduct?.results));
  }, [recommendedProduct?.results, dispatch]);

  return (
    <div className={cls['recommend']}>
      <Description>Recommendations</Description>
      <CategoryButtons
        picker={removeRecommendedCategory}
        data={recommendedCategories}
      />
      {isLoading ? (
        <ProductListSkeleton />
      ) : recommendedProducts?.length > 0 ? (
        <ProductList products={recommendedProducts} />
      ) : (
        <EmptyText text={'product'} />
      )}
    </div>
  );
};

export default Recommendations;
