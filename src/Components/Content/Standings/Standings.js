import React, { PureComponent } from 'react'
import "./Standings.css";
import * as queries from '../../../graphql/queries'
import {API} from 'aws-amplify'

class Standings extends PureComponent {
  constructor(props) {
      super(props)

      this.getTopStudents = this.getTopStudents.bind(this);
  }

  componentDidMount() {
    this.getTopStudents()
  }

  async getTopStudents()
  {
    //get all student events
    let studentevents = await API.graphql({
      query:queries.listStudentEvents
    });

    let students = await API.graphql({
      query:queries.listStudents
    });

    console.log(students);
    console.log(studentevents);
    var studentspoints = students.data.listStudents.items.map(function (item) {
      return {
          studentname: item.name.toUpperCase(),
          studentgrade: "12th Grade",
          studentpoints: studentevents.data.listStudentEvents.items.filter( function(item){return (item.studentid === item.id);}).
          reduce((acc, o) => acc + parseInt(o.eventpoints), 0)
      } 
      
      //get top items


    });

    this.setState({studentspoints:studentspoints}) 
    console.log(studentspoints); 
 
  }

  getAllStudentInfo()
  {

  }

  renderStandings()
  {
    return (      
      <div className = "standings">
      <h3>Current Standings</h3>
      <table class="mytable">
          <thead>
            <tr>
            <th>Position</th>
              <th>Student Name</th>
              <th>Grade</th>
              <th>Total Points</th> 
            </tr>
          </thead>
          <tbody>
            {this.state.studentspoints.map((Student, index) => {
              return (
                <tr key={Student.studentname}>
                  <td>{++index}</td>
                  <td>{Student.studentname}</td>
                  <td>{Student.studentgrade}</td>
                  <td>{Student.studentpoints}</td>                    
                </tr>
              );
            })}
          </tbody>
        </table>
       
        <br/><br/><br/>
        <h7><button className="quaterlyreportbutton" onClick={() => this.getAllStudentInfo}> Generate Quarterly Report </button></h7>
      </div>
    );
  }

  render() {    
    
    //console.log(this.state.studentspoints);
    return (this.state === null) ? (<span> Loading....Please wait.</span>) : this.renderStandings() ;
  }
}

export default Standings  