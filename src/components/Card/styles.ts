import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean, margin?: string;}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 0.25rem;
    background: ${({theme}) => theme.colorLight100};
    padding: 20px;
    width: 250px;
    max-height: 200px;
    min-height: 50px;
    cursor: ${({hasNavigation}) => (hasNavigation ? 'pointer' : 'default')};
    font-weight: 300;
    margin: ${({margin}) => (margin)};

    font-size: 0.95rem;

    strong {
        font-weight: 600;
    }

    &:hover {
        text-decoration: ${({hasNavigation}) => (hasNavigation ? 'underline' : 'default')};;
    }
`;
