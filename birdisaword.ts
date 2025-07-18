type Bird = {
  id: number;
  species: string;
};

const sparrow: Bird = { id: 1, species: 'Sparrow' };
const robin: Bird = { id: 2, species: 'Robin' };

const myObject: { Bird: string } = {};
myObject[sparrow] = 'small bird';
myObject[robin] = 'red chest bird';

console.log(myObject[sparrow]);
console.log(myObject[robin]);
