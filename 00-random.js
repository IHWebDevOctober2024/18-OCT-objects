console.log(Math.random() - 0.5);

const numbers = [2, 3, 4, 5, 200, 123];

function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

numbers.sort(compare);
numbers.reverse();

console.log(numbers);

const names = ["Zack", "Polly", "Charlie", "carla", "David", "Eve", "Frank"];

function sortAlpha(array) {
  let sortedArray = array.map((string) => string.toLowerCase());
  return sortedArray.sort();
}

names.sort((a, b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});

console.log(names);
console.log(sortAlpha(names));

// console.log("aloha".localeCompare("zack"));
