import { useGetUserConsultationsQuery } from '../../store/query/consultationQuery';
import QuestionsList from '../../components/lists/QuestionsList';
import EmptyText from '../../components/elements/UI/EmptyText';
import Loader from '../../components/elements/UI/Loader';
import { useSelector } from 'react-redux';

const UserQuestions = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { data, isLoading } = useGetUserConsultationsQuery({
    token: localStorage.getItem('accessToken'),
    userId: userInfo.id,
  });
  
  return (
    <div className="user-width">
      {isLoading ? (
        <Loader />
      ) : data.results.length !== 0 ? (
        <QuestionsList data={data} />
      ) : (
        <EmptyText text={'questions'} />
      )}
    </div>
  );
};

export default UserQuestions;
