import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import router from "./routes/userRoutes.js";
import { notFound, errorHnadler } from "./middleware/errorMiddleware.js";

import { Dbconnection } from "./config/dbconnection.js";
Dbconnection();
app.use("/api/users", router);

app.use(notFound);
app.use(errorHnadler);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}....`));

// time 34 min
