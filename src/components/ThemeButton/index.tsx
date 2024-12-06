import React, {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {Expand} from '@theme-toggles/react';
import {ContainerToggle} from './styles';
import '@theme-toggles/react/css/Expand.css';

interface IThemeButton {
    onChangeTheme: () => void;
    isThemeToggleChecked: boolean;
}

const ThemeButton = ({onChangeTheme, isThemeToggleChecked}: IThemeButton) => {
    return (
        <Fragment>
            <ContainerToggle data-testid="container-toggle">
                <Expand
                    toggled={isThemeToggleChecked}
                    toggle={onChangeTheme}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                />
            </ContainerToggle>
            <Outlet />
        </Fragment>
    );
};

export default ThemeButton;
