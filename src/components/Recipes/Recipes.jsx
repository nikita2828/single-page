import React, { useEffect, useContext } from 'react';
import { WrapperStyled, WrapperButtonStyled, LinkStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import List from '../List';
import Loader from '../Animation';
import { getRecipes, deleteRecipe } from '../../store/recipes/action';
import Button from '../Button';
import routes from '../../constants/routes';
import Context from '../../context';

export default function Recipes({ history }) {
  const { recipes, loader } = useSelector((state) => ({
    recipes: state.recipe.recipes,
    loader: state.recipe.loader,
  }));
  const dispatch = useDispatch();
  const { setData } = useContext(Context);

  useEffect(() => {
    const recipeList = () => dispatch(getRecipes());
    recipeList();
  }, [dispatch]);

  const deleteRecipeId = (id) => {
    const deleteRecipeDispatch = (userId) => dispatch(deleteRecipe(userId));
    deleteRecipeDispatch(id);
  };

  const createRecipeId = async (data) => {
    await setData(data);
    await history.push(routes.createNewRecipe);
  };

  const ButtonDelete = (id) => {
    return (
      <Button
        title='Delete'
        color='#ff0000'
        onClick={() => deleteRecipeId(id)}
      />
    );
  };
  const ButtonCreate = (user) => {
    return (
      <Button
        title='Change'
        color='rgb(19 169 100)'
        onClick={() => createRecipeId(user)}
      />
    );
  };
  return (
    <WrapperStyled>
      {loader && <Loader />}
      <WrapperButtonStyled>
        <LinkStyled to={routes.createNewRecipe}>
          <Button
            onClick={() => setData(false)}
            title='Create new recipe'
            color='rgb(19 169 100)'
          />
        </LinkStyled>
      </WrapperButtonStyled>
      <List
        data={recipes}
        shortNames={['id']}
        names={['title', 'createdAt', 'updatedAt']}
        deleteButton={ButtonDelete}
        createButton={ButtonCreate}
      />
    </WrapperStyled>
  );
}
