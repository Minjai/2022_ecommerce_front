import { useGetCategoriesQuery } from '../../../store/query/categoryQuery';
import CategorySkeleton from '../../skeletons/CategorySkeleton';
import CategoryCarousel from '../../elements/CategoryCarousel';
import Description from '../../elements/UI/Description';
import './featuredCategory.scss';
import { paths } from '../../../constants/paths';

const data = [
  {
    id: 1,
    category: 'Shoes',
    amount: 10,
    image: '',
  },
  {
    id: 2,
    category: 'Shoes',
    amount: 10,
    image: '',
  },
  {
    id: 3,
    category: 'Shoes',
    amount: 10,
    image: '',
  },
  {
    id: 4,
    category: 'Shoes',
    amount: 32,
    image: '',
  },
  {
    id: 5,
    category: 'Shoes',
    amount: 47,
    image: '',
  },
  {
    id: 6,
    category: 'Shoes',
    amount: 56,
    image: '',
  },
  {
    id: 7,
    category: 'Shoes',
    amount: 16,
    image: '',
  },
  {
    id: 8,
    category: 'Shoes',
    amount: 26,
    image: '',
  },
  {
    id: 9,
    category: 'Shoes',
    amount: 25,
    image: '',
  },
];

const FeaturedCategory = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <div className="featured-category">
      <Description>Featured Categories</Description>
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <CategoryCarousel pickedCategories={[]} path={`/${paths.CATEGORY}`} data={data} />
      )}
    </div>
  );
};

export default FeaturedCategory;
