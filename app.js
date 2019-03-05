import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (req, res) => res.send("Home!"));
app.get("/videos", (req, res) => res.send("Video!"));
app.get("/users", (req, res) => res.send("Users!"));

export default app;
