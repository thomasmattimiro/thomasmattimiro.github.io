async function loadDatabases() {

    const response = await fetch('data/databases.json');
    const databases = await response.json();

    const container =
        document.getElementById('database-grid');

    databases.forEach(db => {

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <h3>${db.title}</h3>

            <p>
                <strong>Status:</strong>
                ${db.status}
            </p>

            <p>${db.description}</p>

            <div class="tech-container">
                ${db.technologies
                    .map(t =>
                        `<span class="tech-tag">${t}</span>`)
                    .join('')}
            </div>

            <p>
                <strong>Business Value:</strong>
                ${db.businessValue}
            </p>

            ${
                db.github
                ? `<a href="${db.github}" target="_blank">
                    View Repository
                   </a>`
                : ''
            }
        `;

        container.appendChild(card);
    });
}

loadDatabases();