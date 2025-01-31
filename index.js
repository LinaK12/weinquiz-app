const express = require('express');
const path = require('path');  
const app = express();
const port = 3001;

// Statische Dateien im Oberordner bereitstellen
app.use(express.static(path.join(__dirname, '..')));  // '..' geht einen Ordner nach oben, um die Frontend-Dateien zu finden


// Fragen und Antworten direkt im Code definiert
const quizQuestions = [
  {
    question_text: "Woher kommt der sogenannte „Wein der Hundertjährigen“?",
    answers: [
      { answer_text: "Südtirol", is_correct: false },
      { answer_text: "Sardinien", is_correct: true },
      { answer_text: "Toskana", is_correct: false }
    ]
  },
  {
    question_text: "Für welchen Sturm ist die Steiermark bekannt?",
    answers: [
      { answer_text: "Südmärkischer Sturm", is_correct: false },
      { answer_text: "Schlichersturm", is_correct: true },
      { answer_text: "Steirer Sturm", is_correct: false }
    ]
  }
  // Weitere Fragen und Antworten hier hinzufügen
];

// API-Endpunkt für das Quiz
app.get('/quiz', (req, res) => {
  res.json(quizQuestions);  // Gibt die Fragen und verschleierten Antworten zurück
});

// Start des Servers
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});