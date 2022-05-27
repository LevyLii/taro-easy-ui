import {CommonComponent} from "../../modules";
import {View} from "@tarojs/components";
import React from "react";
import {TitleTypes} from "../../modules/types";
import {TitleProps} from "../../../types/title";

export default class Title extends CommonComponent {
    props: TitleProps

    constructor(props: TitleProps) {
        super(props, TitleTypes);
    }

    render() {
        let {types} = this.state
        let {name, hideBlock, blockColor} = this.props
        return (
            <View
                className={'teu-title'}
                style={{...types}}
                onClick={(e) => {
                    super.onClick(e)
                }}
            >
                {
                    !hideBlock &&
                    <View
                        className={'teu-title--block'}
                        style={blockColor ? {backgroundColor: blockColor} : {}}
                    />
                }
                <View className={'teu-title--name'}>{name}</View>
            </View>
        );
    }
}