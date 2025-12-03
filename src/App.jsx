import React, { useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  // NEW STATES for scoring and submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const questions = [
    // Your array of 12 questions (kept for context)
    { id: 1, question: "Which language runs in the browser?", options: ["Java", "C", "Python", "JavaScript"], answer: "JavaScript" },
    { id: 2, question: "Which company created React?", options: ["Google", "Facebook", "Microsoft", "Amazon"], answer: "Facebook" },
    { id: 3, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style System", "Creative Styling Setup", "Control Style Syntax"], answer: "Cascading Style Sheets" },
    { id: 4, question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Markdown Language", "Hyperlink Markup Language", "HyperText Machine Language"], answer: "HyperText Markup Language" },
    { id: 5, question: "Which hook is used for side effects in React?", options: ["useState", "useEffect", "useRef", "useMemo"], answer: "useEffect" },
    { id: 6, question: "Which array method returns a NEW array?", options: ["forEach", "map", "push", "splice"], answer: "map" },
    { id: 7, question: "Which HTTP method is used to create data?", options: ["GET", "POST", "PUT", "DELETE"], answer: "POST" },
    { id: 8, question: "Which database is NoSQL?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: "MongoDB" },
    { id: 9, question: "What does API stand for?", options: ["Application Programming Interface", "Application Program Internet", "Applied Programming Interaction", "Advanced Programmer Interface"], answer: "Application Programming Interface" },
    { id: 10, question: "Which one is a JavaScript framework?", options: ["Laravel", "Django", "React", "Flask"], answer: "React" },
    { id: 11, question: "What symbol is used for comments in JavaScript?", options: ["//", "", "#", "/* */"], answer: "//" },
    { id: 12, question: "Which Git command is used to upload local commits to GitHub?", options: ["git pull", "git init", "git push", "git checkout"], answer: "git push" }
  ];

  // Navigation handlers (circular logic)
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

  // Answer selection handler
  const handleAnswerSelection = (questionId, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedOption,
    });
  };

  // NEW FUNCTION: Calculates score and submits the quiz
  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach(q => {
      // Check if the user's answer matches the correct answer
      if (userAnswers[q.id] === q.answer) {
        calculatedScore++;
      }
    });
    setFinalScore(calculatedScore);
    setIsSubmitted(true);
  };

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = userAnswers[currentQuestion.id];
  const isLastQuestion = currentIndex === questions.length - 1;

  // --- Conditional Rendering ---
  
  // Renders the review screen after submission
  if (isSubmitted) {
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>🎉 Quiz Results</h2>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          You scored {finalScore} out of {questions.length}!
        </p>

        <hr style={{ margin: '20px 0' }} />

        <h3>Detailed Review:</h3>
        {questions.map((q) => {
          const userAnswer = userAnswers[q.id];
          const isCorrect = userAnswer === q.answer;
          const reviewStyle = {
            border: `2px solid ${isCorrect ? 'green' : 'red'}`,
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            backgroundColor: isCorrect ? '#f0fff0' : '#fff0f0',
          };

          return (
            <div key={q.id} style={reviewStyle}>
              <h4>{q.id}. {q.question}</h4>
              <p>
                **Your Answer:** <span style={{ fontWeight: 'bold', color: isCorrect ? 'green' : 'red' }}>
                  {userAnswer || "No Answer"} 
                </span>
                {isCorrect ? ' ✅' : ' ❌'}
              </p>
              {!isCorrect && <p> **Correct Answer:** <span style={{ color: 'green' }}>{q.answer}</span></p>}
              
              {/* Option Review Display */}
              <div style={{ marginTop: '10px' }}>
                {q.options.map((option) => {
                  let optionStyle = { padding: '5px', margin: '2px', display: 'inline-block', borderRadius: '3px', border: '1px solid #ccc' };
                  
                  if (option === q.answer) {
                    optionStyle.backgroundColor = '#a8e6cf'; // Correct Answer Highlight
                    optionStyle.fontWeight = 'bold';
                  } else if (option === userAnswer && !isCorrect) {
                    optionStyle.backgroundColor = '#ffc8c8'; // Incorrectly Selected Answer
                  }

                  return <span key={option} style={optionStyle}>{option}</span>;
                })}
              </div>
            </div>
          );
        })}
        <button onClick={() => setIsSubmitted(false)} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
          Review Complete / Start Again
        </button>
      </div>
    );
  }

  // Renders the active question view
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Quiz App</h2>

      {/* Question Card */}
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        <h2>Question {currentIndex + 1} of {questions.length}</h2>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{currentQuestion.question}</p>

        {/* Answer Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelection(currentQuestion.id, option)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  backgroundColor: isSelected ? '#a8e6cf' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation and Submission Buttons */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handlePrev}>Previous</button>
        
        {isLastQuestion ? (
          <button 
            onClick={handleSubmitQuiz} 
            style={{ backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold' }}
          >
            Submit Quiz & See Score
          </button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;