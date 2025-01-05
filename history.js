document.addEventListener('DOMContentLoaded', function() {
    const timelineEvents = [
        { year: 1963, event: 'Unterzeichnung des Élysée-Vertrags' },
        { year: 1988, event: 'Gründung des Deutsch-Französischen Verteidigungs- und Sicherheitsrats' },
        { year: 2003, event: '40. Jahrestag des Élysée-Vertrags' },
        { year: 2019, event: 'Unterzeichnung des Aachener Vertrags' },
    ];

    const timeline = document.getElementById('timeline');

    timelineEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = `timeline-event ${index % 2 === 0 ? 'left' : 'right'}`;
        eventElement.innerHTML = `
            <div class="event-content">
                <h3>${event.year}</h3>
                <p>${event.event}</p>
                <button class="learn-more">Mehr erfahren</button>
            </div>
        `;
        timeline.appendChild(eventElement);

        eventElement.querySelector('.learn-more').addEventListener('click', function() {
            alert(`Mehr Informationen über das Ereignis im Jahr ${event.year}`);
        });
    });
});

