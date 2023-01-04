import React, { PureComponent } from 'react'
import "./Standings.css";
import * as queries from '../../../graphql/queries'
import {API} from 'aws-amplify'

class Standings extends PureComponent {
  constructor(props) {
      super(props)

      this.getTopStudents = this.getTopStudents.bind(this);
      this.renderQuarterlyReport = this.renderQuarterlyReport.bind(this);      
      this.renderStandings = this.renderStandings.bind(this);
      this.renderStandingsAdmin = this.renderStandingsAdmin.bind(this);
      this.renderStandingsStudent = this.renderStandingsStudent.bind(this);
 

      this.onStandingsClick = this.onStandingsClick.bind(this);
      this.onQuaterlyReportClick = this.onQuaterlyReportClick.bind(this);
      this.onRandomWinnersClick = this.onRandomWinnersClick.bind(this);

      this.setState({isadministrator:this.props.isadministrator})
      this.setState({reporttype:"standings"});
  }

  componentDidMount() {
    this.setState({reporttype:"standings"});
    this.getTopStudents()     
  }

  async getTopStudents()
  {
    //get all student events
    let studentevents = await API.graphql({
      query:queries.listStudentEvents
    });
    let events = await API.graphql({
      query:queries.listEvents 
    });

    //add points to the array
    var studentseventspoints = studentevents.data.listStudentEvents.items.map(function (item) {
      return {
          studentid: item.studentid,           
          eventpoints: events.data.listEvents.items.filter( function(item1){return (item1.eventcode === item.eventcode);})[0].eventpoints
      } 
    });
    //console.log("studentseventspoints");
    //console.log(studentseventspoints);

    //group by student id
    let students = await API.graphql({
      query:queries.listStudents
    });

    var studentspoints = students.data.listStudents.items.map(function (item) {
      return {
        studentname: item.firstname + ' ' + item.lastname,
        studentgrade: item.grade + "th Grade",          
        studentpoints: studentseventspoints.filter( function(item1){return (item1.studentid === item.id);}).reduce((acc, o) => acc + parseInt(o.eventpoints), 0)
      } 
    });


    let studentspointstop5 = studentspoints.sort((a, b) => a.studentpoints < b.studentpoints ? 1 : -1).slice(0, 5);
   

    //random winners
    let randomwinners = [];
    let random9 = Math.floor(Math.random() * studentspoints.filter(function(item1){return (item1.studentgrade === "9th Grade");}).length);
    let random10 = Math.floor(Math.random() * studentspoints.filter(function(item1){return (item1.studentgrade === "10th Grade");}).length);
    let random11 = Math.floor(Math.random() * studentspoints.filter(function(item1){return (item1.studentgrade === "11th Grade");}).length);
    let random12 = Math.floor(Math.random() * studentspoints.filter(function(item1){return (item1.studentgrade === "12th Grade");}).length);

    randomwinners.push(studentspoints.filter(function(item1){return (item1.studentgrade === "9th Grade");})[random9]);
    randomwinners.push(studentspoints.filter(function(item1){return (item1.studentgrade === "10th Grade");})[random10]);
    randomwinners.push(studentspoints.filter(function(item1){return (item1.studentgrade === "11th Grade");})[random11]);
    randomwinners.push(studentspoints.filter(function(item1){return (item1.studentgrade === "12th Grade");})[random12]);

    studentspoints = studentspoints.sort((a, b) => a.studentname > b.studentname ? 1 : -1)

    //console.log(studentspointstop5);
  
    this.setState({studentspointstop5:studentspointstop5}) 
    this.setState({studentspoints:studentspoints}) 
    this.setState({randomwinners:randomwinners}) 
    
    //console.log(studentspoints); 
 
  }

 

mm_dd_yyyy() {
  function twoDigit(n) { return (n < 10 ? '0' : '') + n; }

  var now = new Date();
  return '  ' + twoDigit(now.getMonth() + 1) + '/' + twoDigit(now.getDate()) + '/' + now.getFullYear();
}

 onStandingsClick()
 {
    this.setState({reporttype:"standings"})
 }
 onQuaterlyReportClick()
 {
    this.setState({reporttype:"quarterlyreport"})
 }
 onRandomWinnersClick()
 {
    this.setState({reporttype:"randomwinners"})
 }
  

 renderStandingsAdmin()
 {
  return(
    <div className = "standings">
            <h7><button className="quaterlyreportbutton" onClick={this.renderStandings}> Current Standings </button></h7>
            <span/><span/><h7><button className="quaterlyreportbutton" onClick={this.onQuaterlyReportClick}> Generate Quarterly Report </button></h7>
            <span/><span/><h7><button className="quaterlyreportbutton" onClick={this.onRandomWinnersClick}> Generate Random Winners </button></h7> 
            <br/> <br/> <br/>
    <h3>Current standings as of {this.mm_dd_yyyy()}</h3>
    <table class="mytable"> 
        <thead>
          <tr>
          <th>Position</th>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Total Points</th> 
          </tr>
        </thead>
        <tbody-noborder>
          {this.state.studentspointstop5.map((Student, index) => {
            return (
              <tr key={Student.studentname}>
                <td>{++index}</td>
                <td>{Student.studentname}</td>
                <td>{Student.studentgrade}</td>
                <td>{Student.studentpoints}</td>                    
              </tr>
            );
          })}
        </tbody-noborder>
      </table>
    
      <br/><br/><br/>
            

    </div>
  );
 }

