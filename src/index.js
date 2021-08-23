const data = require("./data");
const express = require("express");
const app = express();

const data_users = data.users[0];

app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

app.use(require("body-parser").urlencoded({ extended: false }));

app.post("/users", function (req, res) {
  res.json({ message: req.body });
});

app.get("/users", function (req, res) {
  const user = req.params.user;
  res.render("users", { users: data.users });
});

app.get("/schedules", function (req, res) {
  const schedule = req.params.schedule;
  res.render("schedules", { schedules: data.schedules });
});

app.get("/userExample", function (req, res) {
  res.render("userExample", { users: data.users[0] });
});

app.get("/scheduleExample", function (req, res) {
  res.render("scheduleExample", { schedules: data.schedules[0] });
});

app.get("/user/new", function (req, res) {
  res.render("user/new");
});

app.post("/add_User", function (req, res) {
  console.log(req.body);
});

app.get("/schedules/new", function (req, res) {
  res.render("schedules/new");
});

app.post("/add_Schedule", function (req, res) {
  console.log(req.body);
});

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000);
