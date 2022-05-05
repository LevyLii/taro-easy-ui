import {View} from '@tarojs/components'
import React from 'react'
import {ContainerProps} from "../../../types/container";

export default class Container extends React.Component<ContainerProps> {
    constructor(props: ContainerProps) {
        super(props);
    }

    render() {
        return <View>666</View>;
    }
}