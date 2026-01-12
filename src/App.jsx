import "./styles/App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-in" element={<Auth />} />
    </Routes>
  );
}

export default App;
