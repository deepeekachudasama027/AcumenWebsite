const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const compression = require("compression");
const errorHandler = require('./middleware/error');

const router = require("./router/routes");

const app = express();

app.set("views", path.join(__dirname, "/views/"));
// app.engine(
//   "handlebars",
//   exphbs({
//     extname: ".hbs",
//     defaultLayout: "registration",
//     layoutsDir: __dirname + "/views/layouts/"
//   })
// );

app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

const cors = require("cors");

app.use(compression());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(errorHandler);
app.use(cors());
app.use(router);

app.listen(process.env.PORT || 3333, () => {
  console.log("Welcome to INFOTREK.....");
});
