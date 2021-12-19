import { Card, Grid, Container, CardContent } from "@mui/material";
const PortfolioPage = () => {
  return (
    <div>
      <header>
        <Container className="bg-danger">
          <Grid container>
            <Grid item>
              <h1>I am Smita Mishra</h1>
            </Grid>
            <Grid item>
              <img
                className="img-fluid"
                src="https://media.istockphoto.com/photos/modern-business-woman-picture-id1190733435?k=20&m=1190733435&s=612x612&w=0&h=H4E84UpKSsQUrbDIl4CCkHX7etijK5SLaUOUZag55pQ="
                alt="cover image"
              />
            </Grid>
          </Grid>
        </Container>
      </header>
      <section className=" aboutme text-center mt-5">
        <Container sx={10} md={10} lg={10}>
          <h1>ABOUT ME</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quas nam impedit facilis. Vitae possimus odio obcaecati mollitia, ex
            architecto nam? Numquam dicta fugit, vitae reprehenderit amet iste.
            Aliquam ad dolorum voluptates et dignissimos. Nesciunt consectetur
            at quod dolore. Quae?
          </p>
          <Card>
            <CardContent>
                <div className="row">
                    <div className="col-6">
                    <img
                      src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fthispix.com%2Fservice%2Fprofessional-headshot%2F&psig=AOvVaw0uHPHlInKfpnf2Ww_lsyCz&ust=1639980587352000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCOhvaZ7_QCFQAAAAAdAAAAABAD"
                      alt=""
                     />
                     
                        <p>Name :  Smita</p>
                        <p>Birthday :  Smita</p>
                        <p>Name :  Smita</p>
                        <p>Name :  Smita</p>

                    </div>
                    <div className="col-6"></div>
                </div>
            </CardContent>
          </Card>
        </Container>
      </section>
      <section className="portfolio mt-5">
        <Container className="bg-success">
          </Container>
      </section>
      <div className="row "></div>
      <div className="row ">
        <div className="col-4 mx-5">
          <div className="Card w-50 "></div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};
export default PortfolioPage;
