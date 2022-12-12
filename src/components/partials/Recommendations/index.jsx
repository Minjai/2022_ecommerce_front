import { useGetProductsQuery } from '../../../store/query/productQuery';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import Description from '../../elements/UI/Description';
import ProductList from '../../lists/ProductList';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import cls from './recommend.module.scss';

const Recommendations = () => {
  const { data, isLoading } = useGetProductsQuery();

  const navigate = useNavigate()

  const navigateHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CATEGORY}`)
  }

  return (
    <div className={cls['recommend']}>
      <div className={cls['recommend__header']}>
        <Description>Recommendations</Description>
        <span onClick={navigateHandler}>View More</span>
      </div>
      {/* <CategoryButtons data={categories} /> */}
      {isLoading ? <ProductListSkeleton /> : <ProductList products={data?.results} />}
    </div>
  );
};

export default Recommendations;
