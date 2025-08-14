const apiUrl = 'http://localhost:5000/api/projects';

async function loadProjects() {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data); // Test output
    } catch (err) {
        console.error('Error loading projects:', err);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
