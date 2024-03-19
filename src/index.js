import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/theme.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  CalendarPage,
  NotesPage,
  DayPage,
  ProfilePage,
  RegistrationPage,
  LoginPage,
  NotFoundPage,
} from "./pages";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/notes",
    element: <NotesPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/:date",
    element: <DayPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
