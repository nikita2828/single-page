import React from 'react';
import { WrapperStyled, LinkStyled } from './styled';
import routes from '../../constants/routes';
export default function Categories(props) {
  return (
    <WrapperStyled>
      <h1>Categories</h1>
      <LinkStyled to={routes.red}>RED</LinkStyled>
      <LinkStyled to={routes.green}>GREEN</LinkStyled>
      <LinkStyled to={routes.black}>BLACK</LinkStyled>
      {props.children}
    </WrapperStyled>
  );
}
