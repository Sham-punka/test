import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div/>,
  },
  {
    path: '*',
    element: 'Что-то пошло не так',
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
