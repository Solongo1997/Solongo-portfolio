const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const projects = [
  {
    title: "Project 1",
    link: "https://example.com",
    image: "/images/p1.jpg",
    tech: "HTML, CSS"
  },
  {
    title: "Project 2",
    link: "https://example2.com",
    image: "/images/p2.jpg",
    tech: "JavaScript"
  },
  {
    title: "Project 3",
    link: "https://example3.com",
    image: "/images/p3.jpg",
    tech: "Node.js"
  }
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
