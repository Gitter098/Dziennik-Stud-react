import React, { Component } from "react";

class Absences extends Component {
  state = {
    Absence: this.props.Absence,
  };

  addAbsences = () => {
    this.setState({ Absence: this.state.Absence + 1 });
  };

  render() {
    return (
      <div>
        <h3>Liczba nieobecnosci </h3>
        <h4>{this.state.Absence}</h4>
        <button onClick={this.addAbsences}>Dodaj jedna nieobecnosc</button>
      </div>
    );
  }
}

export default Absences;
