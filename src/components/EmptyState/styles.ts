import styled from 'styled-components';

export const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    row-gap: 1rem;

    margin: 2rem 0;
    
    img {
        min-width: 10rem;
    }

    p {
      color: ${({theme}) => theme.colorNeutral500};
    }
`;
