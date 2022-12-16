import {
  removePickedCategory,
  setInitPickedCategories,
} from '../store/slices/category';
import { useGetCategoryProductsQuery } from '../store/query/productQuery';
import ProductListSkeleton from '../components/skeletons/ProductListSkeleton';
import CategoryCarousel from '../components/elements/CategoryCarousel';
import CategoryButtons from '../components/elements/CategoryButtons';
import { setCategoryProducts } from '../store/slices/product';
import PaginatedList from '../components/lists/PaginatedList';
import MainReviews from '../components/partials/MainReviews';
import EmptyText from '../components/elements/UI/EmptyText';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Category = () => {
  const { categoryData, pickedCategories, categoryId } = useSelector(
    (state) => state.category
  );

  const { categoryProducts } = useSelector((state) => state.product);

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data: categoryProduct, isLoading } = useGetCategoryProductsQuery({
    id: categoryId ? categoryId : categoryData?.id,
    page,
    offset,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitPickedCategories(categoryData?.children));
  }, [categoryData, dispatch]);

  useEffect(() => {
    dispatch(setCategoryProducts(categoryProduct?.results));
  }, [categoryProduct?.results, dispatch]);

  useEffect(() => {
    dispatch(setInitPickedCategories([]));
  }, [dispatch]);

  useEffect(() => {
    setPage(1)
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
        <PageTitle>
          {categoryData === null ? 'Category' : categoryData.title}
        </PageTitle>
        {categoryData?.children.length > 0 && (
          <CategoryCarousel
            hasFeatures={true}
            pickedCategories={pickedCategories}
            data={categoryData?.children}
          />
        )}
        <CategoryButtons
          picker={removePickedCategory}
          data={pickedCategories}
        />
        {isLoading ? (
          <ProductListSkeleton />
        ) : categoryProducts?.length ? (
          <PaginatedList options={options} data={categoryProducts} />
        ) : (
          <EmptyText text={'category'} />
        )}
        {window.innerWidth < 700 && <MainReviews />}
      </div>
    </PageWrapper>
  );
};

export default Category;
