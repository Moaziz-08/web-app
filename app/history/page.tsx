'use client'

import { useState } from 'react'

const timelineEvents = [
  { year: 1963, event: 'Unterzeichnung des Élysée-Vertrags' },
  { year: 1988, event: 'Gründung des Deutsch-Französischen Verteidigungs- und Sicherheitsrats' },
  { year: 2003, event: '40. Jahrestag des Élysée-Vertrags' },
  { year: 2019, event: 'Unterzeichnung des Aachener Vertrags' },
]

export default function History() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Historischer Überblick</h1>
      
      <div className="mb-12">
        <p className="text-gray-600 text-center">
          Die deutsch-französischen Beziehungen haben eine lange und bewegte Geschichte. 
          Entdecken Sie wichtige Meilensteine auf unserer interaktiven Zeitleiste.
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'}`}>
            <div className="relative w-1/2 p-4 bg-white shadow-md rounded">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 right-0 translate-x-1/2"></div>
              <h3 className="text-xl font-semibold">{event.year}</h3>
              <p className="text-gray-600">{event.event}</p>
              <button 
                onClick={() => setSelectedEvent(event)}
                className="mt-2 text-blue-600 hover:underline"
              >
                Mehr erfahren
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-semibold mb-4">{selectedEvent.year}</h2>
            <p className="text-gray-600 mb-4">{selectedEvent.event}</p>
            <button 
              onClick={() => setSelectedEvent(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

