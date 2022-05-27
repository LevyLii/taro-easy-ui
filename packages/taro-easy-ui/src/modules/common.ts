import React from "react";
import {eConsole} from "../utils";

export default class Common extends React.Component {
    state: any
    props: any
    types: { getTypes: () => {} }

    constructor(props, componentType) {
        super(props)
        this.types = new componentType(props)
        this.state = {
            types: this.types.getTypes()
        }
        this.onClick.bind(this)
    }

    onClick(event) {
        event.stopPropagation()
        try {
            this.props.onClick()
        } catch (e) {
            eConsole('未定义onclick')
        }
    }
}