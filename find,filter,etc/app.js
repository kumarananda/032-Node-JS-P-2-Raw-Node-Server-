const devs = [
  {
    id: 1,
    name: "Ananda",
    skill: "MERN",
    age: 30,
    location: "Panthapath",
  },
  {
    id: 2,
    name: "Adnan",
    skill: "IOS devs",
    age: 50,
    location: "Mirpur",
  },
  {
    id: 3,
    name: "Anamul",
    skill: "MERN",
    age: 80,
    location: "Panthapath",
  },
  {
    id: 4,
    name: "Achem",
    skill: "MERN",
    age: 110,
    location: "Mirpur",
  },
  {
    id: 5,
    name: "Reiday",
    skill: "MERN",
    age: 10,
    location: "Uttara",
  },
];

let text = "Ananda, Achem, Adanan, Sayeed";
console.log(text.split(","));
let arry = ["Ananda", " Achem", " Adanan", " Sayeed"];
console.log(arry.join());
// 09 below we are replece the selected index data
// let indexNo = devs.findIndex((data) => data.id == 2);
// devs[indexNo] = {
//   id: 2,
//   name: "Adnan muskey",
//   skill: "IOS devs",
//   age: 50,
//   location: "Mirpur",
// };
// console.log(devs);
// [
//   { id: 1, name: "Ananda", skill: "MERN", age: 30, location: "Panthapath", },
//   { id: 2, name: "Adnan muskey", skill: "IOS devs", age: 50, location: "Mirpur",},
//   { id: 3, name: "Anamul", skill: "MERN", age: 80, location: "Panthapath" },
//   { id: 4, name: "Achem", skill: "MERN", age: 110, location: "Mirpur" },
//   { id: 5, name: "Reiday", skill: "MERN", age: 10, location: "Uttara" },
// ];

// 08 findIndex return index number for selected data/id
// console.log(
//   devs.findIndex((data) => {
//     return data.id == 2;
//   })
// );
// 1
// 07
// console.log(
//   devs.some((data) => {
//     return data.age > 120;
//   })
// );
// false

// 06 some return boolean type data true/false
// if data found in our selected data with our condition than true
// otherwise false
// console.log(
//   devs.some((data) => {
//     return data.age < 20;
//   })
// );
// true

// 05
// console.log(
//   devs.filter((data) => {
//     return data.age < 20;
//   })
// );
// [
//   { id: 5, name: 'Reiday', skill: 'MERN', age: 10, location: 'Uttara' }
// ]

//04  filter return data in  Array pattrn and related data
// console.log(
//   devs.filter((data) => {
//     return data.location == "Panthapath";
//   })
// );
/**
 * [
  {
    id: 1,
    name: 'Ananda',       
    skill: 'MERN',        
    age: 30,
    location: 'Panthapath'
  },
  {
    id: 3,
    name: 'Anamul',       
    skill: 'MERN',        
    age: 80,
    location: 'Panthapath'
  }
]
 */

// find return one data in  ofject pattrn
// 03 same location data is found in our data but find return only one data
// console.log(
//   devs.find((data) => {
//     return data.location == "Panthapath";
//   })
// );
/**
 * {
  id: 1,
  name: 'Ananda',       
  skill: 'MERN',        
  age: 30,
  location: 'Panthapath'
}
 */

//02 find retun selected id data
/**
 * {
  id: 3,
  name: 'Anamul',       
  skill: 'MERN',        
  age: 80,
  location: 'Panthapath'
}
 */

// 01 find only return one data
// console.log(
//   devs.find((data) => {
//     return data;
//   })
// );
/**
 * {
  id: 1,
  name: 'Ananda',
  skill: 'MERN',
  age: 30,
  location: 'Panthapath'
}
 */
