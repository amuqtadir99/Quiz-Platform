# 📚 Educational Quiz Platform

A modern, responsive quiz application built with vanilla JavaScript, HTML5, and CSS3. Features STEM-based questions with LaTeX mathematical equation rendering, real-time scoring, timer functionality, and comprehensive performance analytics.

![Quiz Platform](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Features

- ✅ **10 STEM Questions** - Mathematics, Physics, Chemistry, and General Knowledge
- ✅ **LaTeX Support** - Mathematical equations rendered using MathJax
- ✅ **Real-time Timer** - Track quiz completion time
- ✅ **Progress Tracking** - Visual progress bar with percentage
- ✅ **Instant Feedback** - Immediate correct/incorrect indication
- ✅ **Performance Analytics** - Detailed results with metrics
- ✅ **Answer Review** - Review all answers after completion
- ✅ **Fully Responsive** - Works on mobile, tablet, and desktop
- ✅ **Professional UI** - Clean, educational design theme

## 🚀 Demo

[Live Demo](#) _(Add your deployed link here)_

## 📁 Project Structure

```
quiz-app/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── app.js              # Quiz logic and functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies & Concepts Used

### **Core Technologies**
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling and animations
- **JavaScript (ES6+)** - Dynamic functionality and logic
- **MathJax 3** - LaTeX mathematical equation rendering

### **Web Development Concepts**

#### **1. DOM Manipulation**
- `document.getElementById()` - Accessing HTML elements
- `document.createElement()` - Creating dynamic elements
- `appendChild()` / `removeChild()` - Managing DOM tree
- `classList.add()` / `classList.remove()` - Dynamic styling

#### **2. Event Handling**
- Click events for user interactions
- Event listeners with `addEventListener()`
- Event delegation for dynamic elements
- Callback functions for event handlers

#### **3. JavaScript Programming Concepts**
- **Arrays & Objects** - Data structure for questions
- **Template Literals** - String interpolation
- **Arrow Functions** - Modern function syntax
- **Array Methods** - `forEach()`, `map()`, `filter()`
- **Conditional Statements** - If/else logic
- **Loops** - Iteration through questions and answers
- **setInterval()** - Timer functionality
- **Local State Management** - Variables to track quiz state

#### **4. CSS Techniques**
- **Flexbox** - Flexible box layout
- **CSS Grid** - Two-dimensional layouts
- **CSS Variables** - Reusable color values
- **Transitions** - Smooth animations
- **Keyframe Animations** - Custom animations
- **Media Queries** - Responsive breakpoints
- **Box Model** - Padding, margin, border
- **Pseudo-classes** - `:hover`, `:disabled`

#### **5. Responsive Design**
- Mobile-first approach
- Flexible grid systems
- Breakpoints for different screen sizes:
  - Desktop: > 768px
  - Tablet: 481px - 768px
  - Mobile: ≤ 480px

#### **6. User Experience (UX) Patterns**
- Immediate visual feedback
- Progress indicators
- Loading states
- Disabled states for answered questions
- Clear call-to-action buttons
- Accessible color contrast

#### **7. Software Design Patterns**
- **Separation of Concerns** - HTML, CSS, JS in separate files
- **DRY Principle** - Don't Repeat Yourself
- **Modular Functions** - Single responsibility principle
- **State Management** - Centralized state variables
- **Event-driven Architecture** - User interactions trigger updates

## 📦 Installation & Setup

### **Method 1: Direct Download**

1. **Clone or download** this repository
```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
```

2. **Open** `index.html` in your web browser
```bash
# On Mac
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

### **Method 2: Live Server (Recommended for Development)**

1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
3. Right-click on `index.html` → **Open with Live Server**

## 💻 Usage

1. **Start Quiz** - Quiz begins automatically when page loads
2. **Select Answer** - Click on any answer option (A, B, C, or D)
3. **Get Feedback** - Correct/incorrect indication appears instantly
4. **Continue** - Click "Continue" button to move to next question
5. **View Results** - See comprehensive performance metrics
6. **Restart** - Click "Take Quiz Again" to restart

## 🎨 Customization

### **Add More Questions**

Edit `app.js` and add to the `questions` array:

```javascript
{
    question: "Your question here?",
    answers: [
        { text: "Option A", correct: false },
        { text: "Option B", correct: true },
        { text: "Option C", correct: false },
        { text: "Option D", correct: false }
    ]
}
```

### **Use LaTeX in Questions**

Wrap mathematical expressions in `$` signs:

```javascript
{
    question: "Solve: $x^2 + 5x + 6 = 0$",
    answers: [
        { text: "$x = -2, -3$", correct: true },
        { text: "$x = 2, 3$", correct: false }
    ]
}
```

### **Change Color Scheme**

Edit `styles.css` - Find and replace these colors:

```css
/* Primary Blue */
#0066cc → Your color

/* Success Green */
#2e7d32 → Your color

/* Error Red */
#c62828 → Your color
```

## 🧪 Technical Implementation Details

### **Timer System**
```javascript
setInterval(() => {
    seconds++;
    updateTimerDisplay();
}, 1000);
```
- Updates every 1000ms (1 second)
- Formats time as MM:SS
- Stops when quiz completes

### **Progress Calculation**
```javascript
const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
progressBar.style.width = progress + "%";
```
- Calculates percentage based on current position
- Updates progress bar width dynamically

### **Answer Validation**
```javascript
const correct = selectedBtn.dataset.correct === "true";
```
- Uses HTML5 data attributes
- Compares with strict equality
- Prevents type coercion issues

### **LaTeX Rendering**
```javascript
if (window.MathJax) {
    MathJax.typesetPromise();
}
```
- Checks if MathJax is loaded
- Re-renders equations after DOM updates
- Handles asynchronous loading

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🔧 Future Enhancements

- [ ] Question categories/difficulty levels
- [ ] User authentication
- [ ] Leaderboard system
- [ ] Save progress to localStorage
- [ ] Export results as PDF
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Question randomization
- [ ] Timed questions (individual timers)
- [ ] Sound effects for feedback

## 📊 Code Statistics

- **Total Lines:** ~900 lines
- **HTML:** ~100 lines
- **CSS:** ~400 lines
- **JavaScript:** ~400 lines
- **Questions:** 10 (easily expandable)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Abdul Muqtadir**  
- GitHub: [@witwebsolutions](https://github.com/witwebsolutions)
- Website: [www.witweb.com.au](https://www.witweb.com.au)

## 🙏 Acknowledgments

- [MathJax](https://www.mathjax.org/) - Beautiful math rendering
- [Google Fonts](https://fonts.google.com/) - Typography
- Australian educational curriculum for question inspiration

## 📧 Contact

For questions or feedback, please reach out through:
- GitHub Issues
- Email: contact@witweb.com.au

---

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ by Abdul Muqtadir
