'use client'

import { useState } from 'react'

const quizQuestions = [
  {
    question: 'Welche Stadt ist die Hauptstadt Frankreichs?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rom'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Welcher Fluss fließt durch beide Länder?',
    options: ['Donau', 'Seine', 'Rhein', 'Elbe'],
    correctAnswer: 'Rhein'
  },
  {
    question: 'Wer schrieb "Faust"?',
    options: ['Victor Hugo', 'Johann Wolfgang von Goethe', 'Molière', 'Friedrich Schiller'],
    correctAnswer: 'Johann Wolfgang von Goethe'
  }
]

export default function Culture() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Kultureller Austausch</h1>
      
      <div className="mb-12">
        <p className="text-gray-600 text-center">
          Der kulturelle Austausch zwischen Deutschland und Frankreich ist vielfältig und reich. 
          Testen Sie Ihr Wissen über beide Kulturen in unserem Quiz!
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Quiz beendet!</h2>
            <p className="text-xl">Sie haben {score} von {quizQuestions.length} Fragen richtig beantwortet.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Frage {currentQuestion + 1}</h2>
            <p className="text-lg mb-4">{quizQuestions[currentQuestion].question}</p>
            <div className="space-y-2">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="w-full text-left p-2 rounded bg-gray-100 hover:bg-gray-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

