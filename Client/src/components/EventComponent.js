import React,{Component} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Media } from 'reactstrap';

class Event extends Component{
    constructor(props){
        super(props)
        this.state={
            Camp:[],
            isLoaded:false
        }
    }
    async componentDidMount(){
        const url="http://localhost:3001/Camps"
        const response = await fetch(url)
        const data = await response.json()
        if(data.length>0){
            this.setState({Camp:data})
            this.setState({isLoaded:true})
            toast.success('Data is Fetched SuccessFully.')
        }
        else
            toast.error('No Data to Display')
    }
    render(){
        let aboutCards = this.state.Camp.map(person => {
            return (
                <React.Fragment>
                    <Media tag="li" className="border border-primary bg-secondary rounded">
                        <Media body className="col-12">
                            <Media heading>Campaign Name: {person.name} ({person.c_date})</Media>
                            <p>Location :{person.location}</p>
                            <p>Contact Info: {person.mob_no}</p>
                        </Media>
                    </Media>
                    <br/>
                </React.Fragment>
            )
        })
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
                <h1>Upcoming Event & BloodDrives</h1>
                {aboutCards}
            </div>
        )
    }
}
export default Event;