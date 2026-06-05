import TodoItemEmpty from './TodoItemEmpty.jsx';
import TodoItem from './TodoItem.jsx';


export default function TodoList({ todos, ...rest }) {
    return (
        <ul className="todo__list">
            {/* 아무것도 없을 때, */}
            {todos.length === 0 && <TodoItemEmpty />}
            {/* 아무것도 없지 않을 때 */}
            {todos.length > 0 && todos.map((todo) =>
                todo.isPinned ? <TodoItem key={todo.id} todo={todo} {...rest} /> : null
            )}
            {todos.length > 0 && todos.map((todo) =>
                !todo.isPinned ? <TodoItem key={todo.id} todo={todo} {...rest} /> : null
            )}
        </ul>
    )
}