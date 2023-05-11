const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
console.log(sum(4, 5, 6));