import "./styles/App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import NotFound404 from "./pages/NotFound404";
import { Routes, Route } from "react-router";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/team">
        <Route path="" element ={<Team/>} />
        <Route path =":teamId" element={<Team/>} />
        <Route path ="details" element={<TeamDetails/>} />
      </Route>
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-in" element={<Auth />} />

      <Route path="/error" element = {<h1>Internal Error</h1>}/>
      <Route path="*" element = {<NotFound404 />}/>

    </Routes>
  );
}

export default App;
