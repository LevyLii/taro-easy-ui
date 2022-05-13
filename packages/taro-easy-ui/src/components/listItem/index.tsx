import {CommonComponent} from "../../modules";
import {Text, View} from "@tarojs/components";
import React from "react";
import {ListItemProps} from "../../../types/listItem";
import {ListItemTypes} from "../../modules/types";

export default class ListItem extends CommonComponent {
    props: ListItemProps
    types: ListItemTypes

    constructor(props: ListItemProps) {
        super(props);
        this.types = new ListItemTypes(props);
        Object.assign(
            this.state,
            {
                types: this.types.getTypes()
            }
        )
    }

    render() {
        let {types} = this.state
        let {name} = this.props
        return (
            <View className={'teu-list-item'} style={{...types}}>
                <View className={'teu-list-item--name'}>{name}</View>
                <Text className={'iconfont icon-jiantouyou teu-list-item--arrow'}/>
            </View>
        );
    }
}