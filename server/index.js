import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
import router from "./route/route.js";



const port = 2023;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router)


app.listen(port, () => console.log(`Listening on port ${port}`));
