const schoolSystem = require("./schooSystem.json");

/* 
// Creates a file with the old object so we can import a json directly
const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  path.join(__dirname, "schooSystem.json"),
  JSON.stringify(schoolSystem)
); 

*/

schoolSystem.schools[0].name = "Ironhack";

console.log(schoolSystem.schools[0]);

function writeEmail(studentName, email) {
  return `Subject: Welcome to Our Learning Community, ${studentName}!

Dear ${studentName},

Welcome to our class! We are thrilled to have you join us and can't wait to get to know you better. As you embark on this learning journey, know that you're a part of a vibrant and supportive community.

If you ever need any assistance or have any questions, please don't hesitate to reach out. We're here to help you every step of the way.

Looking forward to seeing all the great things you'll accomplish, ${studentName}!

Warm regards`;
}

function sendEmail2(userName) {
  return `Subject: Welcome to Our Learning Community, [Student Name]!
    
    Dear [Student Name],
    
    Welcome to our class! We are thrilled to have you join us and can't wait to get to know you better. As you embark on this learning journey, know that you're a part of a vibrant and supportive community.
    
    If you ever need any assistance or have any questions, please don't hesitate to reach out. We're here to help you every step of the way.
    
    Looking forward to seeing all the great things you'll accomplish, [Student Name]!
    
    Warm regards`.replaceAll("[Student Name]", userName);
}

console.log(sendEmail2("Marcel"));

const emailText = `Subject: Welcome to Our Learning Community, [Student Name]!

Dear [Student Name],

Welcome to our class! We are thrilled to have you join us and can't wait to get to know you better. As you embark on this learning journey, know that you're a part of a vibrant and supportive community.

If you ever need any assistance or have any questions, please don't hesitate to reach out. We're here to help you every step of the way.

Looking forward to seeing all the great things you'll accomplish, [Student Name]!

Warm regards`;

function sendEmail3(studentName, email) {
  const splitEmail = email.split("[Student Name]");
  // console.log(splitEmail);

  const newEmail = splitEmail.join(studentName);

  return newEmail;
}

schoolSystem.schools[0].classRooms.forEach((classRoom) => {
  classRoom.students.forEach((student) => {
    // console.log(writeEmail(student.firstName))
  });
});
