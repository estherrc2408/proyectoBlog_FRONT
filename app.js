const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

port = 4000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/", require("./routers/routerFront"));

app.use((_req, res) => {
  res.status(404).render("404", {
    error: 404,
    title:'404 not found',
    msg: "Not found",
    urlTitle: "Not found - Error 404",
  });
});

app.use('/log', require('./routers/routerLogAdmin'))

app.listen(port, () => console.log(`Server listening on port ${port}...`));
