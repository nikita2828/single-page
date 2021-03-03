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
export default function Navigation() {
  return (
    <WrapperStyled>
      <UserWrapperStyled>
        <UserImgStyled src='https://via.placeholder.com/150'></UserImgStyled>
        <UserNameStyled>User Name</UserNameStyled>
      </UserWrapperStyled>
      <LinkStyled>
        <LinkImgStyled src={dashboardSvg} />
        Dashboard
      </LinkStyled>
      <LinkStyled>
        <LinkImgStyled src={categories} />
        Categories
      </LinkStyled>
      <LinkStyled>
        <LinkImgStyled src={recipes} />
        Recipes
      </LinkStyled>
      <LinkStyled>
        <LinkImgStyled src={users} />
        Users
      </LinkStyled>
    </WrapperStyled>
  );
}
