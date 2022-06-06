// a todo app built using functional components in react
import { useState, useEffect } from "react";
import "../styles/TodoApp.css";

// additional jsx components
import TodoList from "./TodoList.jsx";

const TodoApp = () => {
    // set up state
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);

    // useEffect hook to set and update todos and doneTodos from local storage
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        const doneTodos = JSON.parse(localStorage.getItem("doneTodos"));
        if (todos) {
            setTodos(todos);
        }
        if (doneTodos) {
            setDoneTodos(doneTodos);
        }
    }, []);

    // add a new todo
    const addTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    // remove a todo from todos and add it to doneTodos
    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        setDoneTodos([...doneTodos, todos.find((todo) => todo.id === id)]);
    };

    // clear all completed todos from doneTodos
    const clearDoneTodos = () => {
        setDoneTodos([]);
    };

    // store the todo list and doneTodos in local storage
    const saveTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("doneTodos", JSON.stringify(doneTodos));
    };

    // load the todo list and doneTodos from local storage
    const loadTodos = () => {
        const loadedTodos = JSON.parse(localStorage.getItem("todos"));
        const loadedDoneTodos = JSON.parse(localStorage.getItem("doneTodos"));
        if (loadedTodos) {
            setTodos(loadedTodos);
        }
        if (loadedDoneTodos) {
            setDoneTodos(loadedDoneTodos);
        }
    };

    // render the todo app

    return (
        <div className="todo-app">
            <h1>Todo App</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(e.target.todo.value);
                    e.target.todo.value = "";
                }}
            >
                <input type="text" name="todo" placeholder="Add a todo" />
                <button type="submit">Add</button>
            </form>
            <h2>To Do List:</h2>
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                clearDoneTodos={clearDoneTodos}
            />
            <h2>Done Todos:</h2>
            <TodoList
                todos={doneTodos}
                removeTodo={removeTodo}
                clearDoneTodos={clearDoneTodos}
            />
            <button className="button button--save" onClick={saveTodos}>
                Save
            </button>
            <button className="button button--load" onClick={loadTodos}>
                Load
            </button>
        </div>
    );
};

export default TodoApp;
