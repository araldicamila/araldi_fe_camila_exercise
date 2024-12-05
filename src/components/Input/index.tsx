import React, {ChangeEvent} from 'react';

interface ISearchInputProps {
    onChange: (value: string) => void;
    value?: string;
}

const Input = ({onChange, value}: ISearchInputProps) => {
    return (
        <input
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            value={value}
            data-testid="input-component"
        />
    );
};

export default Input;
