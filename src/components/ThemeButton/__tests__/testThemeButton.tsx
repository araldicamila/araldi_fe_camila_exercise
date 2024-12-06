import React from 'react';
import {render, screen} from '@testing-library/react';
import ThemeButton from '..';

describe('Theme button', () => {
    it('should render theme button', () => {
        render(<ThemeButton isThemeToggleChecked onChangeTheme={() => jest.fn()} />);

        expect(screen.getByTestId('container-toggle')).toBeInTheDocument();
    });
});
