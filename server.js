const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.listen(port, () => console.log(`Listening on port ${process.env.PORT}`));
gi;
