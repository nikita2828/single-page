import React from 'react';
import {
  ListWrapperStyled,
  ListStyled,
  ListInformStyled,
  ListShortInformStyled,
} from './styled';
export default function List({ data, names, shortNames }) {
  const prepareNames = () => {
    return names.map((name) => {
      switch (name) {
        case 'title':
          return 'TITLE';
        case 'email':
          return 'USER EMAIL';
        case 'createdAt':
          return 'CREATED AT';
        case 'updatedAt':
          return 'UPDATED AT';
        default:
          return name;
      }
    });
  };
  const prepareShortNames = () => {
    return shortNames.map((name) => {
      switch (name) {
        case 'id':
          return 'ID';
        case 'role':
          return 'ROLE';
        default:
          return name;
      }
    });
  };
  const labels = prepareNames(names);
  const shortLabels = prepareShortNames(shortNames);
  return (
    <>
      <ListWrapperStyled>
        <ListStyled>
          {shortLabels.map((name) => {
            return <ListShortInformStyled>{name}</ListShortInformStyled>;
          })}
          {labels.map((name) => {
            return <ListInformStyled>{name}</ListInformStyled>;
          })}
        </ListStyled>
        {data.map((user) => {
          return (
            <ListStyled>
              {shortNames.map((name, index) => {
                return (
                  <ListShortInformStyled key={index}>
                    {user[name]}
                  </ListShortInformStyled>
                );
              })}
              {names.map((name, index) => {
                return (
                  <ListInformStyled key={index}>{user[name]}</ListInformStyled>
                );
              })}
            </ListStyled>
          );
        })}
      </ListWrapperStyled>
    </>
  );
}
