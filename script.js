const quizform = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const correctAnswers = ['a','c','d'];

quizform.addEventListener('submit', e=> {

    e.preventDefault();
    let score = 0;
    const userAnswers = [quizform.q1.value, quizform.q2.value, quizform.q3.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }
    });

    resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;


});

