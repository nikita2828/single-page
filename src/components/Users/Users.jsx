import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/users/action';
import {
  WrapperStyled,
  ListWrapperStyled,
  ListStyled,
  ListInformStyled,
  ListShortInformStyled,
} from './styled';
import Loader from '../Animation';
export default function Users() {
  const { users, loader } = useSelector((state) => ({
    users: state.user.users,
    loader: state.user.loader,
  }));
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsersList = () => dispatch(getUsers());
    getUsersList();
  }, [dispatch]);

  return (
    <WrapperStyled>
      {loader && <Loader />}
      <ListWrapperStyled>
        <ListStyled>
          <ListShortInformStyled>ID</ListShortInformStyled>
          <ListInformStyled>EMAIL</ListInformStyled>
          <ListShortInformStyled>ROLE</ListShortInformStyled>
          <ListInformStyled>CREATED</ListInformStyled>
          <ListInformStyled>UPDATE</ListInformStyled>
        </ListStyled>
        {users.map((user) => {
          return (
            <ListStyled key={user.id}>
              <ListShortInformStyled>{user.id}</ListShortInformStyled>
              <ListInformStyled>{user.email}</ListInformStyled>
              <ListShortInformStyled>{user.role}</ListShortInformStyled>
              <ListInformStyled>{user.createdAt}</ListInformStyled>
              <ListInformStyled>{user.updatedAt}</ListInformStyled>
            </ListStyled>
          );
        })}
      </ListWrapperStyled>
    </WrapperStyled>
  );
}
