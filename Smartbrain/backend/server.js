const express = require("express");

const app = express();

app.use(express.json());

// app.use(express.static(__dirname + "/public"));

app.get("/hello", (req, res) => {
    res.send("Hiiii there!!!");
});

app.get("/", (req, res) => {
    console.log("okay");
    res.send(200);
});

app.get("/json", (req, res) => {
    const { name, region, time } = req.body;
    console.log("Got JSON!");
    console.log(name, "lives in", region,time, "!");
    res.send(200);
});

app.listen(3000);