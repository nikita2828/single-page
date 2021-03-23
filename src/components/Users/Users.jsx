import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../store/users/action';
import { WrapperStyled, WrapperButtonStyled, LinkStyled } from './styled';
import List from '../List';
import Loader from '../Animation';
import Button from '../Button';
import routes from '../../constants/routes';
import Context from '../../context';

export default function Users({ history }) {
  const { setData } = useContext(Context);
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

  const createUserId = async (data) => {
    await setData(data);
    await history.push(routes.createNewUser);
  };

  const ButtonDelete = (id) => {
    return (
      <Button title='Delete' color='#ff0000' onClick={() => deleteUserId(id)} />
    );
  };
  const ButtonCreate = (user) => {
    return (
      <Button
        title='Create'
        color='rgb(19 169 100)'
        onClick={() => createUserId(user)}
      />
    );
  };
  return (
    <WrapperStyled>
      {loader && <Loader />}
      <WrapperButtonStyled>
        <LinkStyled to={routes.createNewUser}>
          <Button
            onClick={() => setData(false)}
            title='Create new user'
            color='rgb(19 169 100)'
          />
        </LinkStyled>
      </WrapperButtonStyled>
      <List
        data={users}
        names={['email', 'createdAt']}
        shortNames={['id', 'role']}
        deleteButton={ButtonDelete}
        createButton={ButtonCreate}
      />
    </WrapperStyled>
  );
}
