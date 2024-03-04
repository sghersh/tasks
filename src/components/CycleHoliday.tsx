import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday =
    | "Christmas"
    | "Valentines"
    | "Halloween"
    | "My Birthday"
    | "Thanksgiving";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Valentines");
    function nextHoliday(): void {
        if (holiday === "Christmas") {
            setHoliday("Valentines");
        } else if (holiday === "Valentines") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("My Birthday");
        } else if (holiday === "My Birthday") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Christmas");
        }
    }
    function nextAlphabet(): void {
        if (holiday === "Christmas") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("My Birthday");
        } else if (holiday === "My Birthday") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Valentines");
        } else {
            setHoliday("Christmas");
        }
    }
    function getEmoji(holiday: Holiday): string {
        if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Valentines") {
            return "💘";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "My Birthday") {
            return "🎂";
        } else {
            return "🦃";
        }
    }
    return (
        <div>
            <p>Holiday: {getEmoji(holiday)}</p>
            <Button onClick={nextHoliday}>Advance By Year</Button>
            <Button onClick={nextAlphabet}>Advance By Alphabet</Button>
        </div>
    );
}
