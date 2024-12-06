import React from 'react';
import {useTheme} from 'styled-components';
import EmptyStateImage from '../../assets/images/empty-state.svg';
import EmptyStateDarkImage from '../../assets/images/empty-state-dark.svg';
import {EmptyStateContainer} from './styles';

const EmptyState = () => {
    const theme = useTheme();

    return (
        <EmptyStateContainer data-testid="empty-state-container">
            <img
                src={theme.background ? EmptyStateDarkImage : EmptyStateImage}
                alt="No data found"
            />

            <p>No data found!</p>
        </EmptyStateContainer>
    );
};

export default EmptyState;
