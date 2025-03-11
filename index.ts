import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

// Type annotations && Type inference
const apples: number = 5;
const fruits: Array<string> = ['apple', 'banana', 'orange'];
class Car { }
let aCar: Car = new Car();
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
const add = (a: number, b: number): number => {
  return a + b;
};
const subtract = (a: number, b: number): number => {
  return a - b;
};
function divide(a: number, b: number): number {
  return a / b;
}
const multiply = function (a: number, b: number): number {
  return a * b;
};
const logger = (message: string): void => {
  console.log(message);
};
const throwError = (message: string): never | void => {
  throw new Error(message);
};
const forecast = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
const logWeatherES2015 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// when to use annotation?
// 1 Function returns any type
let json = '{"x":10, "y":20}';
console.log('json: ', json);
json = JSON.parse(json);
console.log('json parse: ', json);
json = JSON.stringify(json);
console.log('json stringify: ', json);

// 2 Declare a var on one line
let words = ['apple', 'banana', 'orange'];
let foundWord: boolean = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3 Variable type cannot be inferred
let numbers = [-10, -1, -12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i];
  }
}

// Objects
const profile = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age, name }: { age: number; name: string } = profile;
const {
  address: { street, city, state },
}: { address: { street: string; city: string; state: string } } = profile;
const {
  address,
}: { address: { street: string; city: string; state: string } } = profile;
console.log(address, street, city, state, age, name);

// Array
const carMakers0: string[] = [];
const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  new Date(),
];
const carsBMake2D: string[][] = [['ford'], ['corolla'], ['camera']];
const car = carMakers[0];
const myCar = carMakers.pop();
carMakers.push('honda');
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
const importantDates: (Date | string)[] = [new Date(), '2030-10-09'];
importantDates.push(new Date());
importantDates.push('2030-10-10');

// Interfaces
interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
  },
};

const drink = {
  color: 'yellow',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}, Carbonated: ${this.carbonated}, Sugar: ${this.sugar}`;
  },
};

const printItem = (item: Reportable) => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  console.log(`Summary: ${item.summary()}`);
};
printItem(oldCivic);
printItem(drink);

