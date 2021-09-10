

// to prevent the code inthe the function from interferng with other program variables

(function (){


    var score;
    
    // To create the function constructor in other to build the questions
function Question (question, options, answer){
    this.question = question,
    this.options = options,
    this.answer = answer
};


//creating a method (prototype) to display the questions and the options
Question.prototype.displayquestion = function(){
    console.log(this.question);


    // //to display the answers in the array,
    for (var i=0; i < this.options.length; i++)
    {
        console.log (i + ': ' + this.options[i]);
    }
};

//For keeping score create an array
score = [0];

scoreupdate = () =>{
    score = parseInt(score) + 1;
    console.log('Your score: ' + score);
};


// creating method (prototype) to validate user answer.
Question.prototype.checkanswer = function(ans){
    if (ans === this.answer){
        console.log('Correct!');
        scoreupdate();
        console.log('**input *****exit****** if you wish to end the quiz**');
    }else{
        console.log('Ooh.. wrong answer!');
        console.log('Your score: ' + score);
    }
}

//Using the new methood to create questions with the function constructor
var q1 = new Question('Computer is an electronic Machine?', ['yes', 'No'], 0);

var q2 = new Question('Javascript is the same as Java?', ['yes', 'No', 'i dont know'], 1);

var q3 = new Question ('A baby dog is called what?', ['chick', 'piglet', 'puppy', 'i dont know'], 2);

    //Store the questions in an array to access them randomly.
    var questions = [q1, q2, q3];



//To let the question loop after answering a question
function nextquestion(){

//create a random number for selection of the questions in the array
var n = Math.floor(Math.random() * questions.length);

//select a question to display using the prototype method.
questions[n].displayquestion();





//to collect answer from users
var userinput = prompt('Please, enter your answer into the box');


//To stop the quiz.
if (userinput !== 'exit'){
    //To validate answer on the particular question, we call the method
    questions[n].checkanswer(parseInt(userinput));

    // To call the next question
    nextquestion();
}else{
    console.log('Thank you, Your Total score is: '+ score );
}


};


nextquestion();


})();


