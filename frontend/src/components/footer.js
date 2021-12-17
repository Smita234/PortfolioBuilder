import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <div className="container-fluid  my-5 p-0">
      <footer className="text-white text-center text-lg-start bg-dark">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>
              <p>This is a Portfolio Building Web Application</p>
              <p>Second Line</p>
              <div className="mt-4">
                <NavLink
                  to="/"
                  type="button"
                  className="btn btn-floating  btn-lg"
                >
                  <FacebookIcon style={{ fill: "green" }} />
                </NavLink>
                <NavLink
                  to="/"
                  type="button"
                  className="btn btn-floating btn-lg"
                >
                  <InstagramIcon style={{ fill: "green" }} />
                </NavLink>
                <NavLink
                  to="/"
                  type="button"
                  className="btn btn-floating  btn-lg"
                >
                  <LinkedInIcon style={{ fill: "green" }} />
                </NavLink>
                <NavLink
                  to="/"
                  type="button"
                  className="btn btn-floating  btn-lg"
                >
                  <TwitterIcon style={{ fill: "green" }} />
                </NavLink>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-center mb-4 pb-1">
                Contact Info
              </h5>

              <ul className="fa-ul list-unstyled" style={{ marginLeft: "1.65em" }}>
                <li className="mb-3">
                  <span className="fa-li">
                    
                  <HomeIcon style={{fill:"green",width:"40px"}}/>
                  </span>
                  <span className="ms-2">Warsaw, 00-967, Poland</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <EmailIcon style={{fill:"green",width:"40px"}}/>
                  </span>
                  <span className="ms-2">contact@example.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                   <LocalPhoneIcon style={{fill: "green", width: "40px"}}/>
                  </span>
                  <span className="ms-2">+ 48 234 567 88</span>
                </li>
              </ul>
            </div>
        

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-center mb-4">Opening hours</h5>

              <div style={{width:"100px"}}>
                <img src="" alt=""/>
              </div>
            </div>
           
          </div>
         </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}

        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
     </footer>
    </div>
  );
};
export default Footer;
