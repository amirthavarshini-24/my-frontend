import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import EmotionBehaviour from "./pages/EmotionBehaviour";
import Multilingual from "./pages/Multilingual";
import SafeRewrite from "./pages/SafeRewrite";
import SafeCoach from "./pages/SafeCoach";
import Dashboard from "./pages/Dashboard";

const routes = [

  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/analyze",
    element: <Analyze/>
  },

  {
    path: "/emotion",
    element: <EmotionBehaviour/>
  },

  {
    path: "/behaviour",
    element: <Multilingual/>
  },

  {
    path: "/rewrite",
    element: <SafeRewrite/>
  },

  {
    path: "/coach",
    element: <SafeCoach/>
  },

  {
    path: "/dashboard",
    element: <Dashboard/>
  }

];

export default routes;