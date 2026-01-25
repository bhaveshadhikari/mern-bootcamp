import "./styles/App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Auth from "./pages/Auth";
import TeamDetails from "./pages/TeamDetails";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/auth/sign-in" element={<Auth />} />

      {/* team nested route */}
      <Route path="team">
        <Route path=":teamId" element={<Team />} />
        <Route path="details" element={<TeamDetails />} />
      </Route>

      {/* Default Route to handle error or not found page */}
      <Route path="/error" element={<h1>500 Internal Server Error</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
