import React,{ Component } from "react";
import { Button, Col, Form,Input, Label, Row } from "reactstrap";
import http from '../../shared/common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class NurseEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded    : false,
            nurse       : {},
            nid         : this.props.nid,
            name       : '',
            email       : '',
            phone       : '',
            location    : ''
        }
    }
    loadData(){
        if(!this.isLoaded){
            http.get('Nurse/'+this.state.nid, {}).then((response) =>{
                let nurse = response.data;
                this.setState({ isLoaded : true, 
                    nurse : nurse[0],
                    name   : nurse[0].name,
                    email   : nurse[0].email,
                    phone   : nurse[0].mob_no,
                    location: nurse[0].city
                });
                console.log(response.data);
               
            }).catch((error)=>{
                if(error)
                    toast.error('aint got any');
            });
        }
    }
    handleDelete(){
        if(this.props.nid){
            http.delete('nurse/'+this.state.nid, {}).then((response) => {
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
        if(this.props.nid){
            http.post('nurse/'+this.state.nid, {
                'name':this.state.name,
                'email':this.state.email,
                'address':this.state.location,
                'mob':this.state.phone
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
                <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input type="email"  id="email" name="email"
                                label="Email Address"
                                placeholder="Email"
                                className="form-control"
                                defaultValue={ this.state.nurse.email }
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
                                    defaultValue={ this.state.nurse.name }
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
                                    defaultValue={ this.state.nurse.mob_no }
                                    onChange={
                                        (e) => {
                                            this.setState({ phone : e.target.value })
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
                                    defaultValue={ this.state.nurse.city }
                                    onChange={
                                        (e) => {
                                            this.setState({ location : e.target.value })
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
                    <h3>Nurse Edit</h3>
                    
                    { this.state.isLoaded ? this.getForm() : this.loadData() }
                </div>
                </div>
            </div>
        )
    }
}

export default NurseEdit;