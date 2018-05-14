const myComputer = {
  operatingSystem: 'macOS High Sierra',
  screenSize: '13-inch',
  year: 2013
}

const zac = {
  name: 'Zac',
  sayName: function() {
    // 'this' refers to the object that contains this function.
    console.log(this.name);
  }
}

const todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}