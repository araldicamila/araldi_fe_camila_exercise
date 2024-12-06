import React from 'react';
import EmptyStateImage from '../../assets/images/empty-state.svg';
import {EmptyStateContainer} from './styles';

const EmptyState = () => {
    return (
        <EmptyStateContainer data-testid="empty-state-container">
            <img src={EmptyStateImage} alt="No data found" />

            <p>No data found!</p>
        </EmptyStateContainer>
    );
};

export default EmptyState;
