import React, { useContext } from 'react';
import { WrapperStyled, FormStyled, InputStyled, ErrorStyled } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, putUser } from '../../store/users/action';
import routes from '../../constants/routes';
import Context from '../../context';
import Loader from '../Animation';

export default function CreateNewUser({ history }) {
  const { loader } = useSelector((state) => ({
    loader: state.user.loader,
  }));
  const { dataForChangeRequest } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (dataForChangeRequest) {
      const changeUser = (id, obj) => dispatch(putUser(id, obj));
      await changeUser(dataForChangeRequest.id, data);
    } else {
      const createUser = (obj) => dispatch(postUser(obj));
      await createUser(data);
    }
    await history.push(routes.users);
  };
  return (
    <WrapperStyled>
      {loader && <Loader />}
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          type='email'
          name='email'
          ref={register({ required: true })}
          placeholder='enter email'
          defaultValue={dataForChangeRequest.email}
        />
        {errors.email && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled
          name='password'
          ref={register({ required: true })}
          placeholder='enter password'
        />
        {errors.password && <ErrorStyled>This field is required</ErrorStyled>}
        <InputStyled
          name='role'
          ref={register({ required: true })}
          placeholder='enter role'
          defaultValue={dataForChangeRequest.role}
        />
        {errors.role && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled type='submit' />
      </FormStyled>
    </WrapperStyled>
  );
}
