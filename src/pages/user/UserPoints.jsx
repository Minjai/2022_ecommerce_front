import { useGetUserPointsQuery } from '../../store/query/pointsQuery';
import EmptyText from '../../components/elements/UI/EmptyText';
import PointsList from '../../components/lists/PointsList';
import Loader from '../../components/elements/UI/Loader';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const UserPoints = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data: pointsData, isLoading } = useGetUserPointsQuery({
    userId: userInfo.id,
    token: localStorage.getItem('accessToken'),
    page,
    offset,
  });

  const paginationOptions = {
    limit: 5,
    pageCount: pointsData?.count,
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
      ) : pointsData?.results.length > 0 ? (
        <PointsList
          points={userInfo?.point > 0 ? userInfo?.point : 0}
          options={paginationOptions}
          data={pointsData}
        />
      ) : (
        <EmptyText text={'point'} />
      )}
    </div>
  );
};

export default UserPoints;
