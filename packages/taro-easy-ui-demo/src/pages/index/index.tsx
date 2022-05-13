import React from 'react';
import './index.less';
import {Container, List, Store} from 'taro-easy-ui';

export default class Index extends React.Component {
    private store: any;

    constructor(props) {
        super(props);
        this.store = Store.createStore()
    }

    componentDidMount() {
        this.store.emit({'author': 'LevyLii'})
        console.log(this.store.getData())
    }

    render() {
        return (
            <Container>
                <List data={[
                    {
                        name: '标题栏',
                    },
                    {
                        name: '提示框',
                    }
                ]}/>
            </Container>
        );
    }
}