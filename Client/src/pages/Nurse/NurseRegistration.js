import React,{ Component } from "react";
import { Row,Label,Col,Button,Input ,Form, FormGroup} from "reactstrap";
import http from '../../shared/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class NurseRegistration extends Component{
    constructor(props){
        super(props);
        this.state = {
            // newNurse    : false,
            email       : '',
            name       : '',
            mob       : '',
            address    : '',
            gender      : '',
            joinDate    :  ''
        }
    }
    handleSubmit(e){
        e.preventDefault()
        if(this.state.address && this.state.mob && this.state.gender && this.state.joinDate &&
            this.state.email){

                if(this.state.mob.length > 9 && this.state.mob.length <11){
        const newNurse={
        'name': this.state.name,
        'email': this.state.email,
        'mobile': this.state.mob,
        'gender': this.state.gender,
        'address': this.state.address,
        'joinDate': this.state.joinDate
        }
        http.post('nurse',{newNurse})
        .then(response=>{
            console.log(response)
            toast.success('Nurse Added Successfully.')
        })
        .catch(error=>{
            console.log(error)
        })
    }else{
        toast.error('Mobile field should contain 10 digits.')
    }
    }else{
        toast.error('Fill in the details properly.')
    }
    }
    render(){
        return(
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
                <div className="col-12 offset-1">
                    <h3>Nurse Registration</h3>
                    <hr/>
                    <div className="col-12 col-md-9">
                        <Form>
                        <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email"  id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        onChange={
                                            (e) => {
                                                this.setState({email:e.target.value});
                                            }
                                        }
                                    />
                                </Col>
                            </Row>
                            {/* <div style={this.getStyles()}> */}
                                <Row className="form-group">
                                    <Label htmlFor="fullname" md={2}>Full Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="fullname" name="fullname"
                                            placeholder="Full Name"
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
                                    <Label htmlFor="mobnum" md={2}>Mobile No.</Label>
                                    <Col md={10}>
                                        <Input type="number" id="mobnum" name="mobnum"
                                            placeholder="Mob. Number"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ mob : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="joinDate" md={2}>Join Date</Label>
                                    <Col md={10}>
                                        <Input type="date" rows="3" id="joinDate" name="joinDate"
                                            placeholder="Join Date"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ joinDate : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="location" md={2}>City</Label>
                                    <Col md={10}>
                                        <Input  id="location" name="location"
                                            placeholder="Enter City"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ address : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="genderSelect" md={2}>Gender</Label>
                                    <Col md={10}>
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
                                </Col>
                            </Row>
                            {/* </div> */}
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="primary" onClick={(values) => this.handleSubmit(values)}>
                                        Add Nurse
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NurseRegistration;