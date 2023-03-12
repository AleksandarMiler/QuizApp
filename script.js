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
let rightAnswer = 0;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('rightAnswerNumber').innerHTML = rightAnswer;

    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        //  show Endscreen 
        document.getElementById('endScreen').style = "display: unset "; // zeigt EndScreen DialogBox
        document.getElementById('questionBody').style = "display: none"; // versteckt Questions DialogBox
        document.getElementById('picture').src = "img/pexels-anna-shvets-6250946.jpg"; //zeigt neues Bild wenn das Spiel zu Ende ist
        document.getElementById('picture').classList.add('picture'); // das Bild bekommt css Einstellungen

        document.getElementById('rightAnswerNumber').innerHTML = rightAnswer;  // Zahl der richtigbeantworteten FRagen wird angezeigt

    } else {
        let question = questions[currentQuestion];
        document.getElementById('numberOfQuestion').innerHTML = currentQuestion + 1;  // Zahl an welcher Frage wir uns mommentan befinden wird angezeigt
        // if (currentQuestion > ) {
            
        // }
        // calculatePrecentage();

        document.getElementById('questionText').innerHTML = question['question'];  // Frage aus JSON wird angezeigt


        document.getElementById('answer_1').innerHTML = question['answer_1'];  // die nächste Fragen werden angezeigt
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function calculatePrecentage() {
    
    let percent = (currentQuestion + 1) / questions.length;  // Variable die das prozentuelle Verhältnis von insgesamte Fragen und Frage an der wir gerade sind
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;  // das prozentuelle Verhältni wird gezeigt

    document.getElementById('progress-bar').style = `width:${percent}%`;  // style des HTML elementes wird direkt angesprochen und geändert
}

function answer(selection) {
    let question = questions[currentQuestion];

    console.log('current Question is', selection);
    console.log('current Question is', question['rightAnswer']);

    let selectedQuestionNumber = selection.slice(-1);        // wir entnehmen dass letzte Symbol aus angeklikter Antwort

    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    calculatePrecentage();

    let idOfRightAnswer = `answer_${question['rightAnswer']}`;   //  das letzte Symbol aus Id wird zum Variable
    if (question['rightAnswer'] == selectedQuestionNumber) {
        //to do
        console.log('Right Answer, you are great!!!')
        document.getElementById(selection).parentNode.classList.add('bg-info');      // hintergrund der richtigbeantworteten Frage wird gewechselt
        rightAnswer++;                      // Zahl der richtigbeantworteten Fragen wird um eins erhöht
    } else {
        // to do
        console.log('Wrong Answer, try again!!!');
        document.getElementById(selection).parentNode.classList.add('bg-secondary');   // hintergrund der falschbeantworteten Frage wird gewechselt
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-info');
    }

    document.getElementById('next-Question').disabled = false;     // Knopf um nächste Gruppe der Fragen anzuzeigen wird wieder aktiviviert
}

function nextQuestion() {
    currentQuestion++;                  // die nächste Gruppe der Fragen, bzw. nächstes Object aus JSON wird angezeigt
    document.getElementById('next-Question').disabled = true;  // Knopf um nächste Gruppe der Fragen anzuzeigen wird wieder deaktiviviert
    showQuestion();
    removeClassButtons();
}



function removeClassButtons() {                      //alle Eigenschafften der Fragen werden entfernt
    document.getElementById('answer_1').parentNode.classList.remove('bg-info');
    document.getElementById('answer_1').parentNode.classList.remove('bg-secondary');

    document.getElementById('answer_2').parentNode.classList.remove('bg-info');
    document.getElementById('answer_2').parentNode.classList.remove('bg-secondary');

    document.getElementById('answer_3').parentNode.classList.remove('bg-info');
    document.getElementById('answer_3').parentNode.classList.remove('bg-secondary');

    document.getElementById('answer_4').parentNode.classList.remove('bg-info');
    document.getElementById('answer_4').parentNode.classList.remove('bg-secondary');
}

function resetGame() {
    currentQuestion = 0;
    rightAnswer = 0; 
    document.getElementById('endScreen').style = "display:none ";
    document.getElementById('questionBody').style = "";
    document.getElementById('picture').src = "img/pexels-leeloo-thefirst-5428836.jpg"; 
    document.getElementById('picture').classList.remove('picture');
    document.getElementById('progress-bar').style = "width: 0%";
    showQuestion(); 
    document.getElementById('next-Question').disabled = true;

}