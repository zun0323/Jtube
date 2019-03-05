import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("users!"));

export default userRouter;
