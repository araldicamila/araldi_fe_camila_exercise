import React, {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import Toggle from 'react-toggle';
import {IoIosSunny, IoMdMoon} from 'react-icons/io';
import {ContainerToggle} from './styles';

interface IThemeButton {
    onChangeTheme: () => void;
    isThemeToggleChecked: boolean;
}

const ThemeButton = ({onChangeTheme, isThemeToggleChecked}: IThemeButton) => {
    return (
        <Fragment>
            <ContainerToggle data-testid="container-toggle">
                <Toggle
                    checked={isThemeToggleChecked}
                    onChange={onChangeTheme}
                    icons={{
                        checked: <IoIosSunny color="#4d4d4d" />,
                        unchecked: <IoMdMoon color="#FFF" />,
                    }}
                />
            </ContainerToggle>
            <Outlet />
        </Fragment>
    );
};

export default ThemeButton;
