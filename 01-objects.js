console.clear();
const user1 = {
  // key :  value
  userName: "Oriol",
  lead: undefined,
  isTeacher: true,
  hobbies: ["chess", "crypto", "One Piece"],
  workingPlace: {
    city: "Barcelona",
    address: "C/ Pamplona 96",
    building: "Ironhack",
  },
};

console.log(user1.userName);
console.log(user1["userName"]);

// user1.hobbies[4] ="chocolate muffins"; // this creates an empty item in position 3

console.log(user1.hobbies);

// add new property (or key)
user1.hasABike = false;

console.log(user1);

// convert our object into JSON
console.log(JSON.stringify(user1));

// to convert a JSON into JS JSON.parse()

const a = "workingPlace";

console.log(a, user1[a]);

const valueOfNewProperty = "buy chocolate";
const newProperty = "todo";

user1[newProperty] = valueOfNewProperty;

delete user1.todo;
console.log(user1);

console.log(Object.keys(user1));
console.log(Object.values(user1));

for (const key in user1) {
  user1[key] = undefined;
}
console.log(user1);

const twoD = [
  ["Bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Bill"],
  ["Thomas", "Barry", "Alex"],
];


console.log(twoD[1][1]);
