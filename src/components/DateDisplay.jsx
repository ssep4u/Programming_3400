export default function DateDisplay({ date }) {
    const parsedDate = date ? new Date(date) : new Date();
    if (Number.isNaN(parsedDate.getTime())) {
        return <div className="todo__created-at">등록시간 없음</div>;
    }
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();
    const hours = parsedDate.getHours().toString().padStart(2, '0');
    const minutes = parsedDate.getMinutes().toString().padStart(2, '0');

    return (
        <div className="todo__created-at">
            {year}년 {month}월 {day}일 {hours}:{minutes}
        </div>
    )
}