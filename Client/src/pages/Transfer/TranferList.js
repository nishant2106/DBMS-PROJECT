import React, { Component } from 'react';
import { Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TransferList extends Component{
    constructor(props){
        super(props)
        this.state={
            Transfers:[],
            isLoaded:false
        }
    }
    async componentDidMount(){
        const url="http://localhost:3001/transfer"
        const response = await fetch(url)
        const data = await response.json()
        if(data.length>0){
            this.setState({Transfers:data})
            this.setState({isLoaded:true})
            toast.success('Data is Fetched SuccessFully.')
        }
        else
            toast.error('No Data to Display')
    }
    showList(){
        let data = this.state.Transfers
        let rows=[]
        console.log(data)
        if(this.state.isLoaded){
            for (let index = 0; index < data.length; index++) {
                let date = new Date(data[index].t_date)
                rows.push(
                    <tr key={data[index].t_id}>
                        <td>{data[index].t_id}</td>
                        <td>{data[index].h_id}</td>
                        <td>{data[index].name}</td>
                        <td>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}</td>
                        <td>{data[index].Qty}</td>
                        <td>{data[index].component_name}</td>
                        <td>{data[index].blood_grp}</td>
                        <td>{data[index].status}</td>
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
                        <th data-field="TID">TID</th>
                        <th data-field="HID">HID</th>
                        <th data-field="Name">Name</th>
                        <th data-field="rdate">Req. Date</th>
                        <th data-field="quantity">Quantity</th>
                        <th data-field="component">Component</th>
                        <th data-field="blood">Blood Group</th>
                        <th data-field="status">Status</th>
                    </tr>
                    </thead>
                    <tbody>{this.showList()}</tbody>
                </Table>
            </div>
        )
    }
}
export default TransferList;