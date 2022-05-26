import {CommonComponent} from "../../modules";
import {ScrollView, View} from "@tarojs/components";
import React from "react";
import {TabsTypes} from "../../modules/types";
import {TabsProps} from "../../../types/tabs";
import Taro, {eventCenter, getCurrentInstance} from "@tarojs/taro";


export default class Tabs extends CommonComponent {
    props: TabsProps
    windowWidth: number
    $instance: any = getCurrentInstance()

    constructor(props: TabsProps) {
        super(props, TabsTypes);
        this.windowWidth = 375
        Object.assign(
            this.state,
            {
                currentTabIndex: props.currentTabIndex ? props.currentTabIndex : 0,
                leftDistances: [],
                scrollLeft: 0
            }
        )
    }

    componentWillMount() {
        const onReadyEventId = this.$instance.router.onReady
        eventCenter.once(onReadyEventId, () => {
            Taro.getSystemInfo().then(res => {
                this.windowWidth = res.windowWidth
            })
            const query = Taro.createSelectorQuery()
            query.selectAll('.teu-tabs--item').boundingClientRect()
            query.select('.teu-tabs--item--underline').boundingClientRect()
            query.exec(res => {
                let halfWidth = res[1].width / 2
                this.setState({
                    leftDistances: res[0].map(res => {
                        return res.left + (res.width / 2) - halfWidth
                    })
                })
            })
        })
    }

    changeCurrent(e: number) {
        let {leftDistances} = this.state
        this.setState({
            currentTabIndex: e,
            scrollLeft: leftDistances[e] - (this.windowWidth / 2)
        })
        if (this.props.onTab)
            this.props.onTab(e)
    }

    render() {
        let {types, currentTabIndex, leftDistances, scrollLeft} = this.state
        let {data} = this.props
        return (
            <ScrollView
                scrollX
                scrollWithAnimation
                className={'teu-tabs'}
                style={{...types}}
                scrollLeft={scrollLeft}
            >
                <View
                    className={'teu-tabs'}
                    style={{...types}}
                >
                    {
                        data.map((res, index) => {
                            return (
                                <View
                                    className={'teu-tabs--item'}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        this.changeCurrent(index)
                                    }}
                                >
                                    <View
                                        className={`teu-tabs--item--text ${index === currentTabIndex && 'teu-tabs--item--text---active'}`}>{res}</View>
                                </View>
                            )
                        })
                    }
                    <View className={'teu-tabs--item--underline'} style={{left: leftDistances[currentTabIndex]}}/>
                </View>
            </ScrollView>
        );
    }
}