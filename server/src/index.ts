import { server } from "./socket";
import "./socket";
const startServer = () => {
  server.listen(8080, () => console.log("server started"));
};

startServer();
