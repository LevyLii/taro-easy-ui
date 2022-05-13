import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface ContainerProps extends CommonStyle {
    mode?: 'horizontal' | 'vertical'
}

declare const Container: ComponentClass<ContainerProps>

export default Container
