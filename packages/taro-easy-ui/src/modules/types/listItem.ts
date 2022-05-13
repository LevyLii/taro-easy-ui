import {Common} from "./common";
import {ListItemProps} from "../../../types/listItem";

export default class ListItemTypes extends Common {
    constructor(props: ListItemProps) {
        super(
            props,
            {
                showBorder: {
                    'true': {},
                    'false': {
                        borderBottomWidth: 0
                    },
                    'default': 'true'
                }
            }
        )
    }
}