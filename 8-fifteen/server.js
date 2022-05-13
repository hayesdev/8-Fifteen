const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

const url =
  "https://0d245d25-e87d-4603-bda4-9989ef544c6f-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
  "AstraCS:NsjPZbZvovPaODIIFaSGumIq:8e0ab84ca0115f488043e42d03e34cc14c135c2e60f6c0867835d866a2265aae";

app.get("/app", (req, res) => {
  res.status(200).send("<h1>App</h1>");
});

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "PORT",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}...`));
