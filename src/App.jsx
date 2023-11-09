import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import ProfileImgUpload from "./pages/ProfileImgUpload/ProfileImgUpload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/profileImgUpload",
    element: <ProfileImgUpload />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
