import React, { Component } from "react";
import {  Label,  Button, Input, Form, FormGroup } from "reactstrap";
import http from '../common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactFormInputValidation from "react-form-input-validation";

class DonorRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          gender: '',
          district: '',
          blood: '',
          plasma: '',
          fields: {
            aadhar: '',
            name: '',
            email: '',
            mobile: '',
            address: '',
            pincode: ''
          },
          errors: {}
        }
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            mobile: "required|numeric|digits_between:10,12",
            aadhar: "required|numeric|digits_between:12,12",
            address: 'required',
            pincode: "required|numeric|digits_between:6,6"
        });
      }
      createDonor(e) {
        if(this.state.fields.aadhar && this.state.fields.name && this.state.fields.email && 
          this.state.fields.mobile && this.state.gender && this.state.blood && 
          this.state.plasma && this.state.fields.address && this.state.district && 
          this.state.fields.pincode){
          e.preventDefault()
          const newDon={
          'aadhar': this.state.fields.aadhar,
          'name': this.state.fields.name,
          'email': this.state.fields.email,
          'mobile': this.state.fields.mobile,
          'gender': this.state.gender,
          'blood': this.state.blood,
          'plasma': this.state.plasma,
          'address': this.state.fields.address,
          'district': this.state.district,
          'pincode': this.state.fields.pincode
          }
          http.post('donors',{newDon})
          .then(response=>{
            if(response.status===200){
              toast.success('Registration Successfull')
              this.props.closeCallBack();
            }else{
              toast.error('Registration Unsuccessful.')
            }
          })
          .catch(error=>{
            console.log(error)
          })
        }else{
          toast.error('Fill all the deatils Properly')
        }
      };
    render() {
        return (
            <div className="container">
            <div className="row row-content">
            <ToastContainer position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                    <div className="col-12 offset-1">
                        <h3>Donor Registration</h3>
                        <hr />
                    <div className="col-12 col-md-9">
                    <Form className="form" >
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input type="text" name="name" id="name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                  placeholder="First Name + Last Name" />
                <Label className="error">
                  {this.state.errors.name ? this.state.errors.name : ""}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="aadhar">Aadhar Number</Label>
                <Input type="text" name="aadhar" id="aadhar"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.aadhar}
                  placeholder="Enter Aadhar Number" />
                <Label className="error">
                  {this.state.errors.aadhar ? this.state.errors.aadhar : ""}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                  placeholder="Enter Email Id" />
                <Label className="error">
                  {this.state.errors.email ? this.state.errors.email : ""}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="mobile">Mobile Number</Label>
                <Input type="tel" name="mobile" id="mobile"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.mobile}
                  placeholder="Enter Mobile No" />
                <Label className="error">
                  {this.state.errors.mobile ? this.state.errors.mobile : ""}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Blood group</Label>
                <Input type="select" name="select" id="exampleSelect" 
                  onChange={
                    (event) => {
                      this.setState({ blood: event.target.value });
                    }
                  }>
                  <option value="Select">-----Select-----</option>
                  <option value="A_pos">A+</option>
                  <option value="A_neg">A-</option>
                  <option value="B_pos">B+</option>
                  <option value="B_neg">B-</option>
                  <option value="AB_pos">AB+</option>
                  <option value="AB_neg">AB-</option>
                  <option value="O_pos">O+</option>
                  <option value="O_neg">O-</option>

                </Input>
              </FormGroup>
              <FormGroup tag="fieldset">
                <label>Plasma donor</label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="plasmaDonor" value="Yes" onChange={
                      (event) => {
                        this.setState({ plasma: event.target.value });
                      }
                    } />{' '}
                    YES                </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="plasmaDonor" value="No" onChange={
                      (event) => {
                        this.setState({ plasma: event.target.value });
                      }
                    } />{' '}
                    NO                </Label>
                </FormGroup>

              </FormGroup>

              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="textarea" name="address" id="address" 
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.address} />
                <Label className="error">
                  {this.state.errors.address ? this.state.errors.address : ""}
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for="exampleDistrict">District</Label>
                <Input type="select" name="select" id="exampleDistrict" 
                  onChange={
                    (event) => {
                      this.setState({ district: event.target.value });
                    }
                  }>
                  <option value="Select">-----Select-----</option>
                  <option value="Ahmednagar">    Ahmednagar </option>
                  <option value="Akola">Akola</option>
                  <option value="Amravati">Amravati</option>
                  <option value=" Aurangabad"> Aurangabad</option>
                  <option value=" Beed"> Beed</option>
                  <option value="  Bhandara">  Bhandara</option>
                  <option value="Buldhana">Buldhana</option>
                  <option value="Chandrapur">Chandrapur</option>
                  <option value="Dhule">Dhule</option>
                  <option value="Gadchiroli">Gadchiroli</option>
                  <option value="Gondia">Gondia</option>
                  <option value="Hingoli">Hingoli</option>

                  <option value="Jalgaon">Jalgaon</option>
                  <option value="Jalna">Jalna</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Latur">Latur</option>
                  <option value="Mumbai City">Mumbai City</option>
                  <option value=" Mumbai Suburban"> Mumbai Suburban</option>
                  <option value=" Nagpur"> Nagpur</option>
                  <option value="Nanded">Nanded</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Nandurbar">Nandurbar</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Palghar">Palghar</option>
                  <option value="Parbhani">Parbhani</option>
                  <option value="Pune">Pune</option>
                  <option value="Raigad">Raigad</option>
                  <option value="Jalna">Jalna</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                  <option value="Sangli">Sangli</option>
                  <option value=" Satara"> Satara</option>
                  <option value="Sindhudurg">Sindhudurg</option>
                  <option value="Solapur">Solapur</option>
                  <option value="Thane">Thane</option>
                  <option value="Wardha">Wardha</option>
                  <option value="Washim">Washim</option>
                  <option value="Yavatmal"> Yavatmal</option>

                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="pincode">Pincode</Label>
                <Input type="number" name="pincode" id="pincode" 
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.pincode} />
                <Label className="error">
                  {this.state.errors.pincode ? this.state.errors.pincode : ""}
                </Label>
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend>Gender</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="genderSelect" value="Female" onChange={
                      (event) => {
                        this.setState({ gender: event.target.value });
                      }
                    } />{' '}

                  Female
                </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="genderSelect" value="Male" onChange={
                      (event) => {
                        this.setState({ gender: event.target.value });
                      }
                    } />{' '}
                    Male                </Label>
                </FormGroup>
                <FormGroup check >
                  <Label check>
                    <Input type="radio" name="genderSelect" value="Other" onChange={
                      (event) => {
                        this.setState({ gender: event.target.value });
                      }
                    } />{' '}
                other                </Label>
                </FormGroup>
              </FormGroup>

              <br></br>
              <Button onClick={(event) => { this.createDonor(event) }}>Submit</Button>
            </Form>

                    </div>

                </div>
                </div>
                </div>
        )
    }
}
export default DonorRegistration;