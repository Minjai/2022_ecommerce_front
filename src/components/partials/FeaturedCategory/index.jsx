import {
  useGetCategoriesQuery,
  useGetSingleCategoryQuery,
} from '../../../store/query/categoryQuery';
import CategorySkeleton from '../../skeletons/CategorySkeleton';
import CategoryCarousel from '../../elements/CategoryCarousel';
import Description from '../../elements/UI/Description';
import EmptyText from '../../elements/UI/EmptyText';
import { paths } from '../../../constants/paths';
import './featuredCategory.scss';

const FeaturedCategory = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const featuredCategory = data?.find((item) => item.title === 'Featured');

  const { data: featuredData } = useGetSingleCategoryQuery(
    { id: featuredCategory?.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="featured-category">
      <Description>Featured Categories</Description>
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        featuredData ? (
          <CategoryCarousel
            pickedCategories={[]}
            path={`/${paths.CATEGORY}`}
            data={featuredData}
          />
        ) : <EmptyText text={'featured'}/>
      )}
    </div>
  );
};

export default FeaturedCategory;
