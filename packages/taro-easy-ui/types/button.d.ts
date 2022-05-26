import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface ButtonProps extends CommonStyle {
    name: string
    backgroundColor?: string
    textColor?: string
    mode?: 'circle' | 'semicircle' | 'square'
}

declare const Button: ComponentClass<ButtonProps>

export default Button