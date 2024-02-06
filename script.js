'use strict';
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const firstUpperCase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformed = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformed('JavaScript is the best', firstUpperCase);
transformed('JavaScript is the best', oneWord);

// example

const sum = function (a, b) {
  console.log(a + b);
};
const calculator = function (a, b, sum) {
  sum(a, b);
};

calculator(1, 2, sum);
// example

const Family = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const happyFamily = function (str, Family) {
  console.log(`Normal string: ${str}`);
  console.log(`Edit string: ${Family(str)}`);
  console.log(`edited by : ${Family.name}`);
};

happyFamily('Noman and maryam have a perfect family', Family);
