document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Deutsch-Französische Hochschule',
            description: 'Ein Netzwerk von 194 Mitgliedshochschulen in Deutschland und Frankreich.',
            link: 'https://www.dfh-ufa.org/'
        },
        {
            title: 'Deutsch-Französisches Jugendwerk',
            description: 'Organisation für den Jugendaustausch zwischen beiden Ländern.',
            link: 'https://www.dfjw.org/'
        },
        {
            title: 'Arte',
            description: 'Deutsch-französischer Kultursender mit vielfältigem Programm.',
            link: 'https://www.arte.tv/'
        }
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">Mehr erfahren</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
});

