// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// CORS зөвшөөрөл
app.use(cors());
app.use(express.json());

// Түр хадгалах өгөгдөл (database оронд)
let projects = [
    { title: "Sample Project", description: "This is a test project" }
];

// GET — бүх проект авах
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// POST — шинэ проект нэмэх
app.post('/api/projects', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }
    const newProject = { title, description };
    projects.push(newProject);
    res.status(201).json(newProject);
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
