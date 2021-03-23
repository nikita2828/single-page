import React, { useContext } from 'react';
import { WrapperStyled, FormStyled, InputStyled, ErrorStyled } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe } from '../../store/recipes/action';
import routes from '../../constants/routes';
import Context from '../../context';
import Loader from '../Animation';

export default function CreateNewRecipe({ history }) {
  const { loader } = useSelector((state) => ({
    loader: state.recipe.loader,
  }));

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const arrOfNumberId = data.categoryIds.split(',').map((str) => Number(str));
    data.categoryIds = arrOfNumberId;
    console.log(typeof data.video);
    const createRecipe = (obj) => dispatch(postRecipe(obj));
    await createRecipe(data);
    await history.push(routes.recipes);
  };
  const { data } = useContext(Context);
  return (
    <WrapperStyled>
      {loader && <Loader />}
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          type='text'
          name='title'
          ref={register({ required: true })}
          placeholder='enter title'
          defaultValue={data.title}
        />
        {errors.title && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='body'
          ref={register({ required: true })}
          placeholder='enter description'
          type='text'
        />
        {errors.body && <ErrorStyled>This field is required</ErrorStyled>}
        <InputStyled
          name='img'
          ref={register({ required: true })}
          placeholder='enter img'
          type='url'
        />
        {errors.img && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='video'
          ref={register({ required: true })}
          placeholder='enter video'
          type='url'
        />
        {errors.video && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='userId'
          ref={register({ required: true })}
          placeholder='enter user id'
          type='text'
        />
        {errors.userId && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='categoryIds'
          ref={register({ required: true })}
          placeholder='enter category'
          type='text'
        />
        {errors.categoryIds && (
          <ErrorStyled>This field is required</ErrorStyled>
        )}
        <InputStyled type='submit' />
      </FormStyled>
    </WrapperStyled>
  );
}
