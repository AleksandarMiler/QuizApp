let questions = [
    {
        "question": "Was ist der längste Fluss der Welt?",
        "answer_1": "Der Amazonas",
        "answer_2": "Der Nil",
        "answer_3": "Der Rhein",
        "answer_4": "Der Niger",
        "rightAnswer": 2
    }
    ,
    {
        "question": "Was ist die meist gesprochene Sprache in Indien?",
        "answer_1": "Hindi",
        "answer_2": "Urdu",
        "answer_3": "Punjabi",
        "answer_4": "Bengali",
        "rightAnswer": 1
    }
    ,
    {
        "question": "Wie viele Tasten hat ein Klavier?",
        "answer_1": "74 Tasten",
        "answer_2": "86 Tasten",
        "answer_3": "82 Tasten",
        "answer_4": "88 Tasten",
        "rightAnswer": 4
    }
    ,
    {
        "question": "In welchem dieser Filme spielt Leonardo DiCaprio NICHT mit?",
        "answer_1": "The Wolf of Wallstreet",
        "answer_2": "12 Years a Slave",
        "answer_3": "Aviator",
        "answer_4": "The Revenant",
        "rightAnswer": 2
    }
    ,
    {
        "question": "Wo befindet sich der Gletscher mit dem Namen Eyjafjallajökull?",
        "answer_1": "Grönland",
        "answer_2": "Norwegen",
        "answer_3": "Island",
        "answer_4": "Russland",
        "rightAnswer": 3
    }
    ,
    {
        "question": "Was ist ein Sonett?",
        "answer_1": "Eine Form des Gedichts",
        "answer_2": "Eine Art Waffe",
        "answer_3": "Ein Messgerät",
        "answer_4": "Ein Bauteil einer Radaranlage",
        "rightAnswer": 1
    }
    ,
    {
        "question": "Was verbirgt sich hinter einer Konklave?",
        "answer_1": "Die Befreiung der Sklaverei in den Südstaaten",
        "answer_2": "Eine Papstwahle",
        "answer_3": "Ein Musikstück",
        "answer_4": "Eine besondere Form der Kunst",
        "rightAnswer": 2
    }
];
let currentQuestion = 0;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('numberOfQuestion').innerHTML = currentQuestion + 1;
    
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    
}

function answer(selection) {
    let question = questions[currentQuestion];
    // document.getElementById(selection).innerHTML = question['answer_1'];
    console.log('current Question is', selection); 
    console.log('current Question is', question['rightAnswer']);
    let selectedQuestionNumber = selection.slice(-1); 
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    let idOfRightAnswer = `answer_${question['rightAnswer']}`; 
    if (question['rightAnswer'] == selectedQuestionNumber) {
        //to do
        console.log('Right Answer, you are great!!!')
        document.getElementById(selection).parentNode.classList.add('bg-info');
    } else {
        // to do
        console.log('Wrong Answer, try again!!!');
        document.getElementById(selection).parentNode.classList.add('bg-secondary');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-info');
    }

    document.getElementById('next-Question').disabled = false;
}

function nextQuestion() {
   currentQuestion++;
   document.getElementById('next-Question').disabled = true;
   showQuestion(); 
   removeClassButtons();
}



function removeClassButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-info');
    document.getElementById('answer_1').parentNode.classList.remove('bg-secondary');

    document.getElementById('answer_2').parentNode.classList.remove('bg-info');
    document.getElementById('answer_2').parentNode.classList.remove('bg-secondary');

    document.getElementById('answer_3').parentNode.classList.remove('bg-info');
    document.getElementById('answer_3').parentNode.classList.remove('bg-secondary');

    document.getElementById('answer_4').parentNode.classList.remove('bg-info');
    document.getElementById('answer_4').parentNode.classList.remove('bg-secondary');
}