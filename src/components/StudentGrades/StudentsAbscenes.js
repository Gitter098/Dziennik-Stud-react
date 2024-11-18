import React, { Component } from "react";
import axios from "axios";
import StudentGrades from "./StudentGrades";
import Absences from "../Absences/Absences";
class StudentsAbsences extends Component {
  state = {
    students: [],
    absences: 0,
  };

  componentDidMount() {
    axios.get("http://localhost:3000/posts").then((response) => {
      this.setState({ students: response.data });
      console.log(this.state);
    });
  }

  absencesTrue = () => {
    this.setState({ absences: 1 });
  };

  render() {
    return (
      <div>
        <h1>Lista Studentów</h1>
        {this.state.students.map((Student) => (
          <div key={this.state.students.id}>
            <h1>{Student.name}</h1>
            <button onClick={this.absencesTrue}>Nieobecnosci</button>
            {this.state.absences === 1 ? (
              <Absences Absence={Student.absences} />
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}
export default StudentsAbsences;
