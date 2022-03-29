const express = require("express");
const cors = require("cors");

const postRoute = require("./route/post");
const aqiRoute = require("./route/aqi");

require("./config")();
const app = express();
app.use(cors());

app.use("/api/v1/posts", postRoute);
app.use("/api", aqiRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});