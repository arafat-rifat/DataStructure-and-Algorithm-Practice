'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex , secondaryIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[secondaryIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// My practicing Time
// Destructaring Array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, g] = arr;

console.log(x, y, g);

const orderPizza =restaurant.order(2,0);
console.log(orderPizza);

// Practice Category

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);



//  Switching Variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, , secondary] = [secondary, , main];
console.log(main , secondary)


// Nested Array

const nested = [1 , 2 , 5 , [3 ,4]];
 const  [A ,B, C ,[D ,E]] = nested;
 console.log(A ,B, C , D ,E);


//  Destructing Object

const {name , openingHours , categories} = restaurant;
console.log(name ,categories, openingHours);

const  { name: resturanteName , openingHours: hours , categories: tags } = restaurant;