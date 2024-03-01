const quizform = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const correctAnswers = ['a','c','d','b','a','c'];

quizform.addEventListener('submit', e=> {

    e.preventDefault();
    let score = 0;
    const userAnswers = [quizform.q1.value, quizform.q2.value, quizform.q3.value, quizform.q4.value, quizform.q5.value, quizform.q6.value];
    const incorrectAnswers = [];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        } else {
            incorrectAnswers.push(index + 1);
        }
    });

    resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;

    // Display incorrect answers

    if (incorrectAnswers.length > 0) {
    resultDiv.innerHTML += '<br> Incorrect Answers: ';
    incorrectAnswers.forEach((questionNumber, index) => {
        resultDiv.innerHTML += `Q${questionNumber}${index < incorrectAnswers.length - 1 ? ', ' : ''}`;
    });
    }

});
