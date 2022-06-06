// functional react component that takes a list of todos and displays them as a list
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, removeTodo, clearDoneTodos }) => {
    return (
        <ul className="todo__list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
            <button className="button button--clear" onClick={clearDoneTodos}>
                Clear
            </button>
        </ul>
    );
};

export default TodoList;
