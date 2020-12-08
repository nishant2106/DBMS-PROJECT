import React,{ Component } from "react";
import { Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DonationList extends Component{
    constructor(props){
        super(props)
        this.state={
            Donation:[],
            isLoaded:false
        }
    }
    async componentDidMount(){
        const url="http://localhost:3001/Donation"
        const response = await fetch(url)
        const data = await response.json()
        if(data.length>0){
            this.setState({Donation:data})
            this.setState({isLoaded:true})
            toast.success('Data is Fetched SuccessFully.')
        }
        else
            toast.error('No Data to Display')
    }
    showList(){
        let data = this.state.Donation
        let rows=[]
        console.log(data)
        if(this.state.isLoaded){
            for (let index = 0; index < data.length; index++) {
                let date = new Date(data[index].d_date)
                rows.push(
                    <tr>
                        <td>{data[index].id}</td>
                        <td>{data[index].aadhar_no}</td>
                        <td>{data[index].name}</td> 
                        <td>{data[index].mob_no}</td>       
                        <td>{data[index].component_name}</td>
                        <td>{data[index].blood_grp}</td>                        
                        <td>{data[index].Qty}</td>
                            <td>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}</td>
                        <td>{data[index].nurse_id}</td>
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
                            <th data-field="id">ID</th>
                            <th data-field="aadhar_no">Aadhar No</th>
                            <th data-field="name">Name</th>
                            <th data-field="phone">Phone No</th>
                            <th data-field="component">Component Name</th>
                            <th data-field="blood_grp">Blood Group</th>
                            <th data-field="qty">Quantity</th>
                            <th data-field="date">Donation Date</th>
                            <th data-field="nurse_id">Nurseid</th>

                        </tr>
                    </thead>
                    <tbody>{this.showList()}</tbody>
                </Table>
            </div>
        )
    }
}

export default DonationList;