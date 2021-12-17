import kuchbhi from "../images/conifer-754.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid px-5">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="p-5">
            <img className="homeimg mx-auto d-block" src={kuchbhi} alt=""></img>
          </div>
        </div>
        <div className="col-md-5">
          <div className="py-5 px-3">
            <div className="text-center">
              <h2>Profile Builder</h2>
            </div>
            <div className="row">
              <div className="mb-3">
                <Link to="/signup">
                  <button className="btn btn-warning shadow  w-100">Sign Up</button>
                </Link>
              </div>
              <div className="row align-items-center mb-3">
                <div className=" w-100 col">
                  <hr />
                </div>
                <div className="col-2 text-center">
                  <p>OR</p>
                </div>
                <div className=" w-100 col">
                  <hr />
                </div>
              </div>
              <div className="mb-3">
                <Link to="/signin">
                  <button className="btn btn-warning shadow w-100">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
