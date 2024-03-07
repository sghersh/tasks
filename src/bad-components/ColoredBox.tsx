import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorPreviewProps {
    colorIndex: number;
    setColorIndex: (index: number) => void;
}

function ColorPreview({ colorIndex }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

function ChangeColor({
    colorIndex,
    setColorIndex
}: ColorPreviewProps): JSX.Element {
    return (
        <div>
            <Button
                onClick={() => setColorIndex((colorIndex + 1) % COLORS.length)}
            >
                Next Color
            </Button>
        </div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <ChangeColor
                colorIndex={colorIndex}
                setColorIndex={setColorIndex}
            ></ChangeColor>
            <div>
                <ColorPreview
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
