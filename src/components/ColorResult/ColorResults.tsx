import React, { FC } from "react";
import { RGB } from "../../types/interfaces";
import "./ColorResults.scss";

interface Props {
    color: RGB,
    prevColor: RGB
};

const ColorResultsContainer: FC<Props> = ({ color, prevColor }) => {
    return (
        <div className="color-result-container">
            <div>
                <p>Your guess: {showColor(color)}</p>
                <p>Correct answer: {showColor(prevColor)}</p>
            </div>
            <div>
                <Drop color={color} />
                <Drop color={prevColor} />
            </div>
        </div>
    )
};

const Drop: FC<{ color: RGB }> = ({ color }) => (
    <div className="drop" style={{
        backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
    }} />
);

const showColor = (color: RGB) => `(${color.r}, ${color.g}, ${color.b})`;

export default ColorResultsContainer;
