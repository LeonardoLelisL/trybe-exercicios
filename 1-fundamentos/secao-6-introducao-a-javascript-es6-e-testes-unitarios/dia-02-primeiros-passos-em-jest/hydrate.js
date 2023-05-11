const hydrate = (string) => {
  const numbers = string.match(/\d+/g);
  let total = 0;
  for (let values of numbers) {
    total += parseInt(values);
  }
  let answer = total === 1 ? `${total} copo de água` : `${total} copos de água`;
  return answer;
};

module.exports = hydrate;