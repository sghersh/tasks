import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startAttempt(): void {
        setAttempt(attempt - 1);
        setProgress(true);
    }
    return (
        <div>
            <div>
                <Button
                    onClick={startAttempt}
                    disabled={progress || attempt === 0}
                >
                    Start Quiz
                </Button>{" "}
            </div>
            <div>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>{" "}
            </div>
            <div>
                <Button
                    onClick={() => setAttempt(attempt + 1)}
                    disabled={progress}
                >
                    Mulligan
                </Button>{" "}
            </div>
            <div>Attempts Remaining: {attempt}</div>
        </div>
    );
}
