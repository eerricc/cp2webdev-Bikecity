var myQuestions = [
	{
		question: "1) Qual é o nome do inventor da bicicleta?<p>",
		answers: {
			a: 'Karl Drais<p>',
			b: 'Leonardo da Vinci<p>',
			c: 'Claude Monet<p>',
            d: 'Messi',
		},
		correctAnswer: 'a'
	},
	{
		question: "2) Em que ano foi inventada a bicicleta?<p>",
		answers: {
			a: '1820<p>',
			b: '1802<p>',
			c: '1817<p>',
			d: '1813<p>'
		},
		correctAnswer: 'c'
	},
	{
		question: "3) Qual é a parte da bicicleta onde você senta?",
		answers: {
			a: 'Selim<p>',
			b: 'Quadro<p>',
			c: 'Cubo<p>',
			d: 'Pedivela<p>',
		},
		correctAnswer: 'a'
	},
    {
        question:"4) Qual é o nome do sistema de marchas da bicicleta?<p>",
        answers:{
            a: 'Pneu<p>',
            b: 'Raio<p>',
            c: 'Aro<p>',
            d: 'Câmbio<p>',
        },
        correctAnswer:'d'
    },
    {
        question:"5) Qual é o nome do dispositivo que permite frear a bicicleta?<p>",
        answers:{
            a: 'Pedivela<p>',
            b: 'Freio<p>',
            c: 'Aro<p>',
            d: 'Freio a disco<p>',
        },
        correctAnswer:'d'
    },
    {
        question:"6) Qual é o tipo de bicicleta projetado especificamente para ser dobrado e fácil de transportar e armazenar?<p>",
        answers:{
            a: 'Bicicleta de estrada<p>',
            b: 'Bicicleta urbana<p>',
            c: 'Biciclete dobrável<p>',
            d: 'Bicicleta de montanha<p>',
        },
        correctAnswer:'c'
    },
    {
        question:"7) Qual é a função do garfo em uma bicicleta?<p>",
        answers:{
            a: 'Conectar o selim ao quadro<p>',
            b: 'Suportar o peso do ciclista<p>',
            c: 'Conectar as rodas ao quadro<p>',
            d: 'Alterar a velocidade da bicicleta<p>',
        },
        correctAnswer:'c'
    },
    {
        question:"8) Qual tipo de freio é acionado através do aperto de alavancas no guidão?<p>",
        answers:{
            a: 'Freio a disco<p>',
            b: 'Freio V-brake<p>',
            c: 'Freio a tambor<p>',
            d: 'Freio de contra-pedal<p>',
        },
        correctAnswer:'b'
    },
    {
        question:"9) Qual parte da bicicleta é responsável por suportar o peso do ciclista e conectar o selim ao quadro?<p>",
        answers:{

            a: 'Canote de selim<p>',
            b: 'Movimento central<p>',
            c: 'Coroa<p>',
            d: 'Cubo<p>',
        },
        correctAnswer:'a'
    },
    {
        question:"10) Qual é a parte da bicicleta que pode ser ajustada para controlar a altura do guidão em relação ao selim?<p>",
        answers:{
            a: 'Avanço<p>',
            b: 'Câmbio<p>',
            c: 'Mesa<p>',
            d: 'Espigão<p>',
        },
        correctAnswer:'d'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers; 

		for(var i=0; i<questions.length; i++){
			
			answers = [];

		
			for(letter in questions[i].answers){

			
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}


		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			} 
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
