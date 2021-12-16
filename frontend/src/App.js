//import "./App/css";

import Signin from "./components/signin";
import "antd/dist/antd.css";
import{BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/footer";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import AddPortfolio from "./components/addportfolio";
import Footer from "./components/footer";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Signin/>} path="/signin"/>
      <Route element={<AddPortfolio/>} path="/addportfolio"/>
      
      <Route element={<Signup/>} path="/signup"/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
