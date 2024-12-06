import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import ThemeButton from '..';

describe('Theme button', () => {
    it('should render theme button', () => {
        render(<ThemeButton isThemeToggleChecked={true} onChangeTheme={() => jest.fn()} />);

        expect(screen.getByTestId('container-toggle')).toBeInTheDocument();
    });

    it('should call onChange when toggle button is clicked', () => {
        render(<ThemeButton isThemeToggleChecked={true} onChangeTheme={() => jest.fn()} />);
        const toggle = screen.getByRole('button');
        fireEvent.click(toggle);
        expect(jest.fn()).toHaveBeenCalledTimes(1);
    });
});
