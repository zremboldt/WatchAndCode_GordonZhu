
var todoList = {
  todos: [
    {
      todoText: 'item1',
      completed: false,
    },
    {
      todoText: 'item2',
      completed: false,
    },
    {
      todoText: 'item3',
      completed: false,
    },
  ],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({ 
      todoText: todoText, 
      completed: false, 
    },);
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
}