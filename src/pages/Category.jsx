import CategoryCarousel from '../components/elements/CategoryCarousel';
import CategoryButtons from '../components/elements/CategoryButtons';
import PaginatedList from '../components/lists/PaginatedList';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';

const data = [
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
];

const products = [
  {
    id: 1,
    title: 'product-title',
    price: 20,
    rating: 4,
    category: 'shoes',
  },
  {
    id: 2,
    title: 'product-title',
    price: 26,
    rating: 1,
    category: 'clothes',
  },
  {
    id: 3,
    title: 'product-title',
    price: 75,
    rating: 3,
    category: 'hats',
  },
  {
    id: 4,
    title: 'product-title product-title product-title product-title',
    price: 16,
    rating: 1,
    category: 'react',
  },
  {
    id: 5,
    title: 'product-title product-title product-title product-title',
    price: 375,
    rating: 1,
    category: 'react',
  },
  {
    id: 6,
    title: 'product-title product-title product-title product-title',
    price: 16,
    rating: 2,
    category: 'react',
  },
  {
    id: 7,
    title: 'product-title product-title product-title product-title',
    price: 687,
    rating: 3,
    category: 'react',
  },
  {
    id: 8,
    title: 'product-title product-title product-title product-title',
    price: 36,
    rating: 5,
    category: 'react',
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
  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Category</PageTitle>
        <CategoryCarousel data={data} />
        <CategoryButtons data={categories} />
        <PaginatedList data={products} />
      </div>
    </PageWrapper>
  );
};

export default Category;
