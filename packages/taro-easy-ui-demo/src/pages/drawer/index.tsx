import React from "react";
import {Button, Container, Drawer} from "taro-easy-ui";

export default class Index extends React.Component {
    state: any

    constructor(props) {
        super(props);
        this.state = {
            topOpened: false,
            bottomOpened: false,
            leftOpened: false,
            rightOpened: false,
        }
    }

    render() {
        let {topOpened, bottomOpened, leftOpened, rightOpened} = this.state
        return (
            <Container space={12} style={{paddingBottom: '24rpx'}}>
                <Drawer
                    mode={'top'}
                    isOpened={topOpened}
                    onCancel={() => {
                        this.setState({
                            topOpened: false
                        })
                    }}
                ></Drawer>
                <Drawer
                    mode={'bottom'}
                    isOpened={bottomOpened}
                    onCancel={() => {
                        this.setState({
                            bottomOpened: false
                        })
                    }}
                ></Drawer>
                <Drawer
                    mode={'left'}
                    isOpened={leftOpened}
                    onCancel={() => {
                        this.setState({
                            leftOpened: false
                        })
                    }}
                ></Drawer>
                <Drawer
                    mode={'right'}
                    isOpened={rightOpened}
                    onCancel={() => {
                        this.setState({
                            rightOpened: false
                        })
                    }}
                ></Drawer>
                <Button
                    name={'顶部'}
                    onClick={() => {
                        this.setState({
                            topOpened: true
                        })
                    }}
                />
                <Button
                    name={'底部'}
                    onClick={() => {
                        this.setState({
                            bottomOpened: true
                        })
                    }}
                />
                <Button
                    name={'左部'}
                    onClick={() => {
                        this.setState({
                            leftOpened: true
                        })
                    }}
                />
                <Button
                    name={'右部'}
                    onClick={() => {
                        this.setState({
                            rightOpened: true
                        })
                    }}
                />
            </Container>
        );
    }
}