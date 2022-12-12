import CategoryCarousel from '../components/elements/CategoryCarousel';
import CategoryButtons from '../components/elements/CategoryButtons';
import { setInitPickedCategories } from '../store/slices/category';
import { useGetProductsQuery } from '../store/query/productQuery';
import PaginatedList from '../components/lists/PaginatedList';
import MainReviews from '../components/partials/MainReviews';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Category = () => {
  const { categoryData, pickedCategories } = useSelector(
    (state) => state.category
  );
  const { data: productData } = useGetProductsQuery();

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const dispatch = useDispatch();

  const options = {
    limit: 6,
    pageCount: 26,
    page,
    setPage,
    pageStart,
    setPageStart,
    pageEnd,
    setPageEnd,
  };

  useEffect(() => {
    dispatch(setInitPickedCategories([]));
  }, []);

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
        <CategoryButtons data={pickedCategories} />
        <PaginatedList options={options} data={productData?.results} />
        {window.innerWidth < 700 && <MainReviews />}
      </div>
    </PageWrapper>
  );
};

export default Category;
