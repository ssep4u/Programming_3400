import { useState } from "react";
import Button from "./Button.jsx";

export default function TodoAdder({ addTodo, search, setSearch }) {
  const [inputTodo, setInputTodo] = useState("");
  function handleSubmit(event) {
    event.preventDefault(); //submit 기본 동작 막자
    //사용자가 입력하는 것은 항상 주의 필요!!!
    //사용자 입력: user's way
    if (!inputTodo.trim()) return; //빈칸이면 return

    //addTodo(text)
    //text: 1. input 요소의 value, 2. input value를 state
    addTodo(inputTodo.trim());
    setInputTodo("");
  }
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo__input"
        placeholder="할 일을 입력하세요."
        value={inputTodo}
        onChange={(event) => setInputTodo(event.target.value)}
      />
      <input
        type="text"
        className="todo__input"
        placeholder="검색어 입력"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" className="todo__button todo__button--add">
        Add
      </Button>
    </form>
  );
}
