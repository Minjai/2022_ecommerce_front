import CategoryCarousel from '../components/elements/CategoryCarousel';
import CategoryButtons from '../components/elements/CategoryButtons';
import { useGetProductsQuery } from '../store/query/productQuery';
import PaginatedList from '../components/lists/PaginatedList';
import MainReviews from '../components/partials/MainReviews';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';

const data = [
  {
    id: 1,
    category: 'All',
    amount: 100,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 2,
    category: 'Shoes',
    amount: 10,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 3,
    category: 'Shoes',
    amount: 10,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 4,
    category: 'Shoes',
    amount: 32,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 5,
    category: 'Shoes',
    amount: 47,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 6,
    category: 'Shoes',
    amount: 56,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 7,
    category: 'Shoes',
    amount: 16,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 8,
    category: 'Shoes',
    amount: 26,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
  },
  {
    id: 9,
    category: 'Shoes',
    amount: 17,
    image: 'https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png',
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

const Best = () => {
  const { data: productData } = useGetProductsQuery();

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Best Sellers</PageTitle>
        <CategoryCarousel data={data} />
        <CategoryButtons data={categories} />
        <PaginatedList count={productData?.count} data={productData?.results} />
        {window.innerWidth < 700 && <MainReviews />}
      </div>
    </PageWrapper>
  );
};

export default Best;
