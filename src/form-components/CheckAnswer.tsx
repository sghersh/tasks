import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={answer}
                onChange={updateAnswer}
                placeholder="Type your answer here"
            />
            <div>
                {answer === expectedAnswer ? (
                    <span role="image" aria-label="Correct">
                        ✔️
                    </span>
                ) : (
                    <span role="image" aria-label="Incorrect">
                        ❌
                    </span>
                )}
            </div>
        </div>
    );
}
