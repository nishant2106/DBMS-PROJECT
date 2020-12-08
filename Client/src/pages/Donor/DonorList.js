import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DonorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Donors: [],
            isLoaded: false
        }
    }
    async componentDidMount() {
        const url = "http://localhost:3001/donors"
        const response = await fetch(url)
        const data = await response.json()
        if (data.length > 0) {
            this.setState({ Donors: data })
            this.setState({ isLoaded: true })
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
    showList() {
        let data = this.state.Donors
        let rows = []
        if (this.state.isLoaded) {
            for (let index = 0; index < data.length; index++) {
                rows.push(
                    <tr key={data[index].aadhar_no}>
                        <td>{data[index].aadhar_no}</td>
                        <td>{data[index].name}</td>
                        <td>{data[index].email}</td>
                        <td>{data[index].district}</td>
                        <td>{data[index].blood_grp}</td>
                        <td>{data[index].mob_no}</td>
                        <td>{data[index].gender}</td>
                        {/* <td>{data[index].address}</td> */}
                        <td>{data[index].pinCode}</td>
                        <td>{data[index].isPlasmaDonor}</td>
                        <td>
                            <Button variant="info" value={data[index].aadhar_no} onClick={this.handleClick}>Edit</Button>
                        </td>
                    </tr>
                )
            }
            return rows
        }
    }
    render() {
        return (
            <div className="container">
                <ToastContainer position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
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
                            {/* <th data-field="address">Address</th> */}
                            <th data-field="pincode">Pincode</th>
                            <th data-field="isPlasmaDonor">IsPlasmaDonor</th>
                            <th data-field="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.showList()}</tbody>
                </Table>
            </div>
        )
    }
}
export default DonorList;