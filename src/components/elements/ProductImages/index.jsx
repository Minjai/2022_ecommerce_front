import cls from './productImages.module.scss';
import { useEffect , useState} from 'react';

const ProductImages = ({ images }) => {
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setCurrentImage(() => images[0].image);
  }, [images]);

  return (
    <div className={cls['product-images']}>
      <img
        className={cls['product-images__current']}
        src={currentImage}
        alt="current-pic"
      />
      <div>
        {images.map(({ id, image }) => (
          <img
            className={cls[image === currentImage ? 'active' : '']}
            onClick={() => setCurrentImage(image)}
            key={id}
            src={image}
            alt="product-pic"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
