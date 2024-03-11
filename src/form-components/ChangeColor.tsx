import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "gold"
    ];
    const [currColor, setCurrColor] = useState<string>("purple");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string, index: number) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={color}
                            checked={currColor === color}
                            onChange={() => setCurrColor(color)}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div>
                <span> Your current color is: </span>
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: currColor
                    }}
                    data-testid="colored-box"
                >
                    {currColor}
                </div>
            </div>
        </div>
    );
}
