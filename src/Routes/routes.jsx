import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import ChefDetails from '../Pages/ChefDetails';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'chef/:id',
                element: <ChefDetails />
            }
        ]
    }
])

export default routes;