 renderStandingsStudent()
 {
  return(
    <div className = "standings">
            {/* <h7><button className="quaterlyreportbutton" onClick={this.renderStandings}> Current Standings </button></h7> */}
    <h3>Current standings as of {this.mm_dd_yyyy()}</h3>
    <table class="mytable"> 
        <thead>
          <tr>
          <th>Position</th>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Total Points</th> 
          </tr>
        </thead>
        <tbody-noborder>
          {this.state.studentspointstop5.map((Student, index) => {
            return (
              <tr key={Student.studentname}>
                <td>{++index}</td>
                <td>{Student.studentname}</td>
                <td>{Student.studentgrade}</td>
                <td>{Student.studentpoints}</td>                    
              </tr>
            );
          })}
        </tbody-noborder>
      </table>
    
      <br/><br/><br/>
            

    </div>
  );
 }



  renderStandings()
  {
    //console.log("in renderstandings")

    if(typeof(this.state.studentspointstop5) === 'undefined' || this.state.studentspointstop5 === null)
    {

       
      // console.log(this.state.studentspointstop5)

      return (
        <div className = "standings"><h3>Loading...</h3></div>
      );
    }
    else
    {
      //console.log(this.props.isadministrator);
      if(this.props.isadministrator)  
      {
        //console.log("in render admin")
        return this.renderStandingsAdmin();
      }
      else
      {
        //console.log("in render student")
        return this.renderStandingsStudent();
      }
    
    }
  }

  // gets and displays information from the database about all students, their point values, and grades
  renderQuarterlyReport()
  {
     return(      
      <div className = "standings">

      <h7><button className="quaterlyreportbutton" onClick={this.onStandingsClick}> Current Standings </button></h7>
      <span/><span/><h7><button className="quaterlyreportbutton" onClick={this.onQuaterlyReportClick}> Generate Quarterly Report </button></h7>
      <span/><span/><h7><button className="quaterlyreportbutton" onClick={this.onRandomWinnersClick}> Generate Random Winners </button></h7>  <br/> <br/> <br/>

       <h3>Quarter 4 2022 Report</h3>
       <table class="mytable">
         <thead>
           <tr>
             <th>Student Name</th>
             <th>Grade</th>
             <th>Total Points</th> 
           </tr>
         </thead>
         <tbody>
           {this.state.studentspoints.map((Student, index) => {
             return (
               <tr key={Student.studentname}>
                 <td>{Student.studentname}</td>
                 <td>{Student.studentgrade}</td>
                 <td>{Student.studentpoints}</td>                    
               </tr>
             );
           })}
         </tbody>
       </table>
      
       <br/><br/><br/>
     </div>
   );
    
  }

  // generates and displays 4 random winners
  renderRandomWinners()
  {
     return(      
      <div className = "standings">

      <h7><button className="quaterlyreportbutton" onClick={this.onStandingsClick}> Current Standings </button></h7>
      <span/><span/><h7><button className="quaterlyreportbutton" onClick={this.onQuaterlyReportClick}> Generate Quarterly Report </button></h7>
      <span/><span/><h7><button className="quaterlyreportbutton" onClick={this.onRandomWinnersClick}> Generate Random Winners </button></h7>  <br/> <br/> <br/>

       <h3>Random Winners</h3>
       <table class="mytable">
         <thead>
           <tr>
             <th>Student Name</th>
             <th>Grade</th>
             <th>Total Points</th> 
           </tr>
         </thead>
         <tbody-noborder>
           {this.state.randomwinners.map((Student, index) => {
             return (
               <tr key={Student.studentname}>
                 <td>{Student.studentname}</td>
                 <td>{Student.studentgrade}</td>
                 <td>{Student.studentpoints}</td>                    
               </tr>
             );
           })}
         </tbody-noborder>
       </table>
      
       <br/><br/><br/>
     </div>
   );
    
  }


  render() {    
    

    
    return (this.state === null || this.state.reporttype === null || this.state.studentspointstop5 === null || (typeof(this.state.studentspointstop5) === 'undefined')  ? (<span> Loading....Please wait.</span>) : 
    
    this.state.reporttype === "standings" ? this.renderStandings() : 
    this.state.reporttype === "quarterlyreport" ? this.renderQuarterlyReport() :
    this.renderRandomWinners()
    );
  }


   

 
}

export default Standings  