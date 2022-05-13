import {CommonComponent} from "../../modules";
import {View} from "@tarojs/components";
import React from "react";
import {ListProps} from "../../../types/list";
import {ListTypes} from "../../modules/types";
import {ListItem} from "../../index";

export default class List extends CommonComponent {
    props: ListProps
    types: ListTypes

    constructor(props: ListProps) {
        super(props);
        this.types = new ListTypes(props);
        Object.assign(
            this.state,
            {
                types: this.types.getTypes()
            }
        )
    }

    render() {
        let {types} = this.state
        let {data} = this.props
        return (
            <View className={'teu-list'} style={{...types}}>
                {
                    data.map(res => {
                        return (
                            <ListItem {...res}/>
                        )
                    })
                }
            </View>
        );
    }
}