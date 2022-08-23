const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const blogs = require("./routes/blogs");
const requests = require("./routes/request");
const user = require("./routes/user");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Static folder visible
app.use(express.static(path.join(__dirname, "public/images")));

app.use("/api/blogs/", blogs);
app.use("/api/requests/", requests);
app.use("/api/user/", user);

mongoose.connect(process.env.MONGO_URI);
app.listen(process.env.PORT, () => {
  console.log(`server's up and running on ${process.env.PORT}`);
});
