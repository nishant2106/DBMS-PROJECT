import React, { Component } from "react";
import { Row, Label, Col, Button, Input, Form } from "reactstrap";
import http from '../../shared/common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class DonorEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            donor: {},
            aadhar: this.props.nid,
            name: '',
            email: '',
            mobile: '',
            address: '',
            district: '',
            pincode: ''

        }
    }
    loadData() {
        if (!this.isLoaded) {
            http.get('donors/' + this.state.aadhar, {}).then((response) => {
                let donor = response.data;
                this.setState({
                    isLoaded: true,
                    donor: donor[0],
                    name: donor[0].name,
                    email: donor[0].email,
                    mobile: donor[0].mob_no,
                    address: donor[0].address,
                    district: donor[0].district,
                    pincode: donor[0].pinCode

                });
                console.log(response.data);
            }).catch((error) => {
                if (error)
                    toast.error('Can not fetched the data');
            });
        }
    }
    handleDelete() {
        if (this.props.nid) {
            http.delete('donors/' + this.state.aadhar, {})
                .then((response) => {
                    if (response.status === 200) {
                        toast.info('removed from register');
                        this.props.closeCallBack();
                    } else {
                        toast.error('unable to delete record');
                        this.props.closeCallBack();
                    }

                }).catch((error) => {
                    console.log(error);
                });
        }
    }
    handleUpdate() {
        if (this.props.nid) {
            http.post('donors/'+this.state.aadhar, {
                'name': this.state.name,
                'email': this.state.email,
                'mobile': this.state.mobile,
                'address': this.state.address,
                'district': this.state.district,
                'pincode': this.state.pincode
            }).then((response) => {
                if (response.status === 200) {
                    toast.success('updated details');
                    this.props.closeCallBack();
                } else {
                    toast.error('unable to update record');
                    this.props.closeCallBack();
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    getForm() {
        return (
            <div className="col-md-6">
                <hr />
                <Form>
                    <Row className="form-group">
                        <Label htmlFor="name" md={2}>Name</Label>
                        <Col md={10}>
                            <Input type="text" id="name" name="name"
                                placeholder="Name"
                                defaultValue={this.state.donor.name}
                                className="form-control"
                                onChange={
                                    (event) => {
                                        this.setState({ name: event.target.value })
                                    }
                                }
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input type="email" id="email" name="email"
                                label="Email Address"
                                placeholder="Email"
                                className="form-control"
                                defaultValue={this.state.donor.email}
                                onChange={
                                    (event) => {
                                        this.setState({ email: event.target.value });
                                    }
                                }
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="examplePassword" md={2}>Mobile Number</Label>
                        <Col md={10}>
                            <Input type="tel" name="mobile" id="exampleMobile"
                                defaultValue={this.state.donor.mob_no}
                                onChange={
                                    (event) => {
                                        this.setState({ mobile: event.target.value });
                                    }
                                } placeholder="123456789" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label for="exampleText" md={2}>Address</Label>
                        <Col md={10}>
                            <Input type="textarea" name="text" id="exampleText"
                                defaultValue={this.state.donor.address}
                                onChange={
                                    (event) => {
                                        this.setState({ address: event.target.value });
                                    }
                                } />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label for="exampleDistrict" md={2}>District</Label>
                        <Col md={10}>
                            <Input type="select" name="select" id="exampleDistrict"
                                defaultValue={this.state.donor.district}
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
                        <Label for="exampleZip" md={2}>Pincode</Label>
                        <Col md={10}>
                            <Input type="postal" name="zip" id="exampleZip"
                                defaultValue={this.state.donor.pinCode}
                                onChange={
                                    (event) => {
                                        this.setState({ pincode: event.target.value });
                                    }
                                } />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="form-group">
                        <Col md={{ size: 3, offset: 2 }}>
                            <Button className="btn btn-lg" color="danger" onClick={() => this.handleDelete()}>
                                Delete
                            </Button>
                        </Col>
                        <Col md={{ size: 5, offset: 0 }}>
                            <Button className="btn btn-lg" color="info" onClick={() => this.handleUpdate()}>
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
                    <h3>Donor Edit</h3>      
                    { this.state.isLoaded ? this.getForm() : this.loadData() }
                </div>
                </div>
            </div>
        )
    }
}
export default DonorEdit;