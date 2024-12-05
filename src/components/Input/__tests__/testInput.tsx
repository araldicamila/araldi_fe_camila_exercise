import {fireEvent, render, screen, act} from '@testing-library/react';
import React from 'react';
import Input from '..';

const mockOnChange = jest.fn();

describe('Input', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('should render with the correct value', () => {
        const value = 'Hello world!';
        render(<Input onChange={mockOnChange} value={value} />);

        expect(screen.getByTestId('input-component')).toHaveValue(value);
    });

    test('should calls onChange when typing a new value', () => {
        render(<Input onChange={mockOnChange} value="" />);

        fireEvent.change(screen.getByTestId('input-component'), {
            target: {
                value: 'Hello!',
            },
        });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith('Hello!');
    });
});
