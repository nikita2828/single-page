import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/users/action';
import { WrapperStyled } from './styled';
import List from '../List';
import Loader from '../Animation';
export default function Users() {
  const { users, loader } = useSelector((state) => ({
    users: state.user.users,
    loader: state.user.loader,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsersList = () => dispatch(getUsers());
    getUsersList();
  }, [dispatch]);

  return (
    <WrapperStyled>
      {loader && <Loader />}

      <List
        data={users}
        names={['email', 'createdAt', 'updatedAt']}
        shortNames={['id', 'role']}
      />
    </WrapperStyled>
  );
}
