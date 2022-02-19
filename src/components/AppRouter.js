import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Login from "routes/Login";
import Register from "routes/Register";
import "components/App.css";

const AppRouter = ({ isSignedIn }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isSignedIn={isSignedIn} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
