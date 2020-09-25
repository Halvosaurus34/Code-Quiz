var quizData = [
    {
        question: 'Commonly used data types do NOT include:',
        answer1: 'Strings',
        answer2: 'Alerts',
        answer3: 'Booleans',
        answer4: 'Numbers',
        correct: 'answer2'
    }, {
        question: 'The condiiton in an if / else statement is enclosed within _____ .',
        answer1: 'Quotes',
        answer2: 'Curly Brackets',
        answer3: 'Parenthases',
        answer4: 'Square Brackets',
        correct: 'answer3'
    }, {
        question: 'The most popular js framework right now is:',
        answer1: 'React.js',
        answer2: 'Angular.js',
        answer3: 'jQuery',
        answer4: 'Svelte',
        correct: 'answer1'
    }, {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answer1: 'Commas',
        answer2: 'Curly Brackets',
        answer3: 'Quotes',
        answer4: 'Parenthases',
        correct: 'answer3'
    }, {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer1: 'JavaScript',
        answer2: 'Terminal/Bash',
        answer3: 'For loops',
        answer4: 'Console.log',
        correct: 'answer4'
    }, 


];

var questionEl = document.getElementById('question')
var a_text = document.getElementById('answer1');
var b_text = document.getElementById('answer2');
var c_text = document.getElementById('answer3');
var d_text = document.getElementById('answer4');
var currentQuestion = 0;
var correctAns = ""

//loads in question
function loadQuiz() {
    var currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.answer1
    b_text.innerText = currentQuizData.answer2
    c_text.innerText = currentQuizData.answer3
    d_text.innerText = currentQuizData.answer4
    correctAns = currentQuizData.correct

    currentQuestion++
}

var listenEl = document.getElementById('questionCon')
//Listens for a button click
listenEl.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        //check if the button press was correct
        if (event.target.id == correctAns)  {
            console.log(`[correctAns] you guessed correct`)
            document.getElementById('wrongRight').innerHTML = '<h5>Correct!</h5>'
        } else {
            console.log("WRONG")
            document.getElementById('wrongRight').innerHTML = '<h5>Incorrect!</h5>'
            time -= 10;
        }
        //load next question when button is pressed
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            //store score and change sites
            saveScore()
            // localStorage.score = score
            location.replace("finish.html")
        }
    }
  });

var navTimer = document.getElementById('navTimer');
var time = 60
var score = []
  
//starts the quiz timer
function quizTimer() {
    var intervalSet = setInterval(function() {
        navTimer.innerText = `Time Left: ${time}`
        time--;
        score = time
        //if time runs out, game over
        if (time < 1) {
            clearInterval(intervalSet)
            saveScore()
            // localStorage.score = score
            location.replace("finish.html")
        }
    }, 1000)
}

function saveScore(){
    
    var scoreList = JSON.parse ( localStorage.scoreList || "[]" )
    scoreList.push(score);
    localStorage.scoreList = JSON.stringify( scoreList);
    
}    
//initializes functions
loadQuiz();
quizTimer();