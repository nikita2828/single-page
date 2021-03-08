import styled from 'styled-components';
export const ListWrapperStyled = styled.ul`
  list-style: none;
  margin-right: 40px;
`;
export const ListStyled = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin-bottom: 5px;
  height: 25px;
  border-radius: 5px;
`;

export const ListInformStyled = styled.span`
  display: flex;
  justify-content: flex-start;
  border-right: 2px solid rgb(235 240 246);
  width: 30%;
  justify-content: center;
`;

export const ListShortInformStyled = styled.span`
  display: flex;
  justify-content: flex-start;
  border-right: 2px solid rgb(235 240 246);
  width: 5%;
  max-width: 10%;
  justify-content: center;
`;
