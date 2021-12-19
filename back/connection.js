const mongoose = require("mongoose");

// const uri = "mongodb+srv://Smita_9:DataSmitaBase@cluster0.enci1.mongodb.net/mernwss1200?retryWrites=true&w=majority";
const uri =
  "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/portfolioappsmita?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("database successfully connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
