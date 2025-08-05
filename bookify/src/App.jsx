import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import AppNavbar from "./components/Navbar";
import HomePage from "./pages/Home";
import ListingPage from "./pages/List";
import DetailsPage from "./pages/Details";

function App() {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/list" element={<ListingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/view/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
