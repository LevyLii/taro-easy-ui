import {CommonComponent} from "../../modules";
import {View} from '@tarojs/components';
import React from 'react';
import {ContainerProps} from "../../../types/container";
import {ContainerTypes} from "../../modules/types";
import {fitUnit} from "../../utils";

export default class Container extends CommonComponent {
    props: ContainerProps;

    constructor(props: ContainerProps) {
        super(props, ContainerTypes);
    }

    render() {
        let {types} = this.state
        let {space, children} = this.props
        return (
            <View
                className={'teu-container'}
                style={{...types}}
                onClick={(e) => {
                    super.onclick(e)
                }}
            >
                {
                    children && [].concat.call(children).map((res, index) => {
                        return (
                            <React.Fragment>
                                {index > 0 && space && <View style={{height: fitUnit(space)}}/>}
                                {res}
                            </React.Fragment>
                        )
                    })
                }
            </View>
        );
    }
}