import React from 'react';
import Navigation from './components/Navigation';
import Content from './components/Content';
import { MainWrapperStyled, WrapperStyled } from './styledApp';
export default function App(props) {
  return (
    <MainWrapperStyled>
      <WrapperStyled>
        <Navigation />
        <Content content={props.children} />
      </WrapperStyled>
    </MainWrapperStyled>
  );
}
