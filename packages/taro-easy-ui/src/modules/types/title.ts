import {Common} from "./common";
import {TitleProps} from "../../../types/title";

export default class TitleTypes extends Common {
    constructor(props: TitleProps) {
        super(
            props,
            {
                'showBorder': new Map<string | boolean, any>([
                    [true, {}],
                    [false, {
                        'borderBottomWidth': 0
                    }],
                    ['default', true]
                ])
            }
        )
    }
}