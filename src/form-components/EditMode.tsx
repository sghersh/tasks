import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [student, setStudent] = useState(true);

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function handleEditModeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <div>
                    <Form.Group className="mb-3" controlId="nameInput">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={student}
                        onChange={handleStudentChange}
                    />
                    <Form.Check
                        type="switch"
                        id="edit-mode-check"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={handleEditModeChange}
                    />{" "}
                </div>
            ) : (
                <div>
                    <span>
                        {name} is {student ? "a student" : "not a student"}.{" "}
                    </span>
                    <Form.Check
                        type="switch"
                        id="edit-mode-check"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={handleEditModeChange}
                    />
                </div>
            )}
        </div>
    );
}
