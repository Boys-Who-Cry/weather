import App from "../App.jsx";
import Weather from "../pages/Weather.jsx";
import Error from "../utils/Error.jsx";
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "weather/:location",
    element: <Weather />,
    errorElement: <Error />,
  },
  {
    path: "weather/",
    element: <Error />,
  },
];
export default routes;
