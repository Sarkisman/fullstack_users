import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Paths } from './paths';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { ConfigProvider, theme } from 'antd';
import { Auth } from './features/auth/auth';

const router = createBrowserRouter([
  { path: Paths.home, element: <Home /> },
  { path: Paths.login, element: <Login /> },
  { path: Paths.register, element: <Register /> },
  { path: Paths.employeeAdd, element: <h1>employeeAdd</h1> },
  { path: Paths.employeeEdit, element: <h1>employeeEdit</h1> },
  { path: Paths.employee, element: <h1>employee</h1> },
  { path: Paths.status, element: <h1>status</h1> },
]);
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
