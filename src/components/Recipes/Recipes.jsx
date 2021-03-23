import React, { useEffect } from 'react';
import { WrapperStyled, WrapperButtonStyled, LinkStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import List from '../List';
import Loader from '../Animation';
import { getRecipes } from '../../store/recipes/action';
import Button from '../Button';
import routes from '../../constants/routes';

export default function Recipes() {
  const { recipes, loader } = useSelector((state) => ({
    recipes: state.recipe.recipes,
    loader: state.recipe.loader,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const recipeList = () => dispatch(getRecipes());
    recipeList();
  }, [dispatch]);
  return (
    <WrapperStyled>
      {loader && <Loader />}
      <WrapperButtonStyled>
        <LinkStyled to={routes.createNewRecipe}>
          <Button
            // onClick={() => setData(false)}
            title='Create new recipe'
            color='rgb(19 169 100)'
          />
        </LinkStyled>
      </WrapperButtonStyled>
      <List
        data={recipes}
        shortNames={['id']}
        names={['title', 'createdAt', 'updatedAt']}
      />
    </WrapperStyled>
  );
}
