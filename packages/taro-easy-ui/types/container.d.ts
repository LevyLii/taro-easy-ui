import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface ContainerProps extends CommonStyle {
    children?: any
    mode?: 'horizontal' | 'vertical'
    space?: number
}

declare const Container: ComponentClass<ContainerProps>

export default Container
