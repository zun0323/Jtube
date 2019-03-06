import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import grobalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import routes from "./routes";
import { localMiddleware } from "./middlewares";

const app = express();

app.use(helmet());

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(localMiddleware);

app.use(routes.home, grobalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
