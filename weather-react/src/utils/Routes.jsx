import App from "../App.jsx";
import Account from "../pages/Account.jsx";
import Weather from "../pages/Weather.jsx";
import MultipleLocations from "../components/MultipleLocations.jsx";
import Error from "../utils/Error.jsx";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "weather/:location",
    element: <Weather />,
    errorElement: <Error />,
  },
  {
    path: "account",
    element: <Account />,
    errorElement: <Error />,
  },
  {
    path: "ml",
    element: <MultipleLocations />,
  },
];
export default routes;
