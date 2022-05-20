//import React from 'react';
import axios from 'axios';
import React,{Component} from 'react';

//const url = "http://localhost:4000/appointment";
export default class PatientPortal extends Component{
    constructor (props){
        super(props);
            this.state={
                patientID:'', errorMessage:'', appointment:null,deleteFail:'',deleteSuccess:''
                ,email:'', phone:'',location:'',department:'',date:''
            };
            this.change = this.change.bind(this);
            this.fetchDetails = this.fetchDetails.bind(this);
            this.cancel = this.cancel.bind(this);
    }

    change =(event) =>{
        //this method should update state of the patientID with the value entered
        //const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            patientID: value
        })
        
    }

    fetchDetails = (e) =>{
        /*for canceling the appointment for id specified
        set the appropiate error message
        */
       //console.log(this.state.patientID)

        const url = "http://localhost:4000/appointment/"+this.state.patientID;
       axios.get(url).then(result=>{
           //console.log(result)
        this.setState({
            errorMessage: "",
            email:result.data.emailId,
            phone:result.data.phone,
            location: result.data.location,
            department: result.data.department,
            date : result.data.date
        })
       // console.log(this.state.date)
       }).catch(error=>{
           let y = "Patient ID:"+this.state.patientID+" is not found";
           this.setState({
               errorMessage: y
           })
       })
       e.preventDefault();//stops form from submiting
       
    }

    cancel = (e) =>{
        //for canceling the appointrment for the id specified
        //set the appropiate error message : "Delete successfully, refresh the page"
        const url2 = "http://localhost:4000/appointment/"+this.state.patientID;
        axios.delete(url2).then(result=>{
            this.setState({
                deleteSuccess: "Deleted SUccessfully, refresh the page"
            })
        }).catch(error=>{
            this.setState({
                deleteFail:"Something went wrong"
            })
        })
    }

    render(){
        return <React.Fragment>
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br/>
                        <div className="card">
                            <div className="card-header" style={{}}>
                                <h6> VIEW APPOINTMENT DETAILS</h6>
                            </div>
                            <div className="card-body">
                                {
                                    /*
                                    1.- Write code to render form as per screen shot (use html form)
                                    2.-Display successMessage or errorMessage after submission of form
                                    3.- use simple styling
                                    4.- should be controlled form
                                    5.- bind appropriate event handling methods
                                    6.-invoke the appropiate method on for submission (handle the event on the form)
                                    */
                                }
                                <form className="form" onSubmit={this.fetchDetails}>
                                    <div className="form-group">
                                        <label>Patent ID</label>
                                        <input type="text" name="patientID" required
                                        className="form-control" onChange={this.change}/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn bt-primary"
                                        style={{backgroundColor: 'rgba(0,33,65)'}}>Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <br/>
                        <p className="message text-danger" id="errMSh">{/*Display error message*/ }
                        {this.state.errorMessage}</p>

                        {/* If data is available display in tabulat formate */}
                        <table className="table" style={{width:"60%"}}>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Phone No.</th>
                                    <th>Location</th>
                                    <th>Department</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* render the appointment details using tr and td tags and cancel button*/}
                                <tr>
                                    <td>{this.state.email}</td>
                                    <td>{this.state.phone}</td>
                                    <td>{this.state.location}</td>
                                    <td>{this.state.department}</td>
                                    <td>{this.state.date}</td>
                                    <td>
                                        <button onClick={this.cancel}> Cancel</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                        <p className="message text-success" id="deleteSuccessMsg">{/*Display validation */}
                        {this.state.deleteSuccess}</p>
                        <p className="message text-danger" id="deleteFailMsg">
                            {this.state.deleteFail}
                        </p>
                    </div>
                </div>
            </div>
            </React.Fragment>
    }
}