import React from "react";

class Hello extends React.Component {

    // constructor() {
    //     super()
    // }
    render() {
        return (
            <div style={{ backgroundColor: 'red', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ color: this.props.col }}>Hello World from {this.props.name}</p>
            </div>

        )
    }
}

export default Hello;