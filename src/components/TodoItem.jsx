const TodoItem = ({ key, todo, removeTodo, isRemoved, undoTodo }) => {
    return (
        <li className="todo__list--item" key={key}>
            <span
                style={
                    isRemoved
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                }
            >
                {todo.title}
            </span>
            {isRemoved ? (
                <button
                    className="button button--undo"
                    onClick={() => undoTodo(todo.id)}
                >
                    Undo
                </button>
            ) : (
                <button
                    className="button button--remove"
                    onClick={() => removeTodo(todo.id)}
                >
                    Complete Task ✅
                </button>
            )}
        </li>
    );
};

export default TodoItem;
