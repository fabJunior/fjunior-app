// External
import React, { Component } from "react";
// Ours
import MainContentArea from "./Containers/MainContentArea";
import { colors } from "./Styles/colors";
import type { Dispatch, GetState } from "./Common/TypeLibrary/Redux";

class App extends Component<{
  getState: GetState,
  dispatch: Dispatch
}> {

  constructor(props) {
    super(props);

    this.state = {
      konamiCodeActive: false
    };
  }

  componentDidMount() {
    this.onKonamiCode(this.activateCheats);
  }

  onKonamiCode(callBack) {
    var input = "";
    var key = "38384040373937396665";
    document.addEventListener("keydown", function(e) {
      input += ("" + e.keyCode);
      if (input === key) {
        input = "";
        return callBack();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }

  activateCheats = () => {
    this.setState({ konamiCodeActive: !this.state.konamiCodeActive });
    if (this.state.konamiCodeActive) {
      document.body.classList.add("invert");
    } else {
      document.body.classList.remove("invert");
    }
  };

  render() {
    return (
      <div className="hInherit flexColumn">
        <div className="hInherit flexDisplay flexChildFill flexCenter"
             style={{ overflow: "hidden", fontFamily: "DharmaGothicE-RegularItalic" }}>
          <div className={"flexColumn flexChildFill hInherit"}>
            <MainContentArea {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default (App);
