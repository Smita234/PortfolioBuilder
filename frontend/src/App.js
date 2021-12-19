//import "./App/css";

import Signin from "./components/signin";
import "antd/dist/antd.css";
import{BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/footer";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import AddPortfolio from "./components/addportfolio";
import Footer from "./components/footer";
import Home from "./components/home";
import  "./App.css";
import PortfolioPage from "./components/portfoliopage";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Signin/>} path="/signin"/>
      <Route element={<AddPortfolio/>} path="/addportfolio"/>
      <Route element={<Home/>}path="/"/>
      <Route element={<Signup/>} path="/signup"/>
      <Route element={<PortfolioPage/>}path="/portfoliopage"/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
