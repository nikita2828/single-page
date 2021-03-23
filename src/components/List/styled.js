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
  background-color: ${(props) => props.color};
  margin-bottom: 2px;
  height: 25px;
  border-radius: 5px;
  padding: 20px;
`;

export const ListInformStyled = styled.span`
  display: flex;
  justify-content: flex-start;
  border-right: 2px solid rgb(235 240 246);
  width: 28%;
  justify-content: center;
  font-size: 14px;
`;

export const ListShortInformStyled = styled.span`
  display: flex;
  justify-content: flex-start;
  border-right: 2px solid rgb(235 240 246);
  width: 7%;
  max-width: 10%;
  justify-content: center;
  font-size: 14px;
`;
