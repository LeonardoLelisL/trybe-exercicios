import ModuleDetails from './module-details';
import Title from './title';
import calculateAge from '../utils/age';

function HelloWorld() {
  const name = 'Leonardo Lelis';
  const birth = '08/05/1987';
  const age = calculateAge(birth);

  return (
    <div>
      <h1>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}

export default HelloWorld;
