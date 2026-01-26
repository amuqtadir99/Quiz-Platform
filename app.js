/* ============================================
   EDUCATIONAL QUIZ PLATFORM - JAVASCRIPT
   ============================================ */

// Quiz questions data - STEM-focused with LaTeX support
const questions = [
    // ---------------- MATHEMATICS (LaTeX) ----------------
    {
        question: "Solve the equation: $2x + 5 = 13$",
        answers: [
            { text: "$x = 3$", correct: false },
            { text: "$x = 4$", correct: true },
            { text: "$x = 5$", correct: false },
            { text: "$x = 6$", correct: false }
        ]
    },
    {
        question: "What is the derivative of $f(x) = x^2$?",
        answers: [
            { text: "$2x$", correct: true },
            { text: "$x$", correct: false },
            { text: "$x^3$", correct: false },
            { text: "$2$", correct: false }
        ]
    },
    // ---------------- PHYSICS ----------------
    {
        question: "Which equation represents Newton's Second Law of Motion?",
        answers: [
            { text: "$E = mc^2$", correct: false },
            { text: "$F = ma$", correct: true },
            { text: "$V = IR$", correct: false },
            { text: "$p = mv$", correct: false }
        ]
    },
    {
        question: "What is the SI unit of electric current?",
        answers: [
            { text: "Volt", correct: false },
            { text: "Ohm", correct: false },
            { text: "Ampere", correct: true },
            { text: "Watt", correct: false }
        ]
    },
    // ---------------- CHEMISTRY ----------------
    {
        question: "Which chemical equation represents photosynthesis?",
        answers: [
            { text: "$6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$", correct: true },
            { text: "$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$", correct: false },
            { text: "$NaCl \\rightarrow Na^+ + Cl^-$", correct: false },
            { text: "$2H_2 + O_2 \\rightarrow 2H_2O$", correct: false }
        ]
    },
    {
        question: "What is the pH of a neutral solution at 25°C?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    // ---------------- AUSTRALIAN ENGLISH ----------------
    {
        question: "Which spelling is correct in Australian English?",
        answers: [
            { text: "Color", correct: false },
            { text: "Organize", correct: false },
            { text: "Colour", correct: true },
            { text: "Center", correct: false }
        ]
    },
    {
        question: "Which word is commonly used in Australian English?",
        answers: [
            { text: "Truck", correct: false },
            { text: "Apartment", correct: false },
            { text: "Lorry", correct: false },
            { text: "Ute", correct: true }
        ]
    },
    // ---------------- GENERAL KNOWLEDGE ----------------
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    }
];

// Answer option letters
const optionLetters = ['A', 'B', 'C', 'D'];

// DOM Elements - Get references to HTML elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");
const currentScoreElement = document.getElementById("current-score");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const progressPercentage = document.getElementById("progress-percentage");
const questionBadge = document.getElementById("question-badge");

// State Variables - Track quiz progress
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let seconds = 0;
let answerHistory = [];

/**
 * Initialize and start the quiz
 * Resets all variables and displays the first question
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    answerHistory = [];
    nextButton.innerHTML = "Continue →";
    
    // Show quiz section, hide results section
    quizSection.style.display = "block";
    resultsSection.classList.remove("show");
    
    // Start the timer
    startTimer();
    
    // Display the first question
    showQuestion();
}

/**
 * Start the quiz timer
 * Updates every second
 */
function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

/**
 * Stop the quiz timer
 */
function stopTimer() {
    clearInterval(timerInterval);
}

/**
 * Update timer display in MM:SS format
 */
function updateTimerDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerElement.textContent = 
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Display the current question and answer options
 */
function showQuestion() {
    resetState();
    
    // Get current question data
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    // Update question badge and text
    questionBadge.textContent = `Question ${questionNo}`;
    questionElement.textContent = currentQuestion.question;
    
    // Update progress indicators
    updateProgress();

    // Create answer buttons for each option
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-option");
        
        // Create option letter (A, B, C, D)
        const letterSpan = document.createElement("span");
        letterSpan.classList.add("option-letter");
        letterSpan.textContent = optionLetters[index];
        
        // Create answer text
        const textSpan = document.createElement("span");
        textSpan.textContent = answer.text;
        
        // Append both to button
        button.appendChild(letterSpan);
        button.appendChild(textSpan);
        
        // Add button to container
        answerButtons.appendChild(button);
        
        // Store if answer is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct; 
        }
        
        // Add click event listener
        button.addEventListener("click", (e) => selectAnswer(e.currentTarget, index, answer.correct));   
    });

    // Render LaTeX equations using MathJax
    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
    }
}

