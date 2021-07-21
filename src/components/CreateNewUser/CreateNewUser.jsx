import React, { useContext } from 'react';
import { WrapperStyled, FormStyled, InputStyled, ErrorStyled } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, changeUser } from '../../store/users/action';
import routes from '../../constants/routes';
import Context from '../../context';
import Loader from '../Animation';

export default function CreateNewUser({ history }) {
  const { loader } = useSelector((state) => ({
    loader: state.user.loader,
  }));
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const { data } = useContext(Context);
  // if (data.id) {
  // } else {
  // }
  const onSubmit = async (inputData) => {
    if (data.id) {
      const changeObj = {
        email: inputData.email,
        password: inputData.password,
      };
      const changeUserF = (id, obj) => dispatch(changeUser(id, obj));
      await changeUserF(data.id, changeObj);
      await history.push(routes.users);
    } else {
      const createUser = (obj) => dispatch(postUser(obj));
      await createUser(inputData);
      await history.push(routes.users);
    }
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
          defaultValue={data.email}
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
          defaultValue={data.role}
        />
        {errors.role && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled type='submit' />
      </FormStyled>
    </WrapperStyled>
  );
}
