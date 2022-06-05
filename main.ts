import express from "express";
import haha from './src/haha';

const app = express();

app.listen(8080, function() {
  console.log("listening on 8080");
});

haha(app);