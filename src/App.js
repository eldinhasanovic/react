import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error 404/Error";
import AboutUs from "./pages/About-Us/About-Us";
import Hotels from "./pages/Hotels/Hotels";
import League from "./pages/League/League";
import Quotes from "./pages/Quotes/Quotes";
import Footer from "./components/Footer/Footer";
import Hotel from "./pages/Hotels/hotel/Hotel";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { AppContext } from "./context/AppContext";

export const BASE_URL = "https://api.quotable.io";

function App() {
  const { token, setToken } = useContext(AppContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={token ? <League /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking" element={<Hotels />} />
        <Route path="/league" element={<League />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/hotel:id" element={<Hotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
