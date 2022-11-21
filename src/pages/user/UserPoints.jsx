import OrderHistory from '../../components/partials/OrderHistory';
import PointsList from '../../components/lists/PointsList';

const UserPoints = () => {
  return (
    <div className='user-width'>
      <PointsList />
      <OrderHistory/>
    </div>
  );
};

export default UserPoints;
