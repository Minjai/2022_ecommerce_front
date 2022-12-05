import { useGetProductsQuery } from '../../../store/query/productQuery';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import Description from '../../elements/UI/Description';
import ProductList from '../../lists/ProductList';
import cls from './recommend.module.scss';

const Recommendations = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <div className={cls['recommend']}>
      <div className={cls['recommend__header']}>
        <Description>Recommendations</Description>
        <span>View More</span>
      </div>
      {isLoading ? <ProductListSkeleton /> : <ProductList products={data?.results} />}
    </div>
  );
};

export default Recommendations;
