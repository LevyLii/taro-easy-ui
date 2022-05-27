import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface ListItemProps extends CommonStyle {
    name: string
    subName?: string
    showBorder?: boolean
    hideArrow?: boolean
}

declare const ListItem: ComponentClass<ListItemProps>

export default ListItem