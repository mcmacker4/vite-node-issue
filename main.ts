import express from "express";

const app = express();

app.use((_req, res) => {
  res.end("Hello World");
});

app.listen(8080, () => console.log("Listening..."));
