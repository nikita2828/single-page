import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../store/users/action';
import { WrapperStyled, WrapperButtonStyled, LinkStyled } from './styled';
import List from '../List';
import Loader from '../Animation';
import Button from '../Button';
import routes from '../../constants/routes';

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

  const deleteUserId = (id) => {
    const deleteUserDispatch = (userId) => dispatch(deleteUser(userId));
    deleteUserDispatch(id);
  };

  const ButtonFunction = (id) => {
    return (
      <Button title='Delete' color='#ff0000' onClick={() => deleteUserId(id)} />
    );
  };
  return (
    <WrapperStyled>
      {loader && <Loader />}
      <WrapperButtonStyled>
        <LinkStyled to={routes.createNewUser}>
          <Button title='Create new user' color='rgb(19 169 100)' />
        </LinkStyled>
      </WrapperButtonStyled>
      <List
        data={users}
        names={['email', 'createdAt']}
        shortNames={['id', 'role']}
        deleteButton={ButtonFunction}
      />
    </WrapperStyled>
  );
}
