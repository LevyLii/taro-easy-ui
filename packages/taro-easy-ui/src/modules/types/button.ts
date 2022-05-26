import {Common} from "./common";
import {ButtonProps} from "../../../types/button";
import {fitUnit} from "../../utils";

export default class ButtonTypes extends Common {
    constructor(props: ButtonProps) {
        super(
            props,
            {
                mode: {
                    'circle': {
                        'borderRadius': fitUnit(99999)
                    },
                    'semicircle': {
                        'borderRadius': fitUnit(8)
                    },
                    'square': {},
                    'default': 'semicircle'
                }
            },
            {
                'backgroundColor': 'backgroundColor',
                'textColor': 'color'
            }
        )
    }
}