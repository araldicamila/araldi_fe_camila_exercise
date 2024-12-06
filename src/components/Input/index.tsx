import React, {ChangeEvent} from 'react';
import {InputContainer} from './styles';

interface ISearchInputProps {
    onChange: (value: string) => void;
    value?: string;
}

const Input = ({onChange, value}: ISearchInputProps) => {
    return (
        <InputContainer
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            value={value}
            data-testid="input-component"
            placeholder="Type to search..."
        />
    );
};

export default Input;
