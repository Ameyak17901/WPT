import React from "react";

export default class CaseExample extends React.Component {

    constructor() {
        super()
        this.state = { str: '', rev: '', orig: '' }
    }

    handler = (e) => {
        console.log(e.target.value)
        switch (e.target.value) {
            case 'uc': {
                let s = this.state.str
                console.log(s)
                let s1 = s.toUpperCase()
                this.setState({ str: s1 })
                break;
            }
            case 'lc': {
                let s = this.state.str
                let s1 = s.toLowerCase()
                this.setState({ str: s1 })
                console.log(s1)
                break;
            }
            case 'tc': {
                let s = this.state.str
                let first = s.charAt(0).toUpperCase()
                let second = s.substring(1).toLowerCase()
                let s1 = first + second
                console.log(s1)
                this.setState({ str: s1 })
                break;
            }
            default: break;
        }
        console.log(this.state.str)
    }

    revhandler = (e) => {
        let isChecked = e.target.checked
        if (isChecked) {
            let s = this.state.str
            let rev = ''
            for (let i = s.length - 1; i >= 0; i--) {
                rev += s.charAt(i)
            }
            this.setState({ str: rev })
            this.setState({ rev: rev })
        } else {
            this.setState({ str: this.state.orig })
        }
    }

    render() {
        return (
            <div>
                Enter the string: <input type="text"></input><br></br>
                reverse: <input type='checkbox' onClick={this.revhandler} value='rev'></input><br></br>
                upper case: <input type='radio' value="uc" name="case" onClick={this.handler}></input><br></br>
                lower case: <input type='radio' value='lc' name="case" onClick={this.handler}></input><br></br>
                title case: <input type='radio' value='tc' name="case" onClick={this.handler}></input><br></br>
                <p>{this.state.s}</p>
            </div>
        )
    }
}