import React,{ Component } from "react";
import { Button, Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class NurseList extends Component{
    constructor(props){
        super(props)
        this.state={
            Nurses:[],
            isLoaded:false
        }
        this.handlCLick = this.handlCLick.bind(this)
    }
    async componentDidMount(){
        const url="http://localhost:3001/Nurse"
        const response = await fetch(url)
        const data = await response.json()
        if(data.length>0){
            this.setState({Nurses:data})
            this.setState({isLoaded:true})
            toast.success('Data is Fetched SuccessFully.')
        }
        else
            toast.error('No Data to Display')
    }
    handlCLick(arg){
        if(typeof this.props.editCallBack === 'function'){
            this.props.editCallBack(arg.target.value)
        }
    }
    showList(){
        let data = this.state.Nurses
        let rows=[]
        if(this.state.isLoaded){
            for (let index = 0; index < data.length; index++) {
                let date = new Date(data[index].join_date)
                let id=data[index].nurse_id
                rows.push(
                    <tr key={id}>
                        <td>{data[index].nurse_id}</td>
                        <td>{data[index].name}</td>
                        <td>{data[index].gender}</td>
                        <td>{data[index].city}</td>
                        <td>{data[index].mob_no}</td>
                        <td>{data[index].email}</td>
                        <td>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}</td>
                        <td><Button className="btn" value={id} onClick={this.handlCLick}>Edit</Button></td>
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
                    autoClose={2000}
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
                            <th data-field="NID">NurseID</th>
                            <th data-field="name">Name</th>
                            <th data-field="gender">Gender</th>
                            <th data-field="location">Location</th>
                            <th data-field="phone">Phone</th>
                            <th data-field="Email">Email</th>
                            <th data-field="date">Join Date</th>
                            <th data-field="edit">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.showList()}</tbody>
                </Table>
            </div>
        )
    }
}

export default NurseList;