import React from 'react';
import { WrapperStyled } from './styled';
export default function Red(props) {
  return (
    <WrapperStyled>
      Red
      {props.children}
    </WrapperStyled>
  );
}
