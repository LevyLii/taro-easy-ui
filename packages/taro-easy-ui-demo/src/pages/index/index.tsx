import React from 'react';
import {Container, List, Title} from 'taro-easy-ui';
import {Store} from 'simple-store-manager';
import * as Taro from "@tarojs/taro";
import {ListProps} from "taro-easy-ui/types/list";

const list: ListProps = {
    data: [
        {
            name: '按钮',
            onclick: () => {
                Taro.navigateTo({url: '/pages/button/index'}).then()
            }
        },
        {
            name: '标签栏',
            onclick: () => {
                Taro.navigateTo({url: '/pages/tabs/index'}).then()
            }
        }
    ]
}

export default class Index extends React.Component {
    store: any;

    constructor(props) {
        super(props);
        this.store = Store.createStore();
    }

    componentDidMount() {
        this.store.emit({'author': 'LevyLii'})
        console.log(this.store.getData())
    }

    render() {
        return (
            <Container>
                <Title name={'示例组件'}/>
                <List {...list}/>
            </Container>
        );
    }
}