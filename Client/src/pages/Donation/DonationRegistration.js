import React,{ Component } from "react";
import { Row,Label,Col,Button,Input ,Form} from "reactstrap";
import http from '../common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import ReactFormInputValidation from "react-form-input-validation";

class DonationRegistration extends Component{
    constructor(props){
        super(props);
        this.state = {
            adhar_no       : '',
            component_name  : '',
            quantity    : '',
            nurseid      : '',
            d_date    :  '',
            donors : [],
            nurses : []
        }
    }
    async componentDidMount(){
        await http.get('donation/donor')
        .then((Response)=>{
            if(Response.status===200){
                this.setState({donors:Response.data})
            }
            else    
                toast.error('Fetching failed.')
        })
        await http.get('donation/nurse')
        .then((Response)=>{
            if(Response.status===200){
                this.setState({nurses:Response.data})
            }
            else    
                toast.error('Fetching failed.')
        })
    }
    handleSubmit(e){
        if(this.state.d_date && this.state.nurseid && this.state.quantity && this.state.component_name 
            && this.state.adhar_no){ 
            if(this.state.quantity < 201 && this.state.quantity > 149){    
                e.preventDefault()
                console.log(this.state)
                const newDonation={
                'adhar_no': this.state.adhar_no,
                'component_name': this.state.component_name,
                'quantity': this.state.quantity,
                'nurseid': this.state.nurseid,
                'd_date': this.state.d_date
                }
                http.post('donation',{newDonation})
                .then(response=>{
                    if(response.status===200){
                    console.log(response)
                    toast.info('Donation Added.')
                    this.props.closeCallBack();
                    }else{
              toast.error('Registration Unsuccessful.')
                    }
                })
                .catch(error=>{
                    toast.error('Operation Failed.')
                    console.log(error)
                })
            }else{
                toast.error('Quantity should be between 150 to 200.')
            }
        }else{
            toast.error('Fill all the deatils Properly')
          }
    }
    render(){
        let options = this.state.donors.map(function (city) {
            return { value: city.aadhar_no, label: city.name };
          })
        let optionss = this.state.nurses.map(function (city) {
            return { value: city.nurse_id, label: city.name };
          })
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
                    <h3>Donation Registration</h3>
                    <hr/>
                    <div className="col-12 col-md-9">
                        <Form>
                            {/* <div style={this.getStyles()}> */}
                                <Row className="form-group">
                                    <Label htmlFor="Adhar_no" md={2}>Aadhar no</Label>
                                    <Col md={10}> 
                                    <Select options={options}
                                    onChange={
                                        (e) => {
                                            this.setState({ adhar_no: e.value })
                                        }
                                    }/>    
                                </Col> 
                                </Row>
                                <Row className="form-group">
                            <Label htmlFor="component" md={2}>Component</Label>
                                <Col md={10}>
                                <Input type="select" name="component" id="component" onChange={
                                    (event) => {
                                        this.setState({ component_name: event.target.value });
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
                                    <Label htmlFor="d_date" md={2}>Donation Date</Label>
                                    <Col md={10}>
                                        <Input type="date" rows="3" id="d_date" name="d_date"
                                            placeholder="Donation Date"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ d_date : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="quantity" md={2}>Quantity</Label>
                                    <Col md={10}>
                                        <Input type="number" id="quantity" name="quantity"
                                            placeholder="Enter units"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ quantity : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="nurseid" md={2}>nurseid</Label>
                                    <Col md={10}> 
                                    <Select options={optionss}
                                    onChange={
                                        (e) => {
                                            this.setState({ nurseid: e.value })
                                        }
                                    }/>    
                                </Col> 
                                </Row>
                               
                            {/* </div> */}
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="primary" onClick={(values) => this.handleSubmit(values)}>
                                        Add Donation
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

export default DonationRegistration;