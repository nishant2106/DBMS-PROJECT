import React,{ Component } from "react";
import { Button, Col, Form,Input, Label, Row } from "reactstrap";
import http from '../../shared/common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class CampsEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded    : false,
            camps      : {},
            nid         : this.props.nid,
            name       : '',
            cdate       : '',
            phone       : '',
            location    : '',
            donationamt : ''
        }
    }
    loadData(){
        if(!this.isLoaded){
            http.get('Camps/'+this.state.nid, {}).then((response) =>{
                let camps = response.data;
                this.setState({ isLoaded : true, 
                    camps : camps[0],
                    name   : camps[0].name,
                    cdate   : camps[0].c_date,
                    phone   : camps[0].mob_no,
                    location: camps[0].location,
                    donationamt: camps[0].createdon
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
            http.delete('camps/'+this.state.nid, {}).then((response) => {
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
            if(this.state.name && this.state.phone && this.state.location && this.state.cdate
                && this.state.donationamt){
                if(this.state.phone.length > 9 && this.state.phone.length < 11){
                    http.post('camps/'+this.state.nid, {
                        'name':this.state.name,
                        'cdate':this.state.cdate,
                        'address':this.state.location,
                        'mob':this.state.phone,
                        'donationamt':this.state.donationamt
                    }).then((response) => {
                        if(response.status === 200){
                            toast.info('Updated register');
                            this.props.closeCallBack();
                        }else{
                            toast.error('unable to Update record');
                            this.props.closeCallBack();
                        }
                        
                    }).catch((error) => {
                        toast.error('unable to Update record');
                    });
                }else{
                toast.error('Mobile field should contain 10 digits.')
                }
            }
            else{
                toast.error('Fill in the details properly.')
            }
        }
    }
    getForm(){
        return(
            <div className="col-md-6">
                <hr/>
                <Form>
                
                    {/* <div style={this.getStyles()}> */}
                        <Row className="form-group">
                            <Label htmlFor="fullname" md={2}>Camp Name</Label>
                            <Col md={10}>
                                <Input type="text" id="fullname" name="fullname"
                                    placeholder="camp Name"
                                    defaultValue={ this.state.camps.name }
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
                            <Label htmlFor="cdate" md={2}>Date</Label>
                            <Col md={10}>
                                <Input type="date" id="cdate" name="cdate"
                                    placeholder="camp date"
                                    defaultValue={ this.state.camps.c_date }
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
                            <Label htmlFor="mobnum" md={2}>Mobile No.</Label>
                            <Col md={10}>
                                <Input type="number" id="mobnum" name="mobnum"
                                    placeholder="Mob. Number"
                                    className="form-control"
                                    defaultValue={ this.state.camps.mob_no }
                                    onChange={
                                        (e) => {
                                            this.setState({ phone : e.target.value })
                                        }
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="location" md={2}>Location</Label>
                            <Col md={10}>
                                <Input  id="location" name="location"
                                    placeholder="Enter location"
                                    className="form-control"
                                    defaultValue={ this.state.camps.location }
                                    onChange={
                                        (e) => {
                                            this.setState({ location : e.target.value })
                                        }
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="donationamt" md={2}>Donation</Label>
                            <Col md={10}>
                                <Input type="number" id="donationamt" name="donationamt"
                                    placeholder="Enter donation amount"
                                    className="form-control"
                                    defaultValue={ this.state.camps.createdon }
                                    onChange={
                                        (e) => {
                                            this.setState({ donationamt : e.target.value })
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
                    <h3>Camp Edit</h3>
                    
                    { this.state.isLoaded ? this.getForm() : this.loadData() }
                </div>
                </div>
            </div>
        )
    }
}

export default CampsEdit;