import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface DrawerProps extends CommonStyle {
    children?: any
    mode: 'left' | 'right' | 'top' | 'bottom'
    isOpened: boolean
    onCancel: () => void
    showCancel?: boolean
    cancelColor?: string
}

declare const Drawer: ComponentClass<DrawerProps>

export default Drawer
