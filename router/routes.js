const express = require("express");
const router = express.Router();
const path = require("path");
const { getdetails } = require("../controllers/register");

router.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/static/index.html"));
});

router.get("/registration", (req, res) => {
  res.render("layout/registration");
});

// router.get("/gallery", (req, res) => {
//   res.sendFile(path.resolve("./public/static/gallery.html"));
// });

router.get("/events", (req, res) => {
  res.sendFile(path.resolve("./public/static/events.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.resolve("./public/static/contact.html"));
});

router.get("/team", (req, res) => {
  res.sendFile(path.resolve("./public/static/team.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.resolve("./public/static/about.html"));
});

router.post("/register", getdetails);



module.exports = router;
