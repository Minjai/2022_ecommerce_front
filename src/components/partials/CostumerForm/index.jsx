import { BsChevronDown } from 'react-icons/bs';
import cls from './costumerForm.module.scss';
import { useState } from 'react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useGetAllCategoriesQuery,
  useGetSingleCategoryProductsQuery,
} from '../../../store/query/productQuery';
import { axiosInstance } from '../../../constants/axios';
import { paths } from '../../../constants/paths';
import { setAlert, setAlertContent } from '../../../store/slices/alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  detail: yup.string().required(),
});

const CostumerForm = () => {
  const [categoryActive, setCategoryActive] = useState(false);
  const [productActive, setProductActive] = useState(false);
  const [category, setCategory] = useState({ title: 'None' });
  const [product, setProduct] = useState({ product_name: 'None' });
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  const { data } = useGetAllCategoriesQuery();

  const { register, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const dispatch = useDispatch();

  const { data: productData } = useGetSingleCategoryProductsQuery({
    id: category.id,
  });

  const dropDownHandler = (setter, closer, str) => {
    setter(str);
    closer(false);
  };

  const costumerFormHandler = async (data) => {
    try {
      const response = await axiosInstance.post(
        'consultations/consultations/',
        {
          ...data,
          username: userInfo.username,
          category: category.id,
          product: product.id,
          parent: '',
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      const formData = new FormData();

      formData.append('attachments', file);
      formData.append('consultation', response.data.id);

      const fileResponse = await axiosInstance
        .post('consultations/consultations_files/', formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-type': 'multipart/form-data',
          },
        })

      reset();
      setCategory({ title: 'Optional' });
      setProduct({ product_name: 'Optional' });
      dispatch(setAlert(true));
      dispatch(setAlertContent('Your question has been added !'));
      navigate(`/${paths.CUSTOMER_HELP}/${paths.CONSULTATION}`);
      window.scrollTo(window.scrollX, 0);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={cls['costumer']}>
      <div className={cls['costumer__title']}>
        <p>1 : 1 General Consultation</p>
        <br />
      </div>
      <div className={cls['costumer__body']}>
        <p className={cls['costumer__description']}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{' '}
        </p>
        <form onSubmit={handleSubmit(costumerFormHandler)}>
          <label className={cls['clickable']}>
            <span>{window.innerWidth > 500 ? 'User Name' : 'User ID'}</span>
            <input
              className={cls['costumer-input']}
              type="text"
              name="username"
              placeholder={userInfo.username}
            />
          </label>
          <label>
            <span>Category</span>
            <div
              id={cls['z-index']}
              className={cls[categoryActive ? 'costumer-list_active' : '']}
            >
              <div onClick={() => setCategoryActive((prev) => !prev)}>
                <span>{category.title}</span>
                <BsChevronDown />
              </div>
              <ul>
                {data?.map((item) => (
                  <li
                    onClick={() =>
                      dropDownHandler(setCategory, setCategoryActive, item)
                    }
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </label>
          <label>
            <span>Product</span>
            <div className={cls[productActive ? 'costumer-list_active' : '']}>
              <div onClick={() => setProductActive((prev) => !prev)}>
                <span>{product.product_name}</span>
                <BsChevronDown />
              </div>
              <ul>
                {productData?.results.map((item) => (
                  <li
                    onClick={() =>
                      dropDownHandler(setProduct, setProductActive, item)
                    }
                    key={item.id}
                  >
                    {item.product_name}
                  </li>
                ))}
              </ul>
            </div>
          </label>
          <label>
            <span>Details</span>
            <textarea
              placeholder="Enter details of your question"
              name="details"
              {...register('detail')}
            />
          </label>
          <label className={cls['costumer-label']}>
            <span>Attachments</span>{' '}
            <label className={cls['input-file']}>
              <input
                accept="image/png, image/jpeg"
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                name="file"
              />
              <span className={cls['input-file-btn']}>Select a file</span>
              <span className={cls['input-file-text']}>
                {file ? file.name : 'File is not selected yet'}
              </span>
            </label>
          </label>
          <div className={cls['costumer__body__buttons']}>
            <button onClick={() => navigate(-1)}>
              {window.innerWidth > 500 ? 'Cancel' : 'Go Back'}
            </button>
            <button id={cls['active']} type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CostumerForm;
