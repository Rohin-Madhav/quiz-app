import React, { useState } from 'react'

function App() {
  const questions = useState([
    {
      id: 1,
      question: "Which language runs in the browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      id: 2,
      question: "Which company created React?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook"
    },
  {
      id: 3,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style System",
        "Creative Styling Setup",
        "Control Style Syntax"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      id: 4,
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Markdown Language",
        "Hyperlink Markup Language",
        "HyperText Machine Language"
      ],
      answer: "HyperText Markup Language"
    },
    {
      id: 5,
      question: "Which hook is used for side effects in React?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useEffect"
    },
    {
      id: 6,
      question: "Which array method returns a NEW array?",
      options: ["forEach", "map", "push", "splice"],
      answer: "map"
    },
    {
      id: 7,
      question: "Which HTTP method is used to create data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: "POST"
    },
    {
      id: 8,
      question: "Which database is NoSQL?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      answer: "MongoDB"
    },
    {
      id: 9,
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Application Program Internet",
        "Applied Programming Interaction",
        "Advanced Programmer Interface"
      ],
      answer: "Application Programming Interface"
    },
    {
      id: 10,
      question: "Which one is a JavaScript framework?",
      options: ["Laravel", "Django", "React", "Flask"],
      answer: "React"
    },
    {
      id: 11,
      question: "What symbol is used for comments in JavaScript?",
      options: ["//", "<!-- -->", "#", "/* */"],
      answer: "//"
    },
    {
      id: 12,
      question: "Which Git command is used to upload local commits to GitHub?",
      options: ["git pull", "git init", "git push", "git checkout"],
      answer: "git push"
    }
  ])

  console.log(questions);
  

  return (
    <div>
      Hello
    </div>
  )
}

export default App

