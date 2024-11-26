// quiz.js
const questions = [
    { question: "Berapa hasil 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "Ibu kota Indonesia?", options: ["Jakarta", "Surabaya", "Bandung"], answer: "Jakarta" }
];
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

questions.forEach((q, index) => {
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
        <h3>${q.question}</h3>
        ${q.options.map(option => `<label><input type="radio" name="q${index}" value="${option}">${option}</label>`).join('<br>')}
    `;
    quizContainer.appendChild(questionElement);
});

submitButton.addEventListener('click', () => {
    let score = 0;
    questions.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if (answer && answer.value === q.answer) score++;
    });
    scoreElement.textContent = `Skor Anda: ${score}/${questions.length}`;
});
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "transform 0.3s ease";
    });
    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
    });
});
