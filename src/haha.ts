import { Express } from "express";

export default (app: Express) => {
  app.get('/haha', (req, res, next) => {
    res.send('하하');
  })
}