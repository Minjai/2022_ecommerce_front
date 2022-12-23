import {
  removeRecommendedCategory,
  setCategoryData,
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
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import cls from './recommend.module.scss';
import { useEffect } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const Recommendations = () => {
  const { recommendedCategories, recommendedId } = useSelector(
    (state) => state.category
  );
  const { recommendedProducts } = useSelector((state) => state.product);

  const { data: categoryData } = useGetCategoriesQuery();
  const recommendedCategory = categoryData?.find(
    (item) => item.title === 'Recommended'
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CATEGORY}`);
    dispatch(setCategoryData(recommendedCategory))
  };

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
      <div className={cls['recommend__header']}>
        <Description>Recommendations</Description>
        <span onClick={navigateHandler}>View More <AiOutlineRight/></span>
      </div>
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
