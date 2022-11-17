import { BsChevronDown } from 'react-icons/bs';
import cls from './costumerForm.module.scss';
import { useState } from 'react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const data = [
  {
    id: 1,
    title: 'Shoes',
  },
  {
    id: 2,
    title: 'Pants',
  },
  {
    id: 3,
    title: 'Shirts',
  },
];

const schema = yup.object().shape({
  username: yup.string().required(),
  details: yup.string().required(),
});

const CostumerForm = () => {
  const [categoryActive, setCategoryActive] = useState(false);
  const [productActive, setProductActive] = useState(false);
  const [category, setCategory] = useState('Optional');
  const [product, setProduct] = useState('Optional');

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const dropDownHandler = (setter, closer, str) => {
    setter(str);
    closer(false);
  };

  const costumerFormHandler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={cls['costumer']}>
      <div className={cls['costumer__title']}>
        <p>1 : 1 General Consultation</p>
      </div>
      <div className={cls['costumer__body']}>
        <p className={cls['costumer__description']}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{' '}
        </p>
        <form onSubmit={handleSubmit(costumerFormHandler)}>
          <label>
            <span>User Name</span>
            <input
              className={cls['costumer-input']}
              type="text"
              name="username"
              placeholder="User name"
              {...register('username')}
            />
          </label>
          <label>
            <span>Category</span>
            <div className={cls[categoryActive ? 'costumer-list_active' : '']}>
              <div onClick={() => setCategoryActive((prev) => !prev)}>
                <span>{category}</span>
                <BsChevronDown />
              </div>
              <ul>
                {data.map(({ id, title }) => (
                  <li
                    onClick={() =>
                      dropDownHandler(setCategory, setCategoryActive, title)
                    }
                    key={id}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </label>
          <label>
            <span>Product</span>
            <div className={cls[productActive ? 'costumer-list_active' : '']}>
              <div onClick={() => setProductActive((prev) => !prev)}>
                <span>{product}</span>
                <BsChevronDown />
              </div>
              <ul>
                {data.map(({ id, title }) => (
                  <li
                    onClick={() =>
                      dropDownHandler(setProduct, setProductActive, title)
                    }
                    key={id}
                  >
                    {title}
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
              {...register('details')}
            />
          </label>
          <label className={cls['costumer-label']}>
            <span>Attachments</span>{' '}
            <label className={cls['input-file']}>
              <input type="file" name="file" />
              <span className={cls['input-file-btn']}>Select a file</span>
              <span className={cls['input-file-text']}>
                File is not selected yet
              </span>
            </label>
          </label>
          <div className={cls['costumer__body__buttons']}>
            <button>Cancel</button>
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
