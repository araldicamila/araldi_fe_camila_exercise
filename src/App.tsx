import * as React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {GlobalStyle} from 'assets/styles/global';
import TeamOverview from './pages/TeamOverview';
import Teams from './pages/Teams';
import UserOverview from './pages/UserOverview';


const App = () => {
    const router = createBrowserRouter([
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
    ]);

    return (
        <React.Fragment>
            <GlobalStyle />
            <RouterProvider router={router} />
        </React.Fragment>
    );
};

export default App;
