import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { AddTest } from "./config/action/actiondunction";

class Application extends Component {
  render() {
    return (
      <div className="App">
        <p>This is my script</p>
        <button
          onClick={() => {
            this.props.isDispatch("Element Connart");
          }}
        >
          Bouton
        </button>

        {this.props.liste.map((element, index) => {
          return (
            <div key={index}>
              <p>{element}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { liste: state };
};

const mapDispatchToProps = dispatch => {
  return {
    isDispatch: valeur => {
      dispatch(AddTest(valeur));
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default App;
