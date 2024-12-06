import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin: 10px 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    margin: 0;
    text-transform: uppercase;
`;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    outline: 0;
    border-radius: 0.25rem;
    border: none;

    color: #0A2540;
`;
