export default function Checkbox(props) {
    const { children, id, createdDate, ...rest } = props
    return (
        <>
            <input type="checkbox" id={`chk-${id}`} className="todo__check" {...rest} />
            <label htmlFor={`chk-${id}`} className="todo__label">
                {children}
                {createdDate && <span className="todo__date">{createdDate}</span>}
            </label>
        </>
    )
}