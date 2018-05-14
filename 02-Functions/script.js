
// // Functions are just like recepies

// // Ingredients
// var ham = 'ham';
// var turkey = 'turkey';
// var cheese = 'cheese';

// // Recepie
// function makeSandwichWith(ingredient) {
//   document.writeln('1. Get one slice of bread. ');
//   document.writeln(`2. Add ${ingredient}. `);
//   document.writeln('3. Put a slice of bread on top.');
// }

// // Customer's Orders
// makeSandwichWith(ham);
// makeSandwichWith(turkey);



// *********************** 


const app = document.querySelector('.app');
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
  const newLine = document.createElement('li');
  const todoList = document.createTextNode(todos);
  newLine.appendChild(todoList);
  app.appendChild(newLine);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}



