import React,{Component} from 'react';
import { Button, Table,Row,Label,Input,Form,Col } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from '../../shared/common'
class RequestUserList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            request: [],
            isLoaded: false,
            district :'',
            blood :''
        }
    }
    HandleSearch(){
        
            if(!this.isLoaded){
                http.get('request/'+this.state.district + '/'+this.state.blood, {}).then((response) =>{
                    let Donor = response.data;
                    this.setState({ isLoaded : true, 
                        Donor : Donor[0],
                        request:response.data
                    });
                    console.log(response.data);
                   
                }).catch((error)=>{
                    if(error)
                        toast.error('aint got any');
                });
          
            }
    }
   
    
    showList() {
        let data = this.state.request
        let rows = []
        console.log(data)
        if (this.state.isLoaded) {
            for (let index = 0; index < data.length; index++) {
                let mail='mailto:'+data[index].email
                let mob="tel:"+data[index].mob_no
                rows.push(
                    <tr key={data[index].aadhar_no}>
                        <td>{data[index].aadhar_no}</td>
                        <td>{data[index].name}</td>
                        <td><a href={mail}>{data[index].email}</a></td>
                        <td>{data[index].district}</td>
                        <td>{data[index].blood_grp}</td>
                        <td><a href={mob}>{data[index].mob_no}</a></td>
                        <td>{data[index].gender}</td>
                        <td>{data[index].address}</td>
                        <td>{data[index].pinCode}</td>
                        <td>{data[index].isPlasmaDonor}</td>
                    </tr>
                )
            }
            return rows
        }
    }
    render(){
        return(

            <div>
                &nbsp;
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />

            <Row className="form-group">
                <Col xs={4}md={4}>
            
                <Input type="select" name="select" id="exampleSelect" onChange={
                (event) => {
                    this.setState({ blood: event.target.value });
                }
            }>
                <option value="Select">Blood Group</option>
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
        {/* </Row> */}
        {/* <Row className="form-group">                                 */}
        <Col xs={4} md={4}>
                                
                                <Input  type="select" name="exampleDistrict" id="exampleDistrict" onChange={
                                    (event) => {
                                        this.setState({ district: event.target.value });
                                    }
                                }>
                                    <option value="Select">District</option>
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
                            {/* </Row> */}

                            {/* <Row className="form-group"> */}
                            <Col xs={5} md={2}>
                            <Button className="btn btn-lg" color="danger" onClick={()=>this.HandleSearch()}>
                                Search
                            </Button>
                        </Col>
                        </Row>


            <Table className="highlight">



                <thead>
                    <tr>
                        <th data-field="aadhar_no">Aadhar_No</th>
                        <th data-field="name">Name</th>
                        <th data-field="email">Email</th>
                        <th data-field="district">District</th>
                        <th data-field="blood_grp">Blood Group</th>
                        <th data-field="phone">Phone_NO</th>
                        <th data-field="gender">Gender</th>
                        <th data-field="address">Address</th>
                        <th data-field="pincode">Pincode</th>
                        <th data-field="isPlasmaDonor">IsPlasmaDonor</th>
                    </tr>
                </thead>
                <tbody>{this.showList()}</tbody>
            </Table>
        </div>
    )
        
    }
    
}
export default RequestUserList;