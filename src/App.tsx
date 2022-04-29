import {
  BrowserRouter as Router,  
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Signin from './pages/Signin';
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import Hqs from "./pages/Hqs";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/characters" element={<ProtectRoute outlet={<Characters />} />} />
        <Route path="/movies" element={<ProtectRoute outlet={<Movies />} />} />
        <Route path="/hqs" element={<ProtectRoute outlet={<Hqs />} />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
