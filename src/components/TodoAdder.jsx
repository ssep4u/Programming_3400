import { useState } from 'react'
import Button from './Button.jsx'

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('');
    const [dueDate, setDueDate] = useState('');
    function handleSubmit(event) {
        event.preventDefault();     //submit 기본 동작 막자
        //사용자가 입력하는 것은 항상 주의 필요!!!
        //사용자 입력: user's way
        if (!inputTodo.trim()) return; //빈칸이면 return

        if (dueDate && isNaN(Date.parse(dueDate))) {
            alert("올바른 날짜 형식을 입력하세요 (YYYY-MM-DD)");
            return;
        }
        
        //addTodo(text)
        //text: 1. input 요소의 value, 2. input value를 state
        addTodo(inputTodo.trim(), dueDate); //addTodo()에 dueDate 추가
        setInputTodo('');
        setDueDate('');
    }
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo__input"
                placeholder='할 일을 입력하세요.'
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <input
                type="date"
                className="todo__input"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
            />
            <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    )
}