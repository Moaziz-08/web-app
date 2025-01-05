document.addEventListener('DOMContentLoaded', function() {
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
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const submitButton = document.getElementById('submit');
    const resultElement = document.getElementById('result');

    function loadQuestion() {
        const question = quizQuestions[currentQuestion];
        questionElement.textContent = question.question;
        answersElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(button));
            answersElement.appendChild(button);
        });
        submitButton.style.display = 'none';
        resultElement.textContent = '';
    }

    function selectAnswer(selectedButton) {
        answersElement.querySelectorAll('button').forEach(button => {
            button.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
        submitButton.style.display = 'block';
    }

    submitButton.addEventListener('click', () => {
        const selectedButton = answersElement.querySelector('.selected');
        if (selectedButton) {
            const selectedAnswer = selectedButton.textContent;
            const question = quizQuestions[currentQuestion];
            if (selectedAnswer === question.correctAnswer) {
                score++;
                resultElement.textContent = 'Richtig!';
            } else {
                resultElement.textContent = `Falsch. Die richtige Antwort ist ${question.correctAnswer}.`;
            }
            currentQuestion++;
            if (currentQuestion < quizQuestions.length) {
                setTimeout(loadQuestion, 2000);
            } else {
                setTimeout(() => {
                    questionElement.textContent = `Quiz beendet! Ihr Ergebnis: ${score} von ${quizQuestions.length}`;
                    answersElement.innerHTML = '';
                    submitButton.style.display = 'none';
                }, 2000);
            }
        }
    });

    loadQuestion();
});

