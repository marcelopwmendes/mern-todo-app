import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = function (props) {
    return <tr>
        <td>{props.todo.description}</td>
        <td>{props.todo.responsible}</td>
        <td>{props.todo.priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
}

function ListTodos() {

    const [todos, setTodos] = useState([]);

    function componentDidMount() {
        axios.get("http://localhost:4000/todos")
            .then(res => {
                setTodos(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function todoList() {
        return todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />
        })
    }
    
    componentDidMount();

    return (
        < div >
            <h3>Todos List </h3>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th> Description </th>
                        <th> Responsible </th>
                        <th> Priority </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {todoList()}
                </tbody>
            </table>
        </div >
    );
}

export default ListTodos;