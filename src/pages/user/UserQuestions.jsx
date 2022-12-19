import { useGetUserConsultationsQuery } from '../../store/query/consultationQuery';
import QuestionsList from '../../components/lists/QuestionsList';
import EmptyText from '../../components/elements/UI/EmptyText';
import Loader from '../../components/elements/UI/Loader';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const UserQuestions = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data, isLoading } = useGetUserConsultationsQuery({
    token: localStorage.getItem('accessToken'),
    userId: userInfo.id,
    page,
    offset
  });

  const paginationOptions = {
    limit: 4,
    pageCount: data?.count,
    page,
    offset,
    setPage,
    setOffset,
    pageStart,
    setPageStart,
    pageEnd,
    setPageEnd,
  };
  
  return (
    <div className="user-width">
      {isLoading ? (
        <Loader />
      ) : data.results.length !== 0 ? (
        <QuestionsList options={paginationOptions} data={data} />
      ) : (
        <EmptyText text={'questions'} />
      )}
    </div>
  );
};

export default UserQuestions;
