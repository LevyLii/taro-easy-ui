import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface TitleProps extends CommonStyle {
    name: string
    showBlock?: 'true' | 'false'
    blockColor?: string
    showBorder?: 'true' | 'false'
}

declare const Title: ComponentClass<TitleProps>

export default Title