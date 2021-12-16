import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
<nav class="navbar navbar-dark bg-dark w-100"> 
 <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
   {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Pric</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>     */}
  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="about">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact Us</a>
  </li>
  {/* <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li> */}
  <li>
  <button type="button" class="btn btn-outline-primary ">
    <Link to="/signin" activeClassName="active" className="nav-link">
        SignIn
    </Link>
  </button> 
  </li>
  <li>
  <button type="button" class="btn btn-outline-primary">
  <Link to="/signup" activeClassName="active" className="nav-link">
        SignUp
    </Link>
      </button>
  </li>
</ul>
</div>

  </nav>
  );
}
export default Navbar;
