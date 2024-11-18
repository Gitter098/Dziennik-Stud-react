import React, { Component } from "react";
import axios from "axios";
class Students extends Component {
  state = {
    students: [],
    dupa: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3000/posts").then((response) => {
      this.setState({ students: response.data });
    });
    console.log(this.state);
  }
  makeOrder = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1 classnName="MainStud">Lista Studentów</h1>
        <ul>
          {this.state.students.map((student, index) => (
            <li className="Studs"key={index}>
              {student.name} - Nieobecności: {student.absences} - Ocena:{" "}
              {student.grade || "Brak oceny"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Students;

