import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import ChefDetails from '../Pages/ChefDetails';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../Pages/NotFoundPage';
import Blog from '../Pages/Blog';

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
                element: <PrivateRoute><ChefDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'Registration',
                element: <Registration />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])

export default routes;