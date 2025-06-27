import app from "./app";

const startServer = () => {
  app.listen(8080, () => console.log("server started"));
};

startServer();
