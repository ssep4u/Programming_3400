import { useState, useEffect } from 'react'
import './todolist.css'
// import TodoItemEmpty from './components/TodoItemEmpty.jsx';
// import Button from './components/Button.jsx';
// import Checkbox from './components/Checkbox.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
// import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
  constructor(text) {
    this.id = Date.now(); //id: 고유의 값. new Date().getTime()
    this.text = text;     //할일 내용
    this.isCompleted = false; //완료 여부: 미완
    this.completedAt = null; //완료 날짜: 없음
    this.softDeleted = false; //삭제 여부: 삭제 안함
  }
}
const TODOS_STORAGE_KEY = "todos";

function TodoListApp() {
  function initTodos() {
    const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);

    const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];

    parsedTodos.forEach((todo) => {
      if (todo.isCompleted && typeof todo.completedAt === 'number' && Date.now() - todo.completedAt > 24 * 60 * 60 * 1000) {
        todo.softDeleted = true;
      }
    });

    return parsedTodos;
  }

  const [todos, setTodos] = useState(initTodos); //할일 목록 저장 state, 기본값: 빈 리스트

  //todos 변경될 때, 저장하자. useEffect(명령어, [변할값])
  useEffect(() => {
    //LocalStorage에 todos 저장하자
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    setTodos((todos) => [
      //이전todos 가져오자
      //하나씩 꺼내서 새로운 리스트 만들자
      ...todos,
      //뒤에 new Todo 만들어서 추가하자
      new Todo(text)
    ]);
  }
  // function addTodo(text) { setTodos((todos) => [...todos, new Todo(text)])}
  function toggleTodo(id) {
    // todos에서 하나씩 꺼내어 todo의 id가 id와 같으면, !이전 isCompleted
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted, completedAt: !todo.isCompleted ? new Date().getTime() : null } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, softDeleted: true } : todo
      )
    )

  }

  function editTodo(id, newText) {
    //todos에서 하나씩 꺼내어 todo. id가 같으면 text를 newText로 대입하자
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  )
}
export default TodoListApp;