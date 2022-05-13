export class Common {
    props: { style?: {} }
    types: { default?: '' }

    constructor(props: {}, types: {}) {
        this.props = props
        this.types = types
    }

    getTypes() {
        let types = {}
        for (let i in this.types) {
            Object.assign(
                types,
                this.types[i][this.props[i] ? this.props[i] : this.types[i].default]
            )
        }
        if (this.props.style) {
            Object.assign(
                types,
                this.props.style
            )
        }
        return types
    }
}