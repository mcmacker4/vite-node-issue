import express from "express";

const app = express();

app.use((_req, res) => {
  res.end("What");
});

app.listen(8080, () => console.log("Listening..."));
