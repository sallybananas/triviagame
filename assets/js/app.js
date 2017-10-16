$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
    
    $("body").on("touchend", ".start-button", function(event){
        event.preventDefault();
        
        generateHTML();
    
        timerWrapper();
    
    });  // Closes start-button click
    
    $("body").on("click", ".start-button", function(event){
        // event.preventDefault();
        
        generateHTML();
    
        timerWrapper();
    
    }); // Closes start-button click
    
    $("body").on("touchend", ".answer", function(event){
        //answeredQuestion = true;
        event.preventDefault()
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            //alert("correct");
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            //alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    }); // Close .answer touch

    $("body").on("touchend", ".answer", function(event){
        //answeredQuestion = true;
        event.preventDefault()
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            //alert("correct");
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            //alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    }); // Close .answer touch

    $("body").on("click", ".answer", function(event){
        //answeredQuestion = true;
        // event.preventDefault()
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            //alert("correct");
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            //alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    }); // Close .answer click
    
    $("body").on("touchend", ".reset-button", function(event){
        event.preventDefault()
        resetGame();
    }); // Closes reset-button touch

    $("body").on("click", ".reset-button", function(event){
        // event.preventDefault()
        resetGame();
    }); // Closes reset-button click
    
    });  //  Closes jQuery wrapper
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<h4 class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></h4>" + "<h4 class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</h4>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  //  change to 4000 or other amount
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<h4 class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></h4>" + "<h4 class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</h4>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  //  change to 4000 or other amount
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<h4 class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></h4>" + "<h4 class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</h4>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000); //  change to 4000 or other amount
    }
    
    function generateHTML() {
        gameHTML = "<h4 class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></h4><h4 class='text-center'>" + questionArray[questionCounter] + "</h4><h4 class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</h4><h4 class='answer'>B. "+answerArray[questionCounter][1]+"</h4><h4 class='answer'>C. "+answerArray[questionCounter][2]+"</h4><h4 class='answer'>D. "+answerArray[questionCounter][3]+"</h4>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<h4 class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></h4>" + "<h4 class='text-center'>All done, here's how you did!" + "</h4>" + "<h4 class='summary-correct'>Correct Answers: " + correctTally + "</h4>" + "<h4>Wrong Answers: " + incorrectTally + "</h4>" + "<h4>Unanswered: " + unansweredTally + "</h4>" + "<h4 class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></h4>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["Memphis has been mentioned in more song lyrics than any other city.<br>How many times was it mentioned?", "Memphis is home to this large multi-national package delivery company?", "Memphis is considered the Capital of the World in this?", "In 1916 the worlds first self-service grocery store opened in Memphis.<br>It was named...?", "On July 5, 1954 what unknown artist recorded 'Thats All Right' at Sun Studio in Memphis, sparking the rock'n roll era and launching his career?", "The Leavitt Shell, in Overton Park, gave this artist his first paid musical gig?", "The modern artist Drake recorded a 2013 music video at this Memphis Recording Studio?", "This juke joint and bar was named by Esquire Magazine to be the 2nd coolest bar in America?"];
    var answerArray = [["1 million+", "10,000+", "1,000+", "100+"], ["FedEx","UPS","DHL","USPS"], ["Pecan Pie", "Collard Greens", "Pork Barbecue", "Grits"], ["Shoprite","5 & 10","Piggly Wiggly","Kroger"], ["Johnny Cash", "Carl Perkins", "Jerry Lee Lewis", "Elvis Presley"], ["Elvis","Johnny Cash","Little Richard","Gangsta Black"], ["Sun Studios", "Royal Studios", "Graceland Recording", "On the River Studios"], ["Pearls","Porkys","Earnestine & Hazel's","The Arcade"]];
    var imageArray = ["<img class='center-block img-right' src='assets/images/1000.png' width='200px' height='auto'>", "<img class='center-block img-right' src='assets/images/fedex.png' width='200px' height='auto'>", "<img class='center-block img-right' src='assets/images/centralbbq.png' width='200px' height='auto'>", "<img class='center-block img-right' src='assets/images/pigglywiggly.png' width='200px' height='auto'>", "<img class='center-block img-right' src='assets/images/elvis.png' width='200px' height='auto'>", "<img class='center-block img-right' src='assets/images/cash.png' width='200px' height='auto'>", "<img class='center-block img-right' src='assets/images/rs.png' width='200px' height='auto'>", "<img class='center-block img-right' src='assets/images/eandh.png' width='200px' height='auto'>"];
    var correctAnswers = ["C. 1,000+", "A. FedEx", "C. Pork Barbecue", "C. Piggly Wiggly", "D. Elvis Presley", "B. Johnny Cash", "B. Royal Studios", "C. Earnestine & Hazel's"];
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var clickSound = new Audio("sound/button-click.mp3");
    