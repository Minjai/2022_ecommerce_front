import { useGetUserConsultationsQuery } from '../../store/query/consultationQuery';
import QuestionsList from '../../components/lists/QuestionsList';
import EmptyText from '../../components/elements/UI/EmptyText';
import Loader from '../../components/elements/UI/Loader';
import { dateFilter } from '../../utils/dateFilter';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UserQuestions = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [date, setDate] = useState('');

  const [select, setSelect] = useState('select range');
  const [isRange, setRange] = useState(false);

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data, isLoading } = useGetUserConsultationsQuery({
    token: localStorage.getItem('accessToken'),
    userId: userInfo.id,
    page,
    offset,
    date,
  });

  const filterOptions = {
    setRange,
    select,
    setSelect,
    isRange,
  };

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

  useEffect(() => {
    if (select === 'Past 3 months') {
      setDate(dateFilter(3));
    } else if (select === 'Past 6 months') {
      setDate(dateFilter(6));
    } else if (select === 'Past 12 months') {
      setDate(dateFilter(12));
    } else {
      setDate('');
    }
  }, [select]);

  return (
    <div className="user-width">
      {isLoading ? (
        <Loader />
      ) : data.results.length !== 0 ? (
        <QuestionsList
          filterOptions={filterOptions}
          options={paginationOptions}
          data={data}
        />
      ) : (
        <EmptyText text={'questions'} />
      )}
    </div>
  );
};

export default UserQuestions;
