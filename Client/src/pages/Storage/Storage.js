import React,{Component} from 'react'
import { Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Storage extends Component{
    constructor(props){
        super(props)
        this.state={
            Storage:[],
            isLoaded:false
        }
    }
    async componentDidMount(){
        const url="http://localhost:3001/Storage"
        const response = await fetch(url)
        const data = await response.json()
        if(data.length>0){
            this.setState({Storage:data})
            this.setState({isLoaded:true})
            toast.success('Data is Fetched SuccessFully.')
        }
        else
            toast.error('No Data to Display')
    }
    showList(){
        let data = this.state.Storage
        let rows=[]
        if(this.state.isLoaded){
            for (let index = 0; index < data.length; index++) {
                rows.push(
                    <tr key={data[index].component_name}>
                        <td>{data[index].component_name}</td>
                        <td>{data[index].O_pos}</td>
                        <td>{data[index].O_neg}</td>
                        <td>{data[index].A_pos}</td>
                        <td>{data[index].A_neg}</td>
                        <td>{data[index].B_pos}</td>
                        <td>{data[index].B_neg}</td>
                        <td>{data[index].AB_pos}</td>
                        <td>{data[index].AB_neg}</td>
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
                <div className="row">
                    &nbsp;
                </div>
                <Table className="table table-striped table-bordered">
                    
                    <thead className="thead-dark">
                        <tr>
                            <th data-field="component">Component</th>
                            <th data-field="ap">A+</th>
                            <th data-field="an">A-</th>
                            <th data-field="bp">B+</th>
                            <th data-field="bn">B-</th>
                            <th data-field="abp">AB+</th>
                            <th data-field="abn">AB-</th>
                            <th data-field="op">O+</th>
                            <th data-field="o_n">O-</th>
                        </tr>
                    </thead>
                    <tbody>{this.showList()}</tbody>
                </Table>
            </div>
        )
    }
}
export default Storage;