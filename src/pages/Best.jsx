import {
  removePickedCategory,
  setInitPickedCategories,
} from '../store/slices/category';
import {
  useGetBestProductsQuery,
} from '../store/query/productQuery';
import ProductListSkeleton from '../components/skeletons/ProductListSkeleton';
import CategoryCarousel from '../components/elements/CategoryCarousel';
import { useGetCategoriesQuery } from '../store/query/categoryQuery';
import CategoryButtons from '../components/elements/CategoryButtons';
import PaginatedList from '../components/lists/PaginatedList';
import EmptyText from '../components/elements/UI/EmptyText';
import { setCategoryProducts } from '../store/slices/product';
import MainReviews from '../components/partials/MainReviews';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Best = () => {
  const { pickedCategories, categoryId } = useSelector(
    (state) => state.category
  );

  const { data } = useGetCategoriesQuery();
  const bestCategory = data?.find((item) => item.title === 'Best Sellers');

  const { categoryProducts } = useSelector((state) => state.product);

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data: categoryProduct, isLoading } = useGetBestProductsQuery({
    id: categoryId ? categoryId : bestCategory?.id,
    page,
    offset,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitPickedCategories(bestCategory?.children));
  }, [bestCategory, dispatch]);

  useEffect(() => {
    dispatch(setCategoryProducts(categoryProduct?.results));
  }, [categoryProduct?.results, dispatch]);

  useEffect(() => {
    dispatch(setInitPickedCategories([]));
  }, [dispatch]);

  useEffect(() => {
    setPage(1);
    setOffset(0);
  }, [categoryId]);

  const options = {
    limit: 1,
    pageCount: categoryProduct?.count,
    page,
    offset,
    setPage,
    setOffset,
    pageStart,
    setPageStart,
    pageEnd,
    setPageEnd,
  };

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Best Sellers</PageTitle>
        {bestCategory?.children.length > 0 && (
          <CategoryCarousel
            hasFeatures={true}
            pickedCategories={pickedCategories}
            data={bestCategory?.children}
          />
        )}
        <CategoryButtons
          picker={removePickedCategory}
          data={pickedCategories}
        />
        {isLoading ? (
          <ProductListSkeleton />
        ) : categoryProducts?.length > 0 ? (
          <PaginatedList options={options} data={categoryProducts} />
        ) : (
          <EmptyText text={'best seller'} />
        )}
        {window.innerWidth < 700 && <MainReviews />}
      </div>
    </PageWrapper>
  );
};

export default Best;
