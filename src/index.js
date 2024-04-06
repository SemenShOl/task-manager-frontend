import ReactDOM from "react-dom/client";
import "./index.css";
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
  PomodoroPage,
} from "./pages";
import { PageWrapper } from "./wrappers/PageWrapper/PageWrapper";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    errorElement: <NotFoundPage />,
    children: [
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
        path: "/pomodoro",
        element: <PomodoroPage />,
        errorElement: <NotFoundPage />,
      },
    ],
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
