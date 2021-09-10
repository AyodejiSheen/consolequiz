var q1, q2, q3, q4, q5;

q1 = document.querySelector('#question1');
q2 = document.querySelector('#question2');
q3 = document.querySelector('#question3');
q4 = document.querySelector('#question4');
q5 = document.querySelector('#question5');

var questions = [q1, q2, q3, q4, q5];




Hidequestion = ()  => {
    for (var i = 0; i < questions.length; i++){
        questions[i].style.display = "none";
    }

    document.querySelector('.next').style.display="none";
    document.querySelector('.okay').style.display="none";
}


Hidequestion();


var n;

//to generate questions.
getQuestions = () =>{
    n = Math.floor(Math.random()*questions.length);
};

displayquestion = () =>{
    for (var i = 0; i < questions.length; i++){
        Question();
    }

    document.querySelector('.startQuiz').style.display="none";
    document.querySelector('.okay').style.display="block";
    document.querySelector('.next').style.display="none";
};



document.querySelector('.startQuiz').addEventListener('click', function(){
    
    
    getQuestions();
  
    // console.log(n);

    displayquestion();

    // for (var i=0; i < questions.length; i++){
    //     document .write("<br>" + questions[2]);
    // };
});




//To display the random question

Question = function(){
    questions[n].style.display = "block";
};


document.querySelector('.okay').addEventListener('click', function(){
    // if ( n !== n){
    //     questions[n].remove();
    // }
 
    
    document.querySelector('.okay').style.display="none";

    getQuestions();
    displayquestion();

});


