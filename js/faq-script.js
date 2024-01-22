// document.addEventListener('DOMContentLoaded', function () {
//     const questions = document.querySelectorAll('.about__top-box');

//     questions.forEach(function (question) {
//         question.addEventListener('click', function () {
//             const answer = this.nextElementSibling;

//             // Toggle display of the answer
//             answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.about__top-box');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;

            // Toggle display of the answer
            answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
        });
    });
});