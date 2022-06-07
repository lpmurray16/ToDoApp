// functional react component that takes a list of todos and displays them as a list
import TodoItem from "./TodoItem.jsx";

const TodoList = ({
    todos,
    removeTodo,
    clearDoneTodos,
    isDoneList,
    undoTodo,
}) => {
    return (
        <ul className="todo__list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    isRemoved={isDoneList}
                    undoTodo={undoTodo}
                />
            ))}
            {(() => {
                if (isDoneList && todos.length > 0) {
                    return (
                        <button
                            className="button button--clear"
                            onClick={clearDoneTodos}
                        >
                            Clear Completed
                        </button>
                    );
                }
            })()}
        </ul>
    );
};

export default TodoList;
