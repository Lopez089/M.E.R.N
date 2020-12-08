import express from "express";
import morgan from "morgan";
import path from "path";

// const { mongoose } = require('./database')

const app = express();

// SETTINGS
app.set("port", process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/api", require("./src/routes/routes.ts"));

// STATIC FILES
app.use(express.static(path.join(__dirname, "./src/public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
