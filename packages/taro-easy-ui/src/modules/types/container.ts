import {ContainerProps} from "../../../types/container";
import {Common} from "./common";

export default class ContainerTypes extends Common {
    constructor(props: ContainerProps) {
        super(
            props,
            {
                'mode': new Map<string | boolean, any>([
                    ['horizontal', {
                        'flexDirection': 'row'
                    }],
                    ['vertical', {
                        'flexDirection': 'column'
                    }],
                    ['default', 'vertical']
                ])
            }
        )
    }
}