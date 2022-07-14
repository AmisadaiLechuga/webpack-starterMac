import './styles.css';
/* import { saludar } from './js/componentes.js'; */

/* import { Todo } from './classes/todo.class.js';
import { TodoList } from './classes/todo-list.class'; */
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



/* const nombre = 'Amisadai';

saludar ( nombre ); */

export const todoList = new TodoList();

/* const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo( tarea );


console.log( todoList ); */

/* crearTodoHtml( tarea ); */


/* localStorage.setItem('mi-key', 'ABC123');
sessionStorage.setItem('mi-key', 'ABC123'); */

/* todoList.todos.forEach( todo => crearTodoHtml( todo ) );   //otra forma de codigo al de abajo */
todoList.todos.forEach( crearTodoHtml );


/* newTodo.imprimirClase(); */

console.log( 'todos', todoList.todos);

