import React, { useEffect, useContext } from 'react';
import { WrapperStyled, WrapperButtonStyled, LinkStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import List from '../List';
import Loader from '../Animation';
import { getCaterories, deleteCategory } from '../../store/categories/action';
import Button from '../Button';
import routes from '../../constants/routes';
import Context from '../../context';

export default function Categories({ history }) {
  const { categories, loader } = useSelector((state) => ({
    categories: state.category.categories,
    loader: state.category.loader,
  }));
  const dispatch = useDispatch();
  const { setData } = useContext(Context);

  useEffect(() => {
    const categoryList = () => dispatch(getCaterories());
    categoryList();
  }, [dispatch]);

  const deleteCategoryId = (id) => {
    const deleteCategoryDispatch = (categoryId) =>
      dispatch(deleteCategory(categoryId));
    deleteCategoryDispatch(id);
  };

  const createCategoryId = async (data) => {
    await setData(data);
    await history.push(routes.createNewCategory);
  };

  const ButtonDelete = (id) => {
    return (
      <Button
        title='Delete'
        color='#ff0000'
        onClick={() => deleteCategoryId(id)}
      />
    );
  };
  const ButtonCreate = (category) => {
    return (
      <Button
        title='Change'
        color='rgb(19 169 100)'
        onClick={() => createCategoryId(category)}
      />
    );
  };
  return (
    <WrapperStyled>
      {loader && <Loader />}
      <WrapperButtonStyled>
        <LinkStyled to={routes.createNewCategory}>
          <Button
            onClick={() => setData(false)}
            title='Create new recipe'
            color='rgb(19 169 100)'
          />
        </LinkStyled>
      </WrapperButtonStyled>
      <List
        data={categories}
        shortNames={['id']}
        names={['title']}
        deleteButton={ButtonDelete}
        createButton={ButtonCreate}
      />
    </WrapperStyled>
  );
}
