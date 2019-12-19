


// Global Variables
var submitScore = document.getElementById("submit")
var endPage = document.getElementById("end-screen")
var feedbackEl = document.getElementById("feedback");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var questionIndex = 0;
var time = 120;
// var timerId;

startBtn.onclick= startQuiz;
// Main logic
function startQuiz(){
    var hideScreen = document.getElementById("start-screen");
    hideScreen.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
   var timerId = setInterval (function(){
        
        if (time <= 0){
            
        // clearInterval(timerId);
        
        }
        time--;
        timerEl.textContent = time;
            
    },1000);

    questionArray();
}

function questionArray(){
    var getQuestions = questions[questionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = getQuestions.title;
    
    choicesEl.innerHTML = "";
    
    getQuestions.choices.forEach(function(choice, index){
        
        var choiceIndex = document.createElement("button");
        choiceIndex.setAttribute("class", "choice");
        choiceIndex.setAttribute("value", choice);
        
        choiceIndex.textContent = index + 1 + "." + choice;
        
        choiceIndex.onclick = answer;
        choicesEl.appendChild(choiceIndex);
    });
    
    
}
function answer(){
    console.log("inside of answer")
    if(this.value!==questions[questionIndex].answer){
        time = time -15;
        if(time <0){
            time = 0;
        }
            
        timerEl.textContent = time;
        feedbackEl.textContent = "wrong!";
        
    }else{
        feedbackEl.textContent = "correct!";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    questionIndex++;
    
    if(questionIndex === questions.length){
        endQuiz();
        console.log("=length")
    }else{
console.log("length not equal")
        startQuiz();
    }
    // save high scores
}

            function endQuiz(){
//     console.log("inside end quiz")
        clearInterval(timerId);
//     questionsEl.setAttribute("class", "hide");
//     endPage.removeAttribute("class", "hide");
//     submitScore.removeAttribute("class", "hide");
        questionsEl.setAttribute("class", "hide");
        endPage.removeAttribute("class", "hide");
        submitScore.removeAttribute("class", "hide");
    
// }


//event listeners
startBtn.addEventListener("click", startQuiz)





// startBtn.onclick= startQuiz;