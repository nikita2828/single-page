import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.color};
  color: #ffffff;
  border: none;
  outline: none;
  padding: 5px 20px;
  margin-right: 5px;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
  }
  :active {
    box-shadow: inset 0 0 3px #000000;
  }
`;
