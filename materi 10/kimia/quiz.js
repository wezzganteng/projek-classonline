//Question bank
var questionBank= [
    {
        question : 'Partikel bermuatan positif yang terdapat dalam inti atom adalah . . . ',
        option : ['Proton','Inti atom','Neutron','Elektron'],
        answer : 'Proton'
    },
    {
        question : 'Jika nomor massa unsur A adalah 30 dan A mempunyai elektron sebanyak 12 maka jumlah neutron unsur A adalah . . . ',
        option : ['12','15','18','24'],
        answer : '18'
    },
    {
        question : 'Jumlah neutron dalam suatu atom dengan nomor atom 18 dan nomor massa 40 adalah . . . ',
        option : ['40','30','22','20'],
        answer : '22'
    },
    {
        question : 'Reaksi kimia merupakan pemisahan, penggabungan, atau penyusunan kembali atom-atom, sehingga atom tidak bisa dibuat atau dimusnahkan. Teori ini dikemukakan oleh . . .',
        option : ['Dalton','Thomson','Niels Bohr','Rutherford'],
        answer : 'Dalton'
    },
    {
        question : 'Pokok teori atom thomson dititikberatkan pada . . .',
        option : ['Atom terdiri dari elektron - elektron',
                    'Elektron sebagai penyusun utama atom',
                    'Atom sebagai bola masif yang hanya berisi elektron',
                    'Atom sebagai bola masif bermuatan positif yang di dalamnya tersebar elektron sehingga keseluruhannya bersifat netral'],
        answer : 'Atom sebagai bola masif bermuatan positif yang di dalamnya tersebar elektron sehingga keseluruhannya bersifat netral'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= (i+1)+'. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Soal"+' '+(i+1)+' '+'dari'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= '#59CE8F';
    }
    else{
        document.getElementById(e.id).style.background= '#FF6464';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();