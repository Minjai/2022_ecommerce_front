const PageWrapper = ({ children, index = false }) => {
  return (
    <div className={`page-wrapper ${index ? 'home-wrapper' : ''}`}>{children}</div>
  );
};

export default PageWrapper;
