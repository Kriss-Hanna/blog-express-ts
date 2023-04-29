const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
import "dotenv/config";

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, console.log(`SERVER STARTED ON ${PORT}`));
