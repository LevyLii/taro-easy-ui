import {CommonComponent} from "../../modules";
import {View} from "@tarojs/components";
import React from "react";
import {ButtonProps} from "../../../types/button";
import {ButtonTypes} from "../../modules/types";

export default class Button extends CommonComponent {
    props: ButtonProps

    constructor(props: ButtonProps) {
        super(props, ButtonTypes);
    }

    render() {
        let {types} = this.state
        let {name} = this.props
        return (
            <View
                className={'teu-button'}
                style={{...types}}
                onClick={(e) => {
                    super.onclick(e)
                }}
            >
                {name}
            </View>
        );
    }
}