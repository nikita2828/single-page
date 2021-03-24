import React, { useContext } from 'react';
import { WrapperStyled, FormStyled, InputStyled, ErrorStyled } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postCategory, putCategory } from '../../store/categories/action';
import routes from '../../constants/routes';
import Context from '../../context';
import Loader from '../Animation';

export default function CreateNewCategory({ history }) {
  const { loader } = useSelector((state) => ({
    loader: state.category.loader,
  }));

  const { dataForChangeRequest } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (dataForChangeRequest) {
      const changeCategory = (id, obj) => dispatch(putCategory(id, obj));
      await changeCategory(dataForChangeRequest.id, data);
      await history.push(routes.categories);
    } else {
      const createCategory = (obj) => dispatch(postCategory(obj));
      await createCategory(data);
      await history.push(routes.categories);
    }
  };

  return (
    <WrapperStyled>
      {loader && <Loader />}
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          type='text'
          name='title'
          ref={register({ required: true })}
          placeholder='enter title'
          defaultValue={dataForChangeRequest.title}
        />
        {errors.title && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled type='submit' />
      </FormStyled>
    </WrapperStyled>
  );
}
