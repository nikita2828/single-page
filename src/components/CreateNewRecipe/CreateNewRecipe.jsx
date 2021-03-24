import React, { useContext } from 'react';
import { WrapperStyled, FormStyled, InputStyled, ErrorStyled } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe, putRecipe } from '../../store/recipes/action';
import routes from '../../constants/routes';
import Context from '../../context';
import Loader from '../Animation';

export default function CreateNewRecipe({ history }) {
  const { loader } = useSelector((state) => ({
    loader: state.recipe.loader,
  }));
  const { dataForChangeRequest } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const arrOfNumberId = data.categoryIds.split(',').map((str) => Number(str));
    data.categoryIds = arrOfNumberId;
    const objChangeRequest = {
      title: data.title,
      body: data.body,
      img: data.img,
      video: data.video,
      categoryIds: data.categoryIds,
    };
    if (dataForChangeRequest) {
      const changeRecipe = (id, obj) => dispatch(putRecipe(id, obj));
      await changeRecipe(dataForChangeRequest.id, objChangeRequest);
      await history.push(routes.recipes);
    } else {
      const createRecipe = (obj) => dispatch(postRecipe(obj));
      await createRecipe(data);
      await history.push(routes.recipes);
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

        <InputStyled
          name='body'
          ref={register({ required: true })}
          placeholder='enter description'
          type='text'
          defaultValue={dataForChangeRequest.body}
        />
        {errors.body && <ErrorStyled>This field is required</ErrorStyled>}
        <InputStyled
          name='img'
          ref={register({ required: true })}
          placeholder='enter img'
          type='url'
          defaultValue={dataForChangeRequest.img}
        />
        {errors.img && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='video'
          ref={register({ required: true })}
          placeholder='enter video'
          type='url'
          defaultValue={dataForChangeRequest.video}
        />
        {errors.video && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='userId'
          ref={register({ required: true })}
          placeholder='enter user id'
          type='text'
          defaultValue={dataForChangeRequest.userId}
        />
        {errors.userId && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='categoryIds'
          ref={register({ required: true })}
          placeholder='enter category'
          type='text'
          defaultValue={dataForChangeRequest.categoryIds}
        />
        {errors.categoryIds && (
          <ErrorStyled>This field is required</ErrorStyled>
        )}
        <InputStyled type='submit' />
      </FormStyled>
    </WrapperStyled>
  );
}
