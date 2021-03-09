import React from 'react';
import { ButtonStyled } from './styled';
export default function Button({ title, color, onClick }) {
  return (
    <>
      <ButtonStyled color={color} onClick={onClick}>
        {title}
      </ButtonStyled>
    </>
  );
}
