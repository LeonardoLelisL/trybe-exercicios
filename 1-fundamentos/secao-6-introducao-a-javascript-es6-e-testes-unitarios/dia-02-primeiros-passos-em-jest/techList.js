const techList = (arrayTech, name) => {
  if (arrayTech.length === 0) return 'Vazio!';

  const sortedArrayTech = arrayTech.sort();
  const techList = [];
  
  for (let tech of sortedArrayTech) {
    techList.push({tech: tech, name: name})
  }
  return techList;
};

module.exports = techList;