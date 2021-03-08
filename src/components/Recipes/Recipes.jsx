import React, { useEffect } from 'react';
import { WrapperStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import List from '../List';
import Loader from '../Animation';
import { getRecipes } from '../../store/recipes/action';
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
      <List
        data={recipes}
        shortNames={['id']}
        names={['title', 'createdAt', 'updatedAt']}
      />
    </WrapperStyled>
  );
}
