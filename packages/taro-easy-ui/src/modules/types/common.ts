export class Common {
    props: { style?: {} }
    types: { default?: '' }
    styles: {} | undefined

    constructor(props: {}, types: {}, styles?: {}) {
        this.props = props
        this.types = types
        this.styles = styles
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
        if (this.styles) {
            for (let i in this.styles) {
                if (this.props[i]) {
                    Object.assign(
                        types,
                        {
                            [this.styles[i]]: this.props[i]
                        }
                    )
                }
            }
        }
        return types
    }
}