import React from 'react';
import { WrapperStyled } from './styled';

export default function Green(props) {
  return (
    <WrapperStyled>
      Green
      {props.children}
    </WrapperStyled>
  );
}
