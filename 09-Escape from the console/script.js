
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
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  },
}



var handlers = {
  addTodo: () => {
    const addTodoInput = document.getElementById('addTodoInput');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    view.displayTodos();
  },
  changeTodo: () => {
    const changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
    const changeTodoInput = document.getElementById('changeTodoInput');
    todoList.changeTodo(changeTodoInputPosition.valueAsNumber - 1, changeTodoInput.value);
    changeTodoInputPosition.value = '';
    changeTodoInput.value = '';
    view.displayTodos();
  },
  deleteTodo: () => {
    const deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
    todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber - 1);
    deleteTodoInputPosition.value = '';
    view.displayTodos();
  },
  toggleCompleted: () => {
    const toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
    todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber - 1);
    toggleCompletedInputPosition.value = '';
    view.displayTodos();
  },
  toggleAll: () => {
    todoList.toggleAll();
    view.displayTodos();
  },
};



var view = {
  displayTodos: () => {
    const todosUl = document.getElementById('todosUl');
    todosUl.innerHTML = '';

    if (todoList.todos.length === 0) {
      const MsgNoTodos = document.createElement('p');
      MsgNoTodos.textContent = 'Your todo list is empty!';
      todosUl.appendChild(MsgNoTodos);
    } else {
      todoList.todos.forEach(todo => {
        const todoLi = document.createElement('li');
        let todoTextWithCompletion = '';

        if (todo.completed === true) {
          todoTextWithCompletion = `(X) ${todo.todoText}`;
        } else {
          todoTextWithCompletion = `( ) ${todo.todoText}`;
        }

        todoLi.textContent = todoTextWithCompletion;
        todosUl.appendChild(todoLi);
      });
    }
  }
}



view.displayTodos();