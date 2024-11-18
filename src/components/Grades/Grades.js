import React, { Component } from "react";

class Grades extends Component {
  state = {
    Grade: 0, // Początkowa ocena
    newGrade: 0, // Wprowadzona przez użytkownika ocena procentowa
  };

  addGrade = () => {
    this.setState({ Grade: this.state.Grade + parseFloat(this.state.newGrade) });
  };

  handleInputChange = (event) => {
    this.setState({ newGrade: event.target.value });
  };

  getGradeText = () => {
    if (this.state.Grade < 50) {
      return "2";
    } else if (this.state.Grade < 70) {
      return "3";
    } else {
      return "4"; // Zwracamy ocenę "4" jeśli wynik jest >= 70
    }
  };

  render() {
    return (
      <div>
        <h3>Wynik egzaminu</h3>
        <h4>Wynik Procentowy : {this.state.Grade}%</h4><h4>Ocena : {this.getGradeText()}</h4>
        <input
          type="number"
          value={this.state.newGrade}
          onChange={this.handleInputChange}
          placeholder="Wprowadź wynik"
        />
        <button onClick={this.addGrade}>Dodaj Ocene</button>
      </div>
    );
  }
}

export default Grades;