import CategoryCarousel from '../components/elements/CategoryCarousel';
import CategoryButtons from '../components/elements/CategoryButtons';
import { setInitPickedCategories } from '../store/slices/category';
import { useGetProductsQuery } from '../store/query/productQuery';
import PaginatedList from '../components/lists/PaginatedList';
import MainReviews from '../components/partials/MainReviews';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Best = () => {
  const { data: productData } = useGetProductsQuery();

  const { categoryData, pickedCategories } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setInitPickedCategories([]));
  }, [dispatch]);

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Best Sellers</PageTitle>
        {categoryData?.children.length > 0 && (
          <CategoryCarousel
            hasFeatures={true}
            pickedCategories={pickedCategories}
            data={categoryData?.children}
          />
        )}
        <CategoryButtons data={pickedCategories} />
        <PaginatedList count={productData?.count} data={productData?.results} />
        {window.innerWidth < 700 && <MainReviews />}
      </div>
    </PageWrapper>
  );
};

export default Best;
