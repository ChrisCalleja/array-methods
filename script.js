"use strict";
// an array of numbers for testing purposes
let numbers = [75, 77, 63, 89];
// an array of strings for testing purposes
let strings = ["Detroit", "Grand Rapids", "Holland", "Oxford"];
// an array of objects for testing purposes
let objects = [
  {
    brand: "Apple",
    size: 15,
    price: 1600,
    touchscreen: false,
  },
  {
    brand: "Dell",
    size: 13,
    price: 650,
    touchscreen: false,
  },
  {
    brand: "Apple",
    size: 15,
    price: 1600,
    touchscreen: true,
  },
  {
    brand: "Lenovo",
    size: 13,
    price: 1200,
    touchscreen: true,
  },
];

// Declare a function named calcSum (calcSum NEEDS an array to do its' job)
// ○ Parameter(s): array
// ○ Functionality: return the sum of all the values from the provided array

const calcSum = (arrayOfNumbers) => {
  let sum = 0;
  arrayOfNumbers.forEach((number) => {
    sum = sum + number; //sum += number;
  });
  return sum;
};

console.log(calcSum(numbers));
console.log(calcSum([1, 2, 3]));

// Declare a function named filterTouchscreens
// ○ Parameter(s): array
// ○ Functionality: return a new array where every object has a touchscreen property of true.

const filterTouchscreens = (arrayOfLaptops) => {
  return arrayOfLaptops.filter(
    (laptop) => laptop.touchscreen || laptop.price < 1000
  );
};

console.log(filterTouchscreens(objects));

const filterByBrand = (anArrayOfLaptops, brand) => {
  return anArrayOfLaptops.filter((laptop) => {
    return laptop.brand === brand;
  });
};

console.log(filterByBrand(objects, "Apple"));
// Declare a function named findLaptopByPrice
// ○ Parameter(s): array, price
// ○ Functionality: return the first object from the provided array that has the specified price.
const findLaptopByPriceAndSize = (array, price, size) => {
  return array.find((item) => {
    return item.price === price && item.size === size;
  });
};
console.log(findLaptopByPriceAndSize(objects, 1600, 15));

// Declare a function named myFindIndex
// ○ Parameter(s): array, brand, price
// ○ Functionality: return the index of the first object that has both the specified brand and price

const myFindIndex = (array, brand, price) => {
  return array.findIndex((laptop) => {
    return laptop.brand === brand && laptop.price === price;
  });
};

console.log(myFindIndex(objects, "Dell", 650));

// Declare a function named includesBrand
// ○ Parameter(s): array, brand
// ○ Functionality: use the some method to see if the specified brand is included in the provided array
const includesBrand = (array, brand) => {
  return array.some((item) => {
    return item.brand === brand;
  });
};

// console.log(includesBrand(objects, "Apple"));

// Declare a function named multiplyBy
// ○ Parameter(s): arrayOfNumbers, factor
// ○ Functionality: use the map method to return a new array where every value in the arrayOfNumbers is multiplied by the specified factor.

const multiplyBy = (arrayOfNumbers, factor) => {
  return arrayOfNumbers.map((number) => {
    return number * factor;
  });
};
console.log(multiplyBy(numbers, 2));

const flashSale = (arrayofLaptops, discountAsDecimal) => {
  return arrayofLaptops.map((laptop) => {
    laptop.price *= 1 - discountAsDecimal;
    return laptop;
  });
};

console.log(flashSale(objects, 0.2));

// Declare a function named calcSumV2
// ○ Parameter(s): array
// ○ Functionality: use the reduce method to calculate the sum of all the numbers in the given array

const calcSumV2 = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
};
console.log(calcSumV2(numbers));

const calcAverageCostOfLaptops = (arrayOfLaptops) => {
  return (
    arrayOfLaptops.reduce((pv, cv) => {
      return pv + cv.price;
    }, 0) / arrayOfLaptops.length
  );
};
console.log(calcAverageCostOfLaptops(objects));

//use reduce to find the cheapest laptop

const findCheapestLaptop = (arrayOfLaptops) => {
  return arrayOfLaptops.reduce((pv, cv) => {
    if (cv.price < pv.price) {
      return cv;
    } else {
      return pv;
    }
  });
};

// const findCheapestLaptop = (arrayOfLaptops) => {
//     if (arrayOfLaptops.length) {
//       return arrayOfLaptops.reduce((pv, cv) => (cv.price < pv.price ? cv : pv));
//     } else {
//       return "No laptops were provided";
//     }
//   };

console.log(findCheapestLaptop(objects));

// Declare a function named deleteByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove an item from an array at the specified index

const deleteByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteByIndex(objects, 3);
console.log(objects);

// Declare a function named deleteALaptop
// ○ Parameter(s): array, brand, price
// ○ Functionality: remove the first object in the array that has the specified brand and price.
const deleteALaptop = (array, brand, price) => {
  const index = array.findIndex((element) => {
    return element.brand === brand && element.price === price;
  });
  array.splice(index, 1);
};
console.log(objects);

// Declare a function named addString
// ○ Parameter(s): array, newString
// ○ Functionality: add a new string to the end of the array

const addString = (array, newString) => {
  array.unshift(newString);
};

// Declare a function named addLaptopToInventory
// ○ Parameter(s): array, brand, size, price, touchscreen
// ○ Functionality: construct an object and add it to the end of the array. The object must have the same properties as the objects already in the array.

const addLaptopToInventory = (array, brand, size, price, touchscreen) => {
  const newObject = {
    brand: brand,
    size: size,
    price: price,
    touchscreen: touchscreen,
  };
  array.push(newObject);
};

addLaptopToInventory(objects, "HP", 90, 3, true);
console.log(objects);
