import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);
    function requestedHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            setRequested(parseInt(event.target.value));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>

            <Form.Control
                type="number"
                onChange={requestedHandler}
                placeholder="Type your answer here"
            />
            <Button onClick={() => setAttempts(requested + attempts)}>
                Gain
            </Button>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts < 1}
            >
                Use
            </Button>
            <span>Attempts remaining: {attempts}</span>
        </div>
    );
}
