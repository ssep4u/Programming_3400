function TodoDate() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <div className="todo-date">
      {formattedDate}
    </div>
  );
}

export default TodoDate;