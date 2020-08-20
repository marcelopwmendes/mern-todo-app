import React, { useState } from "react";

function CreateTodo() {

    const [description, setDescription] = useState("");
    const [responsible, setResponsible] = useState("");
    const [priority, setPriority] = useState("");
    const [completed, setCompleted] = useState(false);

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
        setCompleted(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();

        console.log("Form submitted: ");
        console.log(description);
        console.log(responsible);
        console.log(priority);
        console.log(completed);

        setDescription("");
        setResponsible("");
        setPriority("");
        setCompleted(false);

    }

    return (
        < div style={{ marginTop: 10 }}>
            <h3>Create New Todo</h3>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control" value={description} onChange={onChangeTodoDescription} />
                </div>

                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text" className="form-control" value={responsible} onChange={onChangeTodoResponsible} />
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
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div >
    )
}



export default CreateTodo;