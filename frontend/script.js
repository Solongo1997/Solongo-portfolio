fetch('http://localhost:5000/api/projects')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('project-section');
    container.innerHTML = projects.slice(0, 3).map(p => `
      <div class="card">
        <figure class="card-img">
          <a href="${p.link}" target="_blank">
            <img src="${p.image}" alt="${p.title}" />
            <figcaption><span>${p.tech}</span></figcaption>
          </a>
        </figure>
        <div class="card-content">
          <h4>${p.title}</h4>
          <a href="${p.link}" target="_blank">${p.link}</a>
        </div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Fetch error:', err));
