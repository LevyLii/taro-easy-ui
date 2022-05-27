import {CommonComponent} from "../../modules";
import {Text, View} from "@tarojs/components";
import React from "react";
import {ListItemProps} from "../../../types/listItem";
import {ListItemTypes} from "../../modules/types";

export default class ListItem extends CommonComponent {
    props: ListItemProps

    constructor(props: ListItemProps) {
        super(props, ListItemTypes);
    }

    render() {
        let {types} = this.state
        let {name, subName, hideArrow} = this.props
        return (
            <View
                className={'teu-list-item'}
                style={{...types}}
                onClick={(e) => {
                    super.onClick(e)
                }}
            >
                <View className={'teu-list-item--name'}>{name}</View>
                <View className={'teu-list-item--sub'}>{subName}</View>
                {!hideArrow && <Text className={'iconfont icon-jiantouyou teu-list-item--arrow'}/>}
            </View>
        );
    }
}