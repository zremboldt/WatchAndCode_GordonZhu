
// Functions can be passed into other functions
setTimeout(function() {
  console.log('Wake up!');
}, 3000)



// Reusable functions & forEach
var students = ['Jenny', 'Paul', 'James', 'Dan'];

function LogName(name) {
  console.log(name);
}

students.forEach(LogName);



// Expand on previous point - I want to print to DOM.
const app = document.getElementById('app');

function logNameToDom(name) {
  const li = document.createElement('li');
  li.textContent = name;
  app.appendChild(li);
}

students.forEach(logNameToDom);
// logNameToDom(students[2]);