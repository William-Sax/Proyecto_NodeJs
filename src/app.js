import express from "express";
import morgan from "morgan";

const app = express();

//Setting
app.set("port", 4000);

//Middelewares
app.use(morgan("dev"));


export default app;