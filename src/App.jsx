import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Trasactions from "./components/Trasactions";
import Transfers from "./components/Transfers";
import Investments from "./components/Investments";
import Chat from "./components/Chat";

function App() {
  return (
    <Router basename="/info3130_final_project/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Trasactions />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
