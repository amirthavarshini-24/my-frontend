import { HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import EmotionBehaviour from "./pages/EmotionBehaviour";
import Behaviour from "./pages/Behaviour";
import SafeRewrite from "./pages/SafeRewrite";
import SafeCoach from "./pages/SafeCoach";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/analyze" element={<Analyze />} />

        <Route path="/emotion" element={<EmotionBehaviour />} />

        <Route path="/behaviour" element={<Behaviour />} />

        <Route path="/rewrite" element={<SafeRewrite />} />

        <Route path="/coach" element={<SafeCoach />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </HashRouter>
  );
}

export default App;