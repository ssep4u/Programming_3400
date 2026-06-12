import { useState } from 'react';
import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo, pinTodo }) {
    //isEditing: 수정중인지 아닌지
    const [isEditing, setIsEditing] = useState(false);
    //editText: 수정중인 text
    const [editText, setEditText] = useState(todo.text);
    function handleEditClick() {
        //수정중이 아니면 -> 수정중, <input />
        if (!isEditing) {
            setIsEditing(true);
            setEditText(todo.text);
        } else {
            //수정중이면 -> 수정중이 아님, <Checkbox />
            const trimmedText = editText.trim();
            if (trimmedText !== "" && trimmedText !== todo.text) {
                //빈칸이 아니고, 이전 text와 다르면,
                editTodo(todo.id, trimmedText); //editTodo()
            }
            setIsEditing(false);
        }

    }
    return (
        // todo.isCompleted가 참이면 " todo__item--complete" 아니면 ""
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {/* 수정중이 아니면 */}
            {!isEditing &&
                <Checkbox
                    id={todo.id}
                    onChange={() => toggleTodo(todo.id)}
                    checked={todo.isCompleted}
                >{todo.isPinned && "📌"}{todo.text}</Checkbox>
            }
            {/* 수정중이면 */}
            {isEditing &&
                <input
                    type="text"
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    onKeyDown={(event) => { if (event.key === 'Enter') handleEditClick() }}
                    autoFocus
                />
            }

            <Button
                className="todo__button todo__button--edit"
                onClick={handleEditClick}
            >{isEditing ? "💾" : "✏️"}</Button>
            <Button
                className="todo__button todo__button--delete"
                onClick={() => deleteTodo(todo.id)}
            >❌</Button>
            <Button
                className="todo__button todo__button--pin"
                onClick={() => pinTodo(todo.id)}
            >📌</Button>
        </li>
    )
}