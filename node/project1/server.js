const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/warriors", (req, res) => {
    const warriors = [];
    warriors[0] = {
        name: "Knight",
        weapon: "sword & shield",
        attack: "mounted combat",
        behavior: "on guard",
        features: ["noble", "aggressive"],
        img: "images/knight.jpg"
    };
    warriors[1] = {
        name: "Samurai",
        weapon: "katana",
        attack: "on foot",
        behavior: "on offense",
        features: ["loyalty", "honor", "skill"],
        img: "images/samurai.jpg"
    };
    warriors[2] = {
        name: "Ninja",
        weapon: "knives",
        attack: "assassination",
        behavior: "unknown",
        features: ["quiet", "intelligent", "agile"],
        img: "images/ninja.jpg"
    };
    warriors[3] = {
        name: "Viking",
        weapon: "axe",
        attack: "in groups",
        behavior: "ferocious",
        features: ["family-centered", "aggressive"],
        img: "images/viking.jpg"
    };
    warriors[4] = {
        name: "Spartan",
        weapon: "spear",
        attack: "mounted combat",
        behavior: "defensive",
        features: ["tough", "aggressive", "on edge"],
        img: "images/spartan.jpg"
    };

    res.json(warriors);
});

app.listen(3000, () => {
    console.log("listening");
});