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
        let {name} = this.props
        return (
            <View
                className={'teu-list-item'}
                style={{...types}}
                onClick={(e) => {
                    super.onclick(e)
                }}
            >
                <View className={'teu-list-item--name'}>{name}</View>
                <Text className={'iconfont icon-jiantouyou teu-list-item--arrow'}/>
            </View>
        );
    }
}