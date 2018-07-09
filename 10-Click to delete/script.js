
// Model
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



// View
var view = {
  displayTodos: function() {
    const todosUl = document.getElementById('todosUl');
    todosUl.innerHTML = '';

    if (todoList.todos.length === 0) {
      const MsgNoTodos = document.createElement('p');
      MsgNoTodos.textContent = 'Your todo list is empty!';
      todosUl.appendChild(MsgNoTodos);
    } else {
      todoList.todos.forEach((todo, i) => {
        const todoLi = document.createElement('li');
        let todoTextWithCompletion = '';

        if (todo.completed === true) {
          todoTextWithCompletion = `(X) ${todo.todoText}`;
        } else {
          todoTextWithCompletion = `( ) ${todo.todoText}`;
        }

        todoLi.id = i;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteBtn());
        todosUl.appendChild(todoLi);
      });
    }
  },
  createDeleteBtn: function() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    return deleteBtn;
  },
  setUpEventListeners: function() {
    const todosUl = document.getElementById('todosUl');
    todosUl.addEventListener('click', (e) => {
      elementClicked = e.target;

      if (elementClicked.className === 'deleteBtn') {
        handlers.deleteTodo(parseInt(e.target.parentNode.id));
      }
    });
  }
}



// Controller
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
    todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInput.value);
    changeTodoInputPosition.value = '';
    changeTodoInput.value = '';
    view.displayTodos();
  },
  deleteTodo: (position) => {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: () => {
    const toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
    todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
    toggleCompletedInputPosition.value = '';
    view.displayTodos();
  },
  toggleAll: () => {
    todoList.toggleAll();
    view.displayTodos();
  },
};



view.displayTodos();
view.setUpEventListeners();