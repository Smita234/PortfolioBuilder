import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

// //import "./signup.css";
import app_config from "../config";
import Swal from "sweetalert2";

const AddPortfolio = () => {
  const url = app_config.api_url;

  //   // Two important thing to use with Formik
  //   // 1. formObject
  const AddPortfolioForm = {
    title: "",
    image: "",
    cvimage: "",
    links: [],
    description: "",
    work: [],
    user: "",
  };

  //   // 2. submit callback function
  const AddPortfolioSubmit = (formdata) => {
    console.log(formdata);

    //     // three things are required to request
    //     // 1. address
    //     // 2. http request method
    //     // 3. data and its format

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/portfolio/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have registered successfully!",
        });
      });
  };

  return (
    <div className="signup-bg">
      <h1 className="text-center">Add Portfolio</h1>
      <hr />
      <div className="col-md-4 mx-auto">
        <Card>
          <CardContent>
            <Formik
              initialValues={AddPortfolioForm}
              onSubmit={AddPortfolioSubmit}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3">Title</label>
                  <input
                    placeholder="title"
                    className="form-control"
                    id="first name"
                    value={values.title}
                    onChange={handleChange}
                  />
                  <label className="mt-3">Name</label>
                  <input
                    placeholder="name"
                    className="form-control"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Email</label>
                  <input
                    placeholder="email"
                    className="form-control"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <label className="mt-3">Link</label>
                  <input
                    placeholder="link"
                    className="form-control"
                    id="link"
                    value={values.link}
                    onChange={handleChange}
                  />
                  <label className="mt-3">Description</label>
                  <input
                    placeholder="description"
                    className="form-control"
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                  <label className="mt-3">Work</label>
                  <input
                    placeholder="work"
                    className="form-control"
                    id="work"
                    value={values.work}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="secondary"
                    //            startIcon={<GoogleIcon />}
                  >
                    Add Portfolio
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddPortfolio;
