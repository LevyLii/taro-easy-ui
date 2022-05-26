import React from "react";
import {Button, Container} from "taro-easy-ui";

export default class Index extends React.Component {
    render() {
        return (
            <Container space={12} style={{paddingBottom: '24rpx'}}>
                <Button name={'默认微圆角(semicircle)'}/>
                <Button name={'全圆角按钮(circle)'} mode={'circle'}/>
                <Button name={'方形角按钮(square)'} mode={'square'}/>
            </Container>
        );
    }
}