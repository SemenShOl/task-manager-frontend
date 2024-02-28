import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { CalendarPage } from "./pages";
const root = ReactDOM.createRoot(document.getElementById("root"));
function NotFoundPage() {
  return <div>Not found</div>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
    errorElement: <NotFoundPage />,
  },
]);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
