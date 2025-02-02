import express, { Express, Router } from "express";
import { config } from "dotenv";
import authroute from "@/route/auth-route";
config();
const port = process.env.PORT;

const app: Express = express();
app.use(express.json());
app.use("/api/auth", authroute);

// sequelize
//   .authenticate()
//   .then((data) => {
//     console.log(data);
//     console.log("Connected to database successfully");
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
// })
// .catch((error) => {
//   console.log("Connection failed", error);
// });
