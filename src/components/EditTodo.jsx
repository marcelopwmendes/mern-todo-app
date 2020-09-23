import React, { useEffect, useState } from "react";
import axios from "axios";

function EditTodo(props) {

    const [description, setDescription] = useState("");
    const [responsible, setResponsible] = useState("");
    const [priority, setPriority] = useState("");
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/todos/' + props.match.params.id)
            .then(response => {
                setDescription(response.data.description);
                setResponsible(response.data.responsible);
                setPriority(response.data.priority);
                setCompleted(response.data.completed);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, [props.match.params.id]);

    function onSubmit(e) {
        e.preventDefault();
        const obj = {
            description: description,
            responsible: responsible,
            priority: priority,
            completed: completed
        };

        axios.post("http://localhost:4000/todos/update/" + props.match.params.id, obj)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (err) {
                console.log(err);
            });

        props.history.push("../");
    }

    function onChangeTodoDescription(e) {
        setDescription(e.target.value);
    }

    function onChangeTodoResponsible(e) {
        setResponsible(e.target.value);
    }

    function onChangeTodoPriority(e) {
        setPriority(e.target.value);
    }

    function onChangeTodoCompleted(e) {
        setCompleted(!completed);
    }

    return (
        < div >
            <h3> Update Todo </h3>
            <form onSubmit={onSubmit} method="POST">
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control" value={description} onChange={onChangeTodoDescription}></input>
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text" className="form-control" value={responsible} onChange={onChangeTodoResponsible}></input>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" onChange={onChangeTodoPriority} id="priorityLow" value="Low" checked={priority === "Low"} />
                        <label className="form-check-label">Low</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" onChange={onChangeTodoPriority} id="priorityMedium" value="Medium" checked={priority === "Medium"} />
                        <label className="form-check-label">Medium</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" onChange={onChangeTodoPriority} id="priorityHigh" value="High" checked={priority === "High"} />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="completedCheckbox" name="completedCheckbox" value={completed} checked={completed} onChange={onChangeTodoCompleted}></input>
                    <label className="form-check-label" htmlFor="completedCheckbox"> Completed </label>
                </div>
                <br />

                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary" />
                </div>

            </form>
        </div >
    );
}

export default EditTodo;