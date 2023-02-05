import React from "react";
import {Container, Tabs} from "taro-easy-ui";
import {View} from "@tarojs/components";


export default class Index extends React.Component {
    state: { current: number }

    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    setCurrent(e: number) {
        this.setState({
            current: e
        })
    }

    render() {
        let {current} = this.state
        return (
            <Container space={24} style={{paddingBottom: '24rpx'}}>
                <Tabs
                    data={['标签一', '标签二', '标签三']}
                    style={{display:'flex',justifyContent:'space-around'}}
                    currentTabIndex={current}
                    onTab={res => {
                        this.setCurrent(res)
                    }}
                />
                <View>内容{current + 1}</View>
            </Container>
        );
    }
}