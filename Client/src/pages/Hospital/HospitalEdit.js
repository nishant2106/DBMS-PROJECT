import React,{ Component } from "react";
import { Button, Col, Form,Input, Label, Row } from "reactstrap";
import http from '../../shared/common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class HospitalEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded    : false,
            hospital       : {},
            h_id         : this.props.h_id,
            mob_no      : '',
            district    :  '',
            city: '',
            picode      :  ''
        }
    }
    loadData(){
        if(!this.isLoaded){
            http.get('Hospital/'+this.state.h_id, {}).then((response) =>{
                let hospital = response.data;
                this.setState({ isLoaded : true, 
                    hospital : hospital[0],
                    mob_no   : hospital[0].mob_no,
                    district: hospital[0].district,
                    pincode : hospital[0].pincode,
                    city:hospital[0].city
                });
                console.log(response.data);
               
            }).catch((error)=>{
                if(error)
                    toast.error('aint got any');
            });
        }
    }
    handleDelete(){
        if(this.props.h_id){
            http.delete('hospital/'+this.state.h_id, {}).then((response) => {
                if(response.status === 200){
                    toast.info('removed from register');
                    this.props.closeCallBack();
                }else{
                    toast.error('unable to delete record');
                    this.props.closeCallBack();
                }
                
            }).catch((error) => {
                console.log('error');
            });
        }
    }
    handleUpdate(){
        if(this.props.h_id){
            http.post('hospital/'+this.state.h_id, {
                'mob_no':this.state.mob_no,
                'address':this.state.city,
                'district':this.state.district,
                'pincode' :this.state.pincode
            }).then((response) => {
                if(response.status === 200){
                    toast.info('Updated register');
                    this.props.closeCallBack();
                }else{
                    toast.error('unable to Update record');
                    this.props.closeCallBack();
                }
                
            }).catch((error) => {
                console.log('error');
            });
        }
    }
    getForm(){
        return(
            <div className="col-md-6">
                <hr/>
                <Form>
                    {/* <div style={this.getStyles()}> */}
                    <Row className="form-group">
                        <Label for="exampleDistrict" md={2}>District</Label>
                        <Col md={10}>
                            <Input type="select" name="select" id="exampleDistrict"
                                defaultValue={this.state.hospital.district}
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
                        </Col>
                    </Row>
                        <Row className="form-group">
                            <Label htmlFor="mobnum" md={2}>Mobile No.</Label>
                            <Col md={10}>
                                <Input type="number" id="mobnum" name="mobnum"
                                    placeholder="Mob. Number"
                                    className="form-control"
                                    defaultValue={ this.state.hospital.mob_no }
                                    onChange={
                                        (e) => {
                                            this.setState({ mob_no : e.target.value })
                                        }
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="location" md={2}>City</Label>
                            <Col md={10}>
                                <Input  id="location" name="location"
                                    placeholder="Enter district"
                                    className="form-control"
                                    defaultValue={ this.state.hospital.city }
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
                                <Input  id="Pincode" name="pincode"
                                    placeholder="Enter district"
                                    className="form-control"
                                    defaultValue={ this.state.hospital.pincode }
                                    onChange={
                                        (e) => {
                                            this.setState({ pincode : e.target.value })
                                        }
                                    }
                                />
                            </Col>
                        </Row>
                    {/* </div> */}
                    <hr/>
                    <Row className="form-group">
                        <Col md={{ size: 3, offset: 2 }}>
                            <Button className="btn btn-lg" color="danger" onClick={()=>this.handleDelete()}>
                                Delete
                            </Button>
                        </Col>
                        <Col md={{ size: 5, offset: 0 }}>
                            <Button className="btn btn-lg" color="info" onClick={()=>this.handleUpdate()}>
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
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
                    pauseOnHover/>
                    <div className="col-10 offset-2">
                    <h3>hospital Edit</h3>
                    
                    { this.state.isLoaded ? this.getForm() : this.loadData() }
                </div>
                </div>
            </div>
        )
    }
}

export default HospitalEdit;