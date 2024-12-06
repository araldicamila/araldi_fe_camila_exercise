import React from 'react';
import {render, screen} from '@testing-library/react';
import EmptyState from '..';

describe('Empty State', () => {
    it('should render empty state', () => {
        render(<EmptyState />);

        expect(screen.getByTestId('empty-state-container')).toBeInTheDocument();
        expect(screen.getByText('No data found!')).toBeInTheDocument();
    });
});
