import React, { Component } from "react";
import axios from "axios";
import Grades from "../Grades/Grades";
class StudentGrades extends Component {
  state = {
    students: [],
    grades: 0,
  };

  componentDidMount() {
    axios.get("http://localhost:3000/posts").then((response) => {
      this.setState({ students: response.data });
      console.log(this.state);
    });
  }

  gradesTrue = () => {
    this.setState({ grades: 1 });
  };

  
  render() {
    return (
      <div>
        <h1>Lista Studentów</h1>
        {this.state.students.map((Student) => (
          <div key={this.state.students.id}>
            <h1>{Student.name}</h1>
            <button onClick={this.gradesTrue}>Wprowadz Ocene </button>
            {this.state.grades === 1 ? (
              <Grades Grade={Student.grades} />
            ) :  null} 
          </div>
        ))}
      </div>
    );
  }
}

export default StudentGrades;
