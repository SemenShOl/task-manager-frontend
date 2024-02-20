import ReactDOM from "react-dom/client";
import "./index.scss";
// import "./styles/overlayscorllbar_styles.scss";
import "overlayscrollbars/styles/overlayscrollbars.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
