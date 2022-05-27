import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface TitleProps extends CommonStyle {
    name: string
    hideBlock?: boolean
    blockColor?: string
    showBorder?: boolean
}

declare const Title: ComponentClass<TitleProps>

export default Title