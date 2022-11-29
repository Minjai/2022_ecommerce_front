import CategoryButtons from '../../elements/CategoryButtons';
import Description from '../../elements/UI/Description';
import ProductList from '../../lists/ProductList';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import cls from './popularProducts.module.scss';

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
    price: 16,
    rating: 1,
    category: 'react',
  },
  {
    id: 6,
    title: 'product-title product-title product-title product-title',
    price: 16,
    rating: 1,
    category: 'react',
  },
];

const categories  = [
  {
    id: 1,
    category: 'Category 1',
    active: false
  },
  {
    id: 2,
    category: 'Category 2',
    active: false
  },
  {
    id: 3,
    category: 'Category 3',
    active: true
  },
  {
    id: 4,
    category: 'Category 4',
    active: true
  }
]

const PopularProducts = () => {
  return (
    <div className={cls['popular']}>
      <div className={cls['popular__header']}>
        <Description>Popular Products</Description>
        <span>View More</span>
      </div>
      <CategoryButtons data={categories}/>
      <ProductList products={products} />
      {/* <ProductListSkeleton/> */}
    </div>
  );
};

export default PopularProducts;
