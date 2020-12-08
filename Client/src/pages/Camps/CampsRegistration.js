import React,{ Component } from "react";
import { Row,Label,Col,Button,Input ,Form} from "reactstrap";
import http from '../common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class CampsRegistration extends Component{
    constructor(props){
        super(props);
        this.state = {
            name       : '',
            mob       : '',
            address   : '',
            cdate    :  '',
            donationamt : ''
        }
    }

    handleSubmit(e){
        e.preventDefault()
        if(this.state.name && this.state.mob && this.state.address && this.state.cdate
            && this.state.donationamt){
            if(this.state.mob.length > 9 && this.state.mob.length <11){
                const newCamp={
                    'name': this.state.name,
                    'mobile': this.state.mob,
                    'address': this.state.address,
                    'cdate': this.state.cdate,
                    'donationamt':this.state.donationamt
                }
                http.post('camps',{newCamp})
                .then(response => {
                    if(response.status===200){
                        toast.success('Donor Registration Successfull')
                        this.props.closeCallBack();
                    }else{
                        toast.error('Registration Failed')
                    }  
                })
                .catch(error => {
                    console.log(error)
                    toast.error('Donor registraton failed.')
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
                    <h3>Add a Campaign</h3>
                    <hr/>
                    <div className="col-12 col-md-9">
                    <Form>
                       <Row className="form-group">
                                    <Label htmlFor="fullname" md={2}>Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="fullname" name="fullname"
                                            placeholder="Name of campaign"
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
                                            placeholder="Mobile Number"
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
                                    <Label htmlFor="cdate" md={2}>Campaign Date</Label>
                                    <Col md={10}>
                                        <Input type="date" rows="3" id="cdate" name="cdate"
                                            placeholder="Enter Date"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ cdate : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="location" md={2}>Location</Label>
                                    <Col md={10}>
                                        <Input  type="text" id="location" name="location"
                                            placeholder="Enter location"
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
                                    <Label htmlFor="location" md={2}>Donation Amount</Label>
                                    <Col md={10}>
                                        <Input  type="number" id="donationamt" name="donationamt"
                                            placeholder="Enter amount"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ donationamt : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="primary" onClick={(values) => this.handleSubmit(values)}>
                                        Add Camp
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

export default CampsRegistration;