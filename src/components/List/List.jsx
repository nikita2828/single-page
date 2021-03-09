import React from 'react';
import {
  ListWrapperStyled,
  ListStyled,
  ListInformStyled,
  ListShortInformStyled,
} from './styled';
export default function List({ data, names, shortNames, deleteButton }) {
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
          {shortLabels.map((name, i) => {
            return (
              <ListShortInformStyled key={i}>{name}</ListShortInformStyled>
            );
          })}
          {labels.map((name, i) => {
            return <ListInformStyled key={i}>{name}</ListInformStyled>;
          })}
          {deleteButton && <ListInformStyled>DELETE</ListInformStyled>}
        </ListStyled>
        {data.map((user) => {
          return (
            <ListStyled key={user.id}>
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
              {deleteButton && (
                <ListInformStyled>{deleteButton(user.id)}</ListInformStyled>
              )}
            </ListStyled>
          );
        })}
      </ListWrapperStyled>
    </>
  );
}
