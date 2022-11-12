import express, { Application } from "express";
import { databaseConnection } from "./config/database";
import cors from "cors";
import { errorMiddleWare } from "./middlewares/error.middleware";
import { staffRoute } from "./routes/staff.route";

const app: Application = express();

const port = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());
app.use(errorMiddleWare);
app.use("/api/staff", staffRoute);

app.listen(port, () => {
  databaseConnection();
  console.log("Server running on: " + port);
});
