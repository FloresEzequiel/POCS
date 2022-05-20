import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link, HashRouter,} from 'react-router-dom';
const url = "http://localhost:4000/appointment";

export default class Appointment extends React.Component{
    constructor (){
        super();
        this.state = {details :{
            emailId: '', phone: '', location: '', department: '', date: ''},
            successMessage : "",
            errorMessage : ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        
}
        submit=(e) =>{
            //Axios call will be made here 
            //set the appropiate message "Appointment details will be sent to the phone number"

            if(this.validate()){//axios called is here 
                console.log("workds")
                //console.log(this.state.details)
                //let chain = this.state.details;
                axios.post(url,this.state.details).then(result=>{
                   // console.log(result)
                   // console.log(result.data.id)
                    this.setState({
                        successMessage: "Appointment details will be sent to the phone number. Appointment id is:"+result.data.id
                    })
                    }).catch(error=>
                    
                    this.setState({
                        errorMessage:"Something went wrong"
                    }));
                   // this.setState({...details,result.details});
                  // e.preventDefault();

                  //  this.setState({
               //        successMessageCall: `all good id is: ${result.details.patientid} `});
                //});
                
                e.preventDefault();//stops form from submiting
            }

            e.preventDefault();//stops form from submiting


        }

        handleChange = (event) =>{
            //set the details state
            const name = event.target.name;
            const value = event.target.value;
                    const{details}=this.state;
                    this.setState(()=>{
                        details[name] = value
                        return {details}
                    })
            
            
           // console.log(this.state.details.emailId)
            //console.log(this.state.details.phone)
        }

        validate = (e) =>{
            //on submit of form validate the fields using this method
            //use test method to validate the regex and return boolean value from the below methods
            const validateEmail = (emailId) =>{
                let regex = /^([\w]+)@([\w]+)+\.([\w]+)$/i;
                //let x =this.state.details.emailId;
                //x

                if(regex.test(emailId)){
                   // console.log(x)
                return true;
                }else{
                    return false;
                }
                
            }

            const validatePhone = (phone) =>{
                let regex = new RegExp("\\d{10}");
               // let y = this.state.details.phone;

                if(regex.test(phone)){
                    return true;
                }else{
                    return false;
                }
                

            }

            const validateDate = (date)=>{
                //let z = this.state.details.date;
                let formDate = new Date(date);
               // console.log(formDate)
                let todayDate = new Date();
                //console.log(todayDate)
                //console.log(formDate.getFullYear())
                if(formDate.getFullYear()>=todayDate.getFullYear()){
                    //console.log("a")
                    if(formDate.getMonth()>=todayDate.getMonth()){
                       // console.log('b')
                       // console.log(formDate)
                        
                        //console.log(todayDate)
                        
                        if(formDate.getDate()+1>todayDate.getDate()){
                            console.log(todayDate.getDate());
                            console.log(formDate.getDate()+1);
                            //console.log("c")
                            return true;
                        }
                        else{return false;}
                    }
                    else{return false;}
                }
                else{return false;}
                
            }
            //use the above methods for validating inputs values and if all fields are valid make the post
            //Use the above methods to set the validation messages
            //set the below validation messages
            //All fields are required!, Not a valid Email, Please check phone number, Date should be

           // if(this.validateEmail ()&& this.validateDate() && this.validateDate()){}
           
           if(this.state.details.emailId=="" || this.state.details.phone==""||this.state.details.location==""
           ||this.state.details.department==""||this.state.details.date==""){
               this.setState({
                   errorMessage: "All fields are required!"
               });
               return false;
           }else{
               this.setState({
                   errorMessage: ""
               })
                if(validateEmail(this.state.details.emailId)){
                    this.setState({
                        errorMessage: ""
                    })
                    if(validatePhone(this.state.details.phone)){
                        this.setState({
                            errorMessage: ""
                        })
                        if(validateDate(this.state.details.date)){
                            this.setState({
                                errorMessage: ""
                            })

                            return true;
                        }else{
                            //add message date not correct
                            this.setState({
                                errorMessage: "Date should be greater than today's date"
                        })
                        return false;
                        }
                        
                    }else{
                        //send message phone not correct
                        this.setState({
                                errorMessage: "Please check phone number"
                        })
                        return false;
                    }
                    
                }else{
                    //send message email not correct
                    this.setState({
                        errorMessage: "Not a valid Email!"
                    })
                    return false;
                }
            }
            
        }
    
        render(){
            return <React.Fragment>
                <div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <br/>
                            <div className="card">
                                <div className="card-header" style={{backgroundColor: 'rgba(0,33,65,0.651)'}}>
                                    <h6>Book an Appointment</h6>
                                </div>
                                <div className="card-body">
                                    {/*
                                    1.-Write code to render form as per screenshot (use html form)
                                    2.-Display successMessage or errorMessage after submission of form
                                    3.-use simple styling
                                    4.-should be controlled form
                                    5.-Event handling methods should be binded appropriately
                                    6.-Invoke the appropriate method on form submission (handle the event on form) 
                                    */}
                                    <form className="form" onSubmit={this.submit}>
                                        <div className="form-group">
                                            <label>Email Id</label>
                                            <input type="text" name="emailId"className="form-control" 
                                            value={this.state.emailId} onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone number</label>
                                            <input type="text" name="phone" className="form-control"
                                            value={this.state.phone} onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Location</label>
                                            <select autoFocus name="location" className="form-control"
                                            value={this.state.location} onChange={this.handleChange}>
                                                <option value="">---Select---</option>
                                                <option value="Bangalore">Bangalore</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="hyderabad">Hyderabad</option>
                                                <option value="Jaipur">Jaipur</option>
                                                <option value="Mangalore">Mangalore</option>
                                                <option value="Mysore">Mysore</option>
                                                <option value="Trivandrum">Trivandrum</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Department</label>
                                            <select autoFocus name="department" className="for-control"
                                            value={this.state.department} onChange={this.handleChange}>
                                                <option value="">---Select---</option>
                                                <option value="Dental">Dental</option>
                                                <option value="ENT">ENT</option>
                                                <option value="Physician">Physocoan</option>
                                                <option value="Opthalmology">Opthalmology</option>
                                                <option value="Cardiology">Cardiology</option>
                                                <option value="Neurology">Neurology</option>
                                                <option value="Gastrointestinal">Gastrointestinal</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input type="date" name="date" className="form-control"
                                            value={this.state.date} onChange={this.handleChange}/>
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary"
                                            style={{backgroundColor: 'rgba(0,33,65)',border: 'rgba(0,33,65)'}}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/* Display message based on the condition*/}
                                <p id="successMessage" className="text-success addMsg" >{this.state.successMessage}</p>
                                <p id="errorMessage" className="text-danger addMsg">{this.state.errorMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        }

}