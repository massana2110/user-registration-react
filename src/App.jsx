import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Home } from './pages/home/Home'
import { Users } from './pages/users/Users'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
