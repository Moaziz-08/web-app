import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Deutsch-Französische Einheit – Gemeinsam für die Zukunft
      </h1>
      
      <div className="mb-12">
        {/* Image carousel placeholder */}
        <div className="bg-gray-300 h-64 flex items-center justify-center text-gray-600">
          Image Carousel Placeholder
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Willkommen</h2>
          <p className="text-gray-600">
            Entdecken Sie die starke Verbindung zwischen Deutschland und Frankreich. 
            Unsere Plattform bietet Einblicke in die gemeinsame Geschichte, 
            kulturelle Austauschprogramme und aktuelle Kooperationsprojekte.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Aktuelle Highlights</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Deutsch-Französischer Tag am 22. Januar</li>
            <li>Neue Austauschprogramme für Studenten</li>
            <li>Gemeinsame Klimaschutzinitiative gestartet</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/history" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Entdecken Sie unsere Geschichte
        </Link>
      </div>
    </div>
  )
}

