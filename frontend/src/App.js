//import "./App/css";

import Signin from "./components/signin";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/footer";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import AddPortfolio from "./components/addportfolio";
import Footer from "./components/footer";
import Home from "./components/home";
import "./App.css";
import Portfolio from "./components/portfolio";
import { UserProvider } from "./useContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Signin />} path="/signin" />
          <Route element={<AddPortfolio />} path="/addportfolio" />
          <Route element={<Home />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Portfolio />} path="/view/:id" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
