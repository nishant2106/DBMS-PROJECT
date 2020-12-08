import React,{ Component } from "react";
import { Row,Label,Col,Button,Input ,Form} from "reactstrap";
import http from '../common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HospitalRegistration extends Component{
    constructor(props){
        super(props);
        this.state = {
            // newNurse    : false,
            h_id  : '',
            name       : '',
            mob_no_       : '',
            address    : '',
            district    :  '',
            pincode      :  ''
        }
    }
    handleSubmit(e){
        e.preventDefault()
        if(this.state.name && this.state.mob_no_ && this.state.district && this.state.city
            && this.state.pincode){
            if(this.state.mob_no_.length > 9 && this.state.mob_no_.length <11){
                if(this.state.pincode.length > 5 && this.state.pincode.length < 7){
                    const newHospital={
                        'name': this.state.name,
                        'mob_no_': this.state.mob_no_,
                        'city': this.state.city,
                        'pincode': this.state.pincode,
                        'district': this.state.district
                    }
                    http.post('Hospital',{newHospital})
                    .then(response=>{
                        if(response.status===200){
                        toast.success('Registration Successfull')
                        this.props.closeCallBack();
                        }else{
                            toast.error('Operation Unsuccessful')
                        }
                    })
                    .catch(error=>{
                        toast.error('Registration Unsuccessful.')
                    })
                }else{
                    toast.error('Pincode field should contain 6 digits.')
                }
            }else{
                toast.error('Mobile field should contain 10 digits.')
            } 
        }else{
            toast.error('Fill in the details properly.')
        }
    }
    render(){
        return(
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
                    <h3>Hospital Registration</h3>
                    <hr/>
                    <div className="col-12 col-md-9">
                        <Form>

                       
                            {/* <div style={this.getStyles()}> */}
                                <Row className="form-group">
                                    <Label htmlFor="name" md={2}>Hospital_Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="name" name="name"
                                            placeholder="Name of Hospital"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ name : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="mob_no_" md={2}>Contact_Number</Label>
                                    <Col md={10}>
                                    <Input type="text" name="mob_no_" id="mob_no_" placeholder="Enter Contact Number"
                                    onChange={
                                    (e) => {
                                          this.setState({ mob_no_: e.target.value });
                    }
                                        } />
                                     </Col>
                                </Row>
                                <Row className="form-group">                                
                                <Label htmlFor="exampleDistrict" md={2}>District</Label>
                                <Col md={10}>
                                <Input type="select" name="exampleDistrict" id="exampleDistrict" onChange={
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
                            </Col>
                            </Row>
                                
                                <Row className="form-group">
                                    <Label htmlFor="city" md={2}>city</Label>
                                    <Col md={10}>
                                        <Input  id="city" name="city"
                                            placeholder="Enter City"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ city : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="pincode" md={2}>Pincode</Label>
                                    <Col md={10}>
                                        <Input type="number" id="pincode" name="pincode"
                                            placeholder="Enter Pin Code"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ pincode : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>

                              

                            
                            
                            {/* </div> */}
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="primary" onClick={(values) => this.handleSubmit(values)}>
                                        Add Hospital
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default HospitalRegistration;