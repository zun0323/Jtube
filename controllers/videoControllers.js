import { video } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "home", video });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy });
};

export const uplode = (req, res) =>
  res.render("uplode", { pageTitle: "uplode" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });
