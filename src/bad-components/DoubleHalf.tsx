import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function halver() {
        setDhValue(dhValue / 2);
    }
    function doubler() {
        setDhValue(2 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={halver}>Halve</Button>
            <Button onClick={doubler}>Double</Button>
        </div>
    );
}
