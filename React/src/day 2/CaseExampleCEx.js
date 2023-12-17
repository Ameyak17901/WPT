import React from "react";

export default class CaseExampleCEx extends React.Component {
  constructor() {
    super();
    this.state = { str: "", orig: "" };
    this.handler = this.handler.bind(this);
  }

  handler = (e) => {
    let ch = e.target.id;
    switch (ch) {
      case "uc":
        this.setState({
          orig: this.state.str,
          str: this.state.str.toUpperCase(),
        });
        break;
      case "lc":
        this.setState({
          orig: this.state.str,
          str: this.state.str.toLowerCase(),
        });
        break;
      case "tc":
        this.setState({
          orig: this.state.str,
          str:
            this.state.str.charAt(0).toUpperCase() +
            this.state.str.substring(1).toLowerCase(),
        });
        break;
      default:
        break;
    }
  };

  revHandler = (e) => {
    let s = this.state.str;
    let rev = "";
    for (let i = s.length - 1; i >= 0; i--) {
      rev += s.charAt(i);
    }
    this.setState({ orig: this.state.str, str: rev });
  };

  render() {
    return (
      <div>
        <label>
          Enter string: {""}
          <input
            type="text"
            id="tf1"
            onBlur={(e) => {
              this.setState({ str: e.target.value, orig: e.target.value });
            }}
          />
        </label>
        <label>
          reverse
          <input type="checkbox" onClick={this.revHandler} />
        </label>
        <label>
          uppercase{" "}
          <input type="radio" name="case" id="uc" onClick={this.handler} />
        </label>
        <label>
          lowercase{" "}
          <input type="radio" name="case" id="lc" onClick={this.handler} />
        </label>
        <label>
          titlecase{" "}
          <input type="radio" name="case" id="tc" onClick={this.handler} />
        </label>
        <p>{this.state.str}</p>
      </div>
    );
  }
}
