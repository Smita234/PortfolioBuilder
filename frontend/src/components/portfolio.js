import { Formik } from "formik";
import { Button, Card, CardContent, Grid } from "@mui/material";

import app_config from "../config";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const url = app_config.api_url;
  const { id } = useParams();

  console.log(id);

  const [portfolioData, setPortfolioData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/portfolio/getall/" + id)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPortfolioData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading) {
      return <h1>Data</h1>;
    } else {
      return <h1>Loading ...</h1>;
    }
  };

  return (
    <div className="portfolio-bg">
      <header className="hero-section">
        <Grid container>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </header>
      <footer></footer>
    </div>
  );
};

export default Portfolio;
