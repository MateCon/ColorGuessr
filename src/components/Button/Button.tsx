import React, { FC } from "react";
import "./Button.scss";

interface Props {
    [key: string]: any
}

const Button: FC<Props> = ({ children, ...props }) => <button {...props}>{children}</button>;

export default Button;
