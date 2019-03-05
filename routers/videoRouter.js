import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("videos!"));

export default videoRouter;
