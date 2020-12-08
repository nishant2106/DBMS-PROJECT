import React,{ Component } from "react";
import { Button, Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HospitalList extends Component{
    constructor(props){
        super(props)
        this.state={
            Hospital:[],
            isLoaded:false
        }
    }
    async componentDidMount(){
        const url="http://localhost:3001/hospital"
        const response = await fetch(url)
        const data = await response.json()
        if(data.length>0){
            this.setState({Hospital:data})
            this.setState({isLoaded:true})
            toast.success('Data is Fetched SuccessFully.')
        }
        else
            toast.error('No Data to Display')
    }
    handleClick = (arg) => {
        if (typeof this.props.editCallBack === 'function') {
            this.props.editCallBack(arg.target.value)
        }
    }
    showList(){
        let data = this.state.Hospital
        let rows=[]
        if(this.state.isLoaded){
            for (let index = 0; index < data.length; index++) {
                rows.push(
                    <tr key={data[index].h_id}>
                        <td>{data[index].h_id}</td>
                        <td>{data[index].name}</td>
                        <td>{data[index].mob_no}</td>
                        <td>{data[index].district}</td>
                        <td>{data[index].city}</td>
                        <td>{data[index].pincode}</td>
                        <td><Button className="btn" value={data[index].h_id} onClick={this.handleClick}>Edit</Button></td>
                    </tr>
                ) 
            }
            return rows
        }
    }
    render(){
        return(
            <div>
                <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover/>
                <Table className="highlight">
                    
                    <thead>
                        <tr>
                            <th data-field="h_id">Hospital_id</th>
                            <th data-field="name">Name</th>
                            <th data-field="mob_no">Phone</th>
                            <th data-field="district">district</th>
                            <th data-field="city">City</th>   
                            <th data-field="pincode">Pincode</th>
                            <th data-field="edit">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.showList()}</tbody>
                </Table>
            </div>
        )
    }
}

export default HospitalList;