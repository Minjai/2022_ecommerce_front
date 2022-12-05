import { useGetProductsQuery } from '../../../store/query/productQuery';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import CategoryButtons from '../../elements/CategoryButtons';
import Description from '../../elements/UI/Description';
import EmptyText from '../../elements/UI/EmptyText';
import ProductList from '../../lists/ProductList';
import cls from './popularProducts.module.scss';

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
];

const PopularProducts = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <div className={cls['popular']}>
      <div className={cls['popular__header']}>
        <Description>Popular Products</Description>
        <span>View More</span>
      </div>
      <CategoryButtons data={categories} />
      {isLoading ? (
        <ProductListSkeleton />
      ) : data?.results?.length > 0 ? (
        <ProductList products={data?.results} />
      ) : (
        <EmptyText text={'product'} />
      )}
    </div>
  );
};

export default PopularProducts;
