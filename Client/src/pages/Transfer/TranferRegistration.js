import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../common";
import { Button, Col, FormGroup, Input, Label, Row, Form } from 'reactstrap';
import Select from 'react-select';

class TransferRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hid: '',
            reqDate: '',
            qty: '',
            component: '',
            blood: '',
            status: '',
            hospitals:[]
        }
    }
    async componentDidMount(){
        await http.get('transfer/hospital')
        .then((Response)=>{
            if(Response.status===200){
                this.setState({hospitals:Response.data})
            }
            else    
                toast.error('Fetching failed.')
        })
    }
    handleSubmit(e){
        e.preventDefault()
        http.post('transfer',{
            'hospitalId': this.state.h_id,
            'requestDate':this.state.reqDate,
            'quantity':this.state.qty,
            'component':this.state.component,
            'bloodGroup':this.state.blood,
            'status':this.state.status
        })
        .then(response => {
            if(response.status===200){
                toast.success('Transfer Registration Successfull')
                this.props.closeCallBack();
            }else{
                toast.error('Registration Failed')
            }  
        })
        .catch(error => {
            console.log(error)
            toast.error('Transfer registraton failed.')
        }) 
    }
    render() {
        let options = this.state.hospitals.map(function (city) {
            return { value: city.h_id, label: city.name };
          })
        return (
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
                    <h3>Recording Tranfer</h3>
                    <hr />
                    <div className="col-12 col-md-9">
                        <Form>
                            <Row className="form-group">
                                <Label htmlFor="hospital" md={2}>Hospitals</Label>
                                <Col md={10}> 
                                    <Select options={options}
                                    onChange={
                                        (e) => {
                                            this.setState({ h_id: e.value })
                                        }
                                    }/>    
                                </Col>                              
                            </Row>
                            {/* <div style={this.getStyles()}> */}
                            <Row className="form-group">
                                <Label htmlFor="joinDate" md={2}>Request Date</Label>
                                <Col md={10}>
                                    <Input type="date" rows="3" id="reqDate" name="reqDate"
                                        placeholder="Request Date"
                                        className="form-control"
                                        onChange={
                                            (e) => {
                                                this.setState({ reqDate: e.target.value })
                                            }
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="qty" md={2}>Quantity</Label>
                                <Col md={10}>
                                    <Input type="number" id="qty" name="qty"
                                        placeholder="Quantity in MiliLiters(ml)"
                                        className="form-control"
                                        onChange={
                                            (e) => {
                                                this.setState({ qty: e.target.value })
                                            }
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="component" md={2}>Component</Label>
                                <Col md={10}>
                                <Input type="select" name="component" id="component" onChange={
                                    (event) => {
                                        this.setState({ component: event.target.value });
                                    }
                                    }>
                                    <option value="Select">Choose Component Type</option>
                                    <option value="Fresh Frozen Plasma">Fresh Frozen Plasma</option>
                                    <option value="Packed Red Blood Cells">Packed Red Blood Cells</option>
                                    <option value="Plasma">Plasma</option>
                                    <option value="Platelet Concentrate">Platelet Concentrate</option>
                                    <option value="Whole Blood">Whole Blood</option>
                                </Input>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="bloodType" md={2}>Blood Type</Label>
                                <Col md={10}>
                                <Input type="select" name="bloodtype" id="bloodtype" onChange={
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
                                </Col>
                            </Row>
                            <Row className="form-group">
                                    <Label htmlFor="statusSelect" md={2}>Status</Label>
                                    <Col md={10}>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="statusSelect" value="PASS" onChange={
                                    (event) => {
                                        this.setState({ status: event.target.value });
                                    }
                                    } />{' '}

                                PASS
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="statusSelect" value="PENDING" onChange={
                                    (event) => {
                                        this.setState({ status: event.target.value });
                                    }
                                    } />{' '}
                                    PENDING                </Label>
                                </FormGroup>
                                <FormGroup check >
                                <Label check>
                                    <Input type="radio" name="statusSelect" value="FAILED" onChange={
                                    (event) => {
                                        this.setState({ status: event.target.value });
                                    }
                                    } />{' '}
                                FAILED                </Label>
                                </FormGroup>
                                </Col>
                            </Row>
                            {/* </div> */}
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="primary" onClick={(values) => this.handleSubmit(values)}>
                                        Add Transfer Record
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
export default TransferRegistration;