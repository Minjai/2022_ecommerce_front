import Description from "../../elements/UI/Description"
import ProductList from "../../lists/ProductList";
import cls from './recommend.module.scss'

const products = [
  {
    id: 1,
    title: 'product-title',
    price: 20,
    rating: 4,
    category: 'shoes',
  },
  {
    id: 2,
    title: 'product-title',
    price: 26,
    rating: 1,
    category: 'clothes',
  },
  {
    id: 3,
    title: 'product-title',
    price: 75,
    rating: 3,
    category: 'hats',
  },
  {
    id: 4,
    title: 'product-title product-title product-title product-title',
    price: 16,
    rating: 1,
    category: 'react',
  },
];

const Recommendations = () => {
  return (
    <div className={cls['recommend']}>
        <div className={cls['recommend__header']}>
        <Description>Recommendations</Description>
        <span>View More</span>
      </div>
      <ProductList products={products}/>
    </div>
  )
}

export default Recommendations