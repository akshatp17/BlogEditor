const express = require("express");
const connectDB = require("./db");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use("/api", require("./routers/blogsRouter"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
