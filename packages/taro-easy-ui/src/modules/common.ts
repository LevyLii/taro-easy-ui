import React from "react";
import "../../src/styles/index.less";
import {Store} from "../store";

export default class Common extends React.Component {
    store: Store;
    state: any;

    constructor(props) {
        super(props);
        this.store = Store.createStore();
        this.store.on(() => {
            this.setState({
                store: this.store.getData()
            })
        });
        this.state = {
            store: this.store.getData()
        };
    }

    emit(value: Object) {
        this.store.emit(value)
    }
}