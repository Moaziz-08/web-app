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
  ]
  
  export default function Projects() {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Aktuelle Projekte</h1>
        
        <div className="mb-12">
          <p className="text-gray-600 text-center">
            Entdecken Sie aktuelle Initiativen und Projekte, die die deutsch-französische Zusammenarbeit stärken.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Mehr erfahren
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  