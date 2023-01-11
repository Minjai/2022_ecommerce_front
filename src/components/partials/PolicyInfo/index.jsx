import { useGetPolicyQuery } from '../../../store/query/policyQuery';
import Loader from '../../elements/UI/Loader';
import cls from './policy.module.scss';

const PolicyInfo = () => {
  const { data, isLoading } = useGetPolicyQuery();

  return (
    <div className={cls['policy']}>
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

export default PolicyInfo;
