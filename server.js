const express = require("express");

const app = express();

// Route 1: Home page
app.get("/", (req, res) => {
    res.send("Welcome to my first deployed Node.js application!");
});

// Route 2: Student information API
app.get("/student", (req, res) => {
    res.json({
        id: 101,
        name: "Anu",
        course: "Node.js",
        status: "Active"
    });
});
// Use the port provided by the hosting platform
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