/**
 * Update progress bar and progress text
 */
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    progressPercent.textContent = Math.round(progress) + "%";
    progressPercentage.textContent = Math.round(progress) + "%";
}

/**
 * Reset the state for the next question
 * Removes all answer buttons and hides next button
 */
function resetState() {
    nextButton.style.display = "none";
    
    // Remove all existing answer buttons
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Handle answer selection
 * @param {HTMLElement} selectedBtn - The clicked button element
 * @param {number} answerIndex - Index of the selected answer
 * @param {boolean} isCorrect - Whether the answer is correct
 */
function selectAnswer(selectedBtn, answerIndex, isCorrect) {
    const correct = selectedBtn.dataset.correct === "true";
    
    // Mark selected answer as correct or incorrect
    if (correct) {
        selectedBtn.classList.add("correct");
        const checkIcon = document.createElement("span");
        checkIcon.classList.add("answer-icon");
        checkIcon.textContent = "✓";
        selectedBtn.appendChild(checkIcon);
        score++;
        currentScoreElement.textContent = score;
    } else {
        selectedBtn.classList.add("incorrect");
        const xIcon = document.createElement("span");
        xIcon.classList.add("answer-icon");
        xIcon.textContent = "✗";
        selectedBtn.appendChild(xIcon);
    }

    // Store answer in history for review
    answerHistory.push({
        questionIndex: currentQuestionIndex,
        isCorrect: correct
    });

    // Show correct answer and disable all buttons
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            if (!button.querySelector('.answer-icon')) {
                const checkIcon = document.createElement("span");
                checkIcon.classList.add("answer-icon");
                checkIcon.textContent = "✓";
                button.appendChild(checkIcon);
            }
        }
        button.disabled = true;
    }); 
    
    // Show next button
    nextButton.style.display = "block";
}

/**
 * Handle next button click
 * Move to next question or show results
 */
function handleNextButton() {
    currentQuestionIndex++; 
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/**
 * Display the final score and results screen
 */
function showScore() {
    stopTimer();
    
    // Hide quiz section
    quizSection.style.display = "none";
    
    // Calculate metrics
    const percentage = Math.round((score / questions.length) * 100);
    const incorrect = questions.length - score;
    
    // Determine performance message based on score
    let message = "";
    if (percentage === 100) message = "Outstanding performance! Perfect score achieved.";
    else if (percentage >= 80) message = "Excellent work! You have strong knowledge in this area.";
    else if (percentage >= 60) message = "Good effort! You're on the right track.";
    else if (percentage >= 40) message = "Fair attempt. Consider reviewing the material.";
    else message = "Keep studying! Practice makes perfect.";
    
    // Update results display
    document.getElementById("final-score").textContent = `${score}/${questions.length}`;
    document.getElementById("percentage").textContent = `Accuracy: ${percentage}%`;
    document.getElementById("final-time").textContent = timerElement.textContent;
    document.getElementById("performance-message").textContent = message;
    document.getElementById("correct-count").textContent = score;
    document.getElementById("incorrect-count").textContent = incorrect;
    document.getElementById("accuracy").textContent = percentage + "%";
    
    // Show answer review
    displayReview();
    
    // Show results section with animation
    resultsSection.classList.add("show");
}

/**
 * Display review of all answers
 * Shows which questions were answered correctly/incorrectly
 */
function displayReview() {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";
    
    questions.forEach((question, index) => {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        
        const isCorrect = answerHistory[index]?.isCorrect;
        
        const icon = document.createElement("span");
        icon.classList.add("review-item-icon");
        
        const text = document.createElement("span");
        text.classList.add("review-item-text");
        
        if (isCorrect) {
            reviewItem.classList.add("correct");
            icon.textContent = "✓";
            text.textContent = `Question ${index + 1}: Correct`;
        } else {
            reviewItem.classList.add("incorrect");
            icon.textContent = "✗";
            text.textContent = `Question ${index + 1}: Incorrect`;
        }
        
        reviewItem.appendChild(icon);
        reviewItem.appendChild(text);
        reviewList.appendChild(reviewItem);
    });
}

// Event Listeners
nextButton.addEventListener("click", handleNextButton);
restartButton.addEventListener("click", startQuiz);

// Start the quiz when page loads
startQuiz();