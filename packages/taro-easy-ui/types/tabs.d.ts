import {ComponentClass} from "react";
import {CommonStyle} from "./common";

export interface TabsProps extends CommonStyle {
    data: Array<string>
    currentTabIndex?: number
    onTab?: (e: number) => void
    color:string
}

declare const Tabs: ComponentClass<TabsProps>

export default Tabs
