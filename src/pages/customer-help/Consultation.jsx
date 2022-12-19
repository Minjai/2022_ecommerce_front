import { useGetConsultationsQuery } from '../../store/query/consultationQuery';
import ConsultationList from '../../components/lists/ConsultationList';
import EmptyText from '../../components/elements/UI/EmptyText';
import ContactUs from '../../components/partials/ContactUs';
import Loader from '../../components/elements/UI/Loader';
import { useState } from 'react';

const Consultation = () => {
  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data, isLoading } = useGetConsultationsQuery(
    {
      token: localStorage.getItem('accessToken'),
      page,
      offset,
    },
    { refetchOnMountOrArgChange: true }
  );

  const paginationOptions = {
    limit: 5,
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
    <>
      {isLoading ? (
        <Loader />
      ) : data?.results ? (
        <ConsultationList options={paginationOptions} data={data.results} />
      ) : (
        <EmptyText text={'general consultation'} />
      )}
      <ContactUs />
    </>
  );
};

export default Consultation;
