const express = require("express");

const app = express();

app.get("/hello", (request, response) => {
    response.send("Hiiii there!!!")
});

app.listen(3000);