
const todos = ['todo1', 'todo2', 'todo3'];
console.log('My Todos: ',todos);


todos.push('item4', 'item5');
console.log('My Todos: ',todos);


todos[0] = 'item1 updated'
console.log(todos);


// splice receives two args. 
// Which position to begin deleting from 
//and how many items to delete.
todos.splice(3,1);
console.log(todos);

 

document.writeln(`This is my final array: ${todos}`);