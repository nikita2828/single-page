import React from 'react';
import { WrapperStyled, LinkStyled } from './styled';
import routes from '../../../../constants/routes';
export default function Black(props) {
  return (
    <WrapperStyled>
      Black
      <LinkStyled to={routes.white}>White</LinkStyled>
      {props.children}
    </WrapperStyled>
  );
}
