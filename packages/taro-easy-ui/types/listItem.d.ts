import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface ListItemProps extends CommonStyle {
    name: string
    showBorder?: 'true' | 'false'
    hideArrow?: boolean
    canNavigate?: boolean
    navigateMode?: 'navigate' | 'switch' | 'redirect' | 'relaunch'
    navigateUrl?: string
}

declare const ListItem: ComponentClass<ListItemProps>

export default ListItem