import React from 'react';
import {
  WrapperStyled,
  LinkStyled,
  UserImgStyled,
  UserNameStyled,
  UserWrapperStyled,
  LinkImgStyled,
} from '../Navigation/styled';
import dashboardSvg from '../../images/dashboard.svg';
import users from '../../images/team.svg';
import categories from '../../images/category.svg';
import recipes from '../../images/recipe-book.svg';
import routes from '../../constants/routes';
export default function Navigation() {
  return (
    <WrapperStyled>
      <UserWrapperStyled>
        <UserImgStyled src='https://via.placeholder.com/150'></UserImgStyled>
        <UserNameStyled>User Name</UserNameStyled>
      </UserWrapperStyled>
      <LinkStyled to={routes.dashboard}>
        <LinkImgStyled src={dashboardSvg} />
        Dashboard
      </LinkStyled>
      <LinkStyled to={routes.categories}>
        <LinkImgStyled src={categories} />
        Categories
      </LinkStyled>
      <LinkStyled to={routes.recipes}>
        <LinkImgStyled src={recipes} />
        Recipes
      </LinkStyled>
      <LinkStyled to={routes.users}>
        <LinkImgStyled src={users} />
        Users
      </LinkStyled>
    </WrapperStyled>
  );
}
