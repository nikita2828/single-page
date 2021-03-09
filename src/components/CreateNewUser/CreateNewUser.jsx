import React from 'react';
import { WrapperStyled, FormStyled, InputStyled, ErrorStyled } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postUser } from '../../store/users/action';
export default function CreateNewUser() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const createUser = (obj) => dispatch(postUser(obj));
    createUser(data);
  };

  return (
    <WrapperStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          type='email'
          name='email'
          ref={register({ required: true })}
          placeholder='enter email'
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
        />
        {errors.role && <ErrorStyled>This field is required</ErrorStyled>}

        <InputStyled type='submit' />
      </FormStyled>
    </WrapperStyled>
  );
}
