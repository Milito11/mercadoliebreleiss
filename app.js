const path = require("path");

const express = require ("express");
const app = express ();

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor funcionando");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});


