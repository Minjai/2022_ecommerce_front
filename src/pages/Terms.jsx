import PageWrapper from '../components/layouts/PageWrapper';
import PageTitle from '../components/elements/UI/PageTitle';
import TermsInfo from '../components/partials/TermsInfo';
import React from 'react';

const Terms = () => {
  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Terms & Policy</PageTitle>
        <TermsInfo />
      </div>
    </PageWrapper>
  );
};

export default Terms;
