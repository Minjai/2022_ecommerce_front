import CategoryCarousel from '../components/elements/CategoryCarousel';
import { useGetCategoriesQuery } from '../store/query/categoryQuery';
import CategoryButtons from '../components/elements/CategoryButtons';
import { useGetProductsQuery } from '../store/query/productQuery';
import PaginatedList from '../components/lists/PaginatedList';
import MainReviews from '../components/partials/MainReviews';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import { useState } from 'react';

const dataCar = [
  {
    id: 1,
    category: 'Shoes',
    amount: 10,
    image: '',
  },
  {
    id: 2,
    category: 'Shoes',
    amount: 10,
    image: '',
  },
  {
    id: 3,
    category: 'Shoes',
    amount: 10,
    image: '',
  },
  {
    id: 4,
    category: 'Shoes',
    amount: 32,
    image: '',
  },
  {
    id: 5,
    category: 'Shoes',
    amount: 47,
    image: '',
  },
  {
    id: 6,
    category: 'Shoes',
    amount: 56,
    image: '',
  },
  {
    id: 7,
    category: 'Shoes',
    amount: 16,
    image: '',
  },
  {
    id: 8,
    category: 'Shoes',
    amount: 26,
    image: '',
  },
  {
    id: 9,
    category: 'Shoes',
    amount: 17,
    image: '',
  },
];

const categories = [
  {
    id: 1,
    category: 'Category 1',
    active: false,
  },
  {
    id: 2,
    category: 'Category 2',
    active: false,
  },
  {
    id: 3,
    category: 'Category 3',
    active: true,
  },
  {
    id: 4,
    category: 'Category 4',
    active: true,
  },
  {
    id: 5,
    category: 'Category 5',
    active: false,
  },
  {
    id: 6,
    category: 'Category 6',
    active: false,
  },
  {
    id: 7,
    category: 'Category 7',
    active: false,
  },
  {
    id: 8,
    category: 'Category 8',
    active: false,
  },
  {
    id: 9,
    category: 'Category 9',
    active: false,
  },
];

const Category = () => {
  const { data } = useGetCategoriesQuery();
  const { data: productData } = useGetProductsQuery();

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

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

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Category</PageTitle>
        <CategoryCarousel data={dataCar} />
        <CategoryButtons data={categories} />
        <PaginatedList options={options} data={productData?.results} />
        {window.innerWidth < 700 && <MainReviews />}
      </div>
    </PageWrapper>
  );
};

export default Category;
