import { useGetProductsQuery } from '../../../store/query/productQuery';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import CategoryButtons from '../../elements/CategoryButtons';
import Description from '../../elements/UI/Description';
import EmptyText from '../../elements/UI/EmptyText';
import ProductList from '../../lists/ProductList';
import cls from './popularProducts.module.scss';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../constants/paths';

const categories = [
  {
    id: 1,
    title: 'Category 1',
    active: false,
  },
  {
    id: 2,
    title: 'Category 2',
    active: false,
  },
  {
    id: 3,
    title: 'Category 3',
    active: true,
  },
  {
    id: 4,
    title: 'Category 4',
    active: true,
  },
];

const PopularProducts = () => {
  const { data, isLoading } = useGetProductsQuery();

  const navigate = useNavigate()

  const navigateHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CATEGORY}`)
  }

  return (
    <div className={cls['popular']}>
      <div className={cls['popular__header']}>
        <Description>Popular Products</Description>
        <span onClick={navigateHandler}>View More</span>
      </div>
      {/* <CategoryButtons data={categories} /> */}
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
