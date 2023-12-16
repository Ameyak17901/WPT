import React from "react"
export default class HalfString extends React.Component {

    constructor() {
        super()
        this.state = { str: '' }
    }

    handler = (e) => {
        let s = e.target.value
        let len = s.length
        this.setState({ str: s.substring(0, len / 2).toUpperCase() })
        this.handler = this.handler.bind(this)
    }

    render() {
        return (
            <div>
                Enter the string: <input type='text' onBlur={this.handler}></input>
                <p>{this.state.str}</p>
            </div>
        )
    }
}