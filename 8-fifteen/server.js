const express = require("express");
const app = express();

app.get("/app", (req, res) => {
  res.status(200).send("<h1>App</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`));
