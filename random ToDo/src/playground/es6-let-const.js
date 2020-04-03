var nameVar = "M";
var nameVar = "D";
console.log("nameVar", nameVar);
// ToDo comment code for later
let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Jen";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
