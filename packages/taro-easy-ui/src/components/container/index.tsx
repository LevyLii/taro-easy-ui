import {CommonComponent} from "../../modules";
import {View} from '@tarojs/components';
import React from 'react';
import {ContainerProps} from "../../../types/container";
import {ContainerTypes} from "../../modules/types";

export default class Container extends CommonComponent {
    props: ContainerProps;
    types: ContainerTypes;

    constructor(props: ContainerProps) {
        super(props);
        this.types = new ContainerTypes(props)
        Object.assign(
            this.state,
            {
                types: this.types.getTypes()
            }
        )
    }

    render() {
        let {types} = this.state
        return (
            <View className={'teu-container'} style={{...types}}>
                {this.props.children}
            </View>
        );
    }
}