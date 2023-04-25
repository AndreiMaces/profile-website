const https = require("https");
const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
})

http.createServer(app).listen(3000);
