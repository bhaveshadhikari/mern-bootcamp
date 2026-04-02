import "./styles/App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp"
import TeamDetails from "./pages/TeamDetails";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/auth/sign-in" element={<Auth />} />
      <Route path="/auth/sign-up" element={<SignUp />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

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
