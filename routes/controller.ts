import { Request, Response } from 'express';

export function mainView(req: Request, res: Response) {
  res.end("Hello World")
};

