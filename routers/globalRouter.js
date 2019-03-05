import express from "express";
import routes from "../routes";

const grobalRouter = express.Router();

grobalRouter.get(routes.home, (req, res) => res.send("home!"));

export default grobalRouter;
