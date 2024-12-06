import React, {useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from './assets/styles/global';
import {darkTheme, lightTheme} from './assets/styles/themes';
import ThemeButton from './components/ThemeButton';
import TeamOverview from './pages/TeamOverview';
import Teams from './pages/Teams';
import UserOverview from './pages/UserOverview';

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        return !!isDark;
    });

    const router = createBrowserRouter([
        {
            element: (
                <ThemeButton
                    onChangeTheme={() => setIsDarkTheme(!isDarkTheme)}
                    isThemeToggleChecked={isDarkTheme}
                />
            ),
            children: [
                {
                    path: '/',
                    element: <Teams />,
                },
                {
                    path: '/team/:teamId',
                    element: <TeamOverview />,
                },
                {
                    path: '/user/:useId',
                    element: <UserOverview />,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
