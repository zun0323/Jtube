export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "search" });
export const uplode = (req, res) =>
  res.render("uplode", { pageTitle: "uplode" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });
