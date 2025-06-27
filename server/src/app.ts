import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  try {
    res.send("pong").status(200);
  } catch (error) {
    res.send("server error").status(500);
  }
});

export default app;
