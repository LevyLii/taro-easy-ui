import {ComponentClass} from "react";
import {CommonStyle} from "./common";
import {ListItemProps} from "./listItem";

export interface ListProps extends CommonStyle {
    data: Array<ListItemProps>
}

declare const List: ComponentClass<ListProps>

export default List
