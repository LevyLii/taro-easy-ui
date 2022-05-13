import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface TitleProps extends CommonStyle {
    title: string
    showBlock?: 'true' | 'false'
    blockColor?: string
}

declare const Title: ComponentClass<TitleProps>

export default Title