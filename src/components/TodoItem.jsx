const TodoItem = ({ key, todo, removeTodo }) => {
    return (
        <li className="todo__list todo__list--item" key={key}>
            {todo.title}
            <button
                className="button button--remove"
                onClick={() => removeTodo(todo.id)}
            >
                Remove
            </button>
        </li>
    );
};

export default TodoItem;
