import styled from 'styled-components';

export const InputContainer = styled.input`
  height: 40px;
  min-width: 350px;

  border: 1px solid ${({theme}) => theme.colorLight200};;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;

  background-color: ${({theme}) => theme.colorLight100};
  border-radius: 0.25rem;

  margin: 1rem 0;

  &::placeholder {
    color: ${({theme}) => theme.colorNeutral500};
  }
`;