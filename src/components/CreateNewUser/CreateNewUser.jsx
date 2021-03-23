import React, { useContext } from 'react';
import { WrapperStyled, FormStyled, InputStyled, ErrorStyled } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postUser } from '../../store/users/action';
import routes from '../../constants/routes';
import Context from '../../context';
export default function CreateNewUser({ history }) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const createUser = (obj) => dispatch(postUser(obj));
    await createUser(data);
    await history.push(routes.users);
  };
  const { data } = useContext(Context);
  return (
    <WrapperStyled>
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
