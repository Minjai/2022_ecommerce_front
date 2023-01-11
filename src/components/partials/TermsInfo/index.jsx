import { useGetTermsQuery } from '../../../store/query/termsQuery';
import Loader from '../../elements/UI/Loader';
import cls from './terms.module.scss';

const TermsInfo = () => {
  const { data, isLoading } = useGetTermsQuery();

  return (
    <div className={cls['terms']}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h4>{data?.results[0]?.title}</h4>
          <p>{data?.results[0]?.description}</p>
        </>
      )}
    </div>
  );
};

export default TermsInfo;
