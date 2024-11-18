import React, { Component } from "react";
import Students from "../StudentsList/Students";
import StudentGrades from "../StudentGrades/StudentGrades";
import StudentsAbsences from "../StudentGrades/StudentsAbscenes";



class MainArea extends Component {
  state = {
    Students: 0,
    Grades: 0,
    Absences: 0,
  };

  studentsTrue = () => {
    this.setState({ Students: 1 });
    this.setState({ Grades: 0 });
    this.setState({ Absences: 0 });
    console.log(this.state);
  };
  gradesTrue = () => {
    this.setState({ Students: 0 });
    this.setState({ Grades: 1 });
    this.setState({ Absences: 0 });
    console.log(this.state);
  };
  absencesTrue = () => {
    this.setState({ Students: 0 });
    this.setState({ Grades: 0 });
    this.setState({ Absences: 1 });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div>
          <h1 className="Glowna">Dziennik Studenta</h1>

          <button
            onClick={this.studentsTrue}
            type="button"
            className="btn btn-primary-lg"
          >
            {" "}
            Lista Studentow{" "}
          </button>
          <button
            onClick={this.gradesTrue}
            type="button"
            className="btn btn-primary-lg"
          >
            Ocena Z Egzaminu
          </button>
          <button
            onClick={this.absencesTrue}
            type="button"
            className="btn btn-primary-lg"
          >
            Nieobecnosci
          </button>
        </div>

        {this.state.Students === 1 ? (
          <Students Clients={this.state.students} />
        ) : null}
        {this.state.Grades === 1 ? <StudentGrades/> : null}
        {this.state.Absences === 1 ? <StudentsAbsences/> : null}
      </>
    );
  }
}
export default MainArea;
