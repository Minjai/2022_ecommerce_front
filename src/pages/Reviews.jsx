import ReviewsCarousel from '../components/elements/ReviewsCarousel';
import Description from '../components/elements/UI/Description';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import Pagination from '../components/elements/Pagination';
import ReviewsList from '../components/lists/ReviewsList';
import ContactUs from '../components/partials/ContactUs';

const data = [
  {
    id: 1,
    image:
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'Hello world',
    date: '34/15/2020',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 5,
    user: 'Bayel',
  },
  {
    id: 2,
    image:
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'Hello world',
    date: '34/15/2020',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 1,
    user: 'Timur',
  },
  {
    id: 3,
    image:
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'React',
    date: '34/15/2020',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 3,
    user: 'Almaz',
  },
  {
    id: 4,
    image:
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
    title: 'Next',
    date: '34/15/2534',
    content:
      'lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar lorem inpsum dolar',
    category: 'Shoes',
    rating: 2,
    user: 'Bayel',
  },
];

const Reviews = () => {
  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Review</PageTitle>
        <br />
        <Description>Reviews Highlights</Description>
        <ReviewsCarousel />
        <Description>Reviews Library</Description>
        <ReviewsList reviews={data} />
        <Pagination />
        <ContactUs />
      </div>
    </PageWrapper>
  );
};

export default Reviews;
