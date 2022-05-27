import {CommonComponent} from "../../modules";
import {View} from "@tarojs/components";
import React from "react";
import {DrawerTypes} from "../../modules/types";
import {DrawerProps} from "../../../types/drawer";

export default class Drawer extends CommonComponent {
    props: DrawerProps

    constructor(props: DrawerProps) {
        super(props, DrawerTypes);
        Object.assign(
            this.state,
            {
                isOpened: false,
                opacity: 0
            }
        )
    }

    componentDidMount() {
        let {mode} = this.props
        switch (mode) {
            case "top":
                this.setState({
                    extTypes: {
                        width: '100%',
                        height: '50%',
                        top: '-50%',
                        left: 0
                    }
                })
                break
            case "bottom":
                this.setState({
                    extTypes: {
                        width: '100%',
                        height: '50%',
                        bottom: '-50%',
                        left: 0
                    }
                })
                break
            case "left":
                this.setState({
                    extTypes: {
                        width: '50%',
                        height: '100%',
                        top: 0,
                        left: '-50%'
                    }
                })
                break
            case "right":
                this.setState({
                    extTypes: {
                        width: '50%',
                        height: '100%',
                        top: 0,
                        right: '-50%'
                    }
                })
                break
            default:
                break
        }
    }

    componentDidUpdate(prevProps) {
        let {mode, isOpened} = this.props
        let {extTypes} = this.state
        if (isOpened !== prevProps.isOpened) {
            this.setState({
                isOpened: true,
                extTypes: Object.assign(
                    extTypes,
                    {
                        [mode]: isOpened ? 0 : '-50%'
                    }
                ),
                opacity: isOpened ? 1 : 0
            })
            if (!isOpened) {
                setTimeout(() => {
                    this.setState({
                        isOpened: false
                    })
                }, 400)
            }
        }
    }

    render() {
        let {types, extTypes, isOpened, opacity} = this.state
        let {children, onCancel} = this.props
        return (
            <View
                className={'curtain'}
                style={{top: isOpened ? 0 : '-100%', opacity: opacity ? 1 : .01}}
                onClick={onCancel}
            >
                <View
                    className={'teu-drawer'}
                    style={{...types, ...extTypes}}
                    onClick={(e) => {
                        super.onClick(e)
                    }}
                >
                    {children}
                </View>
            </View>
        );
    }
}