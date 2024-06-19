import React, { Component } from "react";
import loading from "../../assets/loading.gif";
import './../Loading/Loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={loading} />
      </div>
    );
  }
}
