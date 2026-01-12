import "./styles/App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/sign-in" element={<Auth />} />
    </Routes>
  );
}

export default App;
