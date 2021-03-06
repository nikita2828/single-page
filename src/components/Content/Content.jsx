import React from 'react';
import { WrapperStyled } from './styled';
export default function Content(props) {
  return <WrapperStyled>{props.content}</WrapperStyled>;
}
