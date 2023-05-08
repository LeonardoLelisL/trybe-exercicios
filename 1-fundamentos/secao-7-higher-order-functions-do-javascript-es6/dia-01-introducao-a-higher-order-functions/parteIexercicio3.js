const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) return 1;
  if (studentAnswer === 'N.A') return 0;
  return -0.5;
};

const points = (RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers) => {
  let count = 0;
  RIGHT_ANSWERS.forEach((item, index) => {
    count += compareAnswers(item, STUDENT_ANSWERS[index]);
  });
  return count;
};
console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));