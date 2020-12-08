import React,{Component} from 'react'
import { Button } from 'reactstrap';
import { FaPlus,FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";
import DonationList from './DonationList';
import DonationRegistration from './DonationRegistration';
import DonationEdit from './DonationEdit';





class Donation extends Component{
    constructor(props){
        super(props);
        this.state = {
            screenId : 0,
            id : ''
        }
    }

    getCurrentView(){ if(this.state.screenId === 1)
        return <DonationRegistration closeCallBack={ this.closeCallBack }/>;
    else if(this.state.screenId === 2)
        return <DonationEdit id={this.state.id} closeCallBack={ this.closeCallBack } />

    return <DonationList editCallBack={ this.editCallBack } closeCallBack={ this.closeCallBack } />;
}
    getButtonIcon(){
        if(this.state.screenId === 1 || this.state.screenId === 2)
                    return <FaTimes/>;
        else return <FaPlus/>;
    }

    handleClick = () => {
        let sid = this.state.screenId === 0 ? 1 : 0 ;
        this.setState((prevState, props) => {
          return { screenId: sid }     
        });
      }

    editCallBack = (id) =>{
        this.setState((prevState, props) => {
            return { screenId: 2, id: id}
        });
    }

    closeCallBack = () => {
        this.setState({ screenId : 0 });
    }

    render(){
        return(
            <div className="col-12">
                { this.getCurrentView() }
                <Button className="btn btn-lg btn-danger" 
                style={{bottom: '45px', right: '24px', borderRadius:'50%',padding:'1%', position: 'fixed'}}
                onClick={ this.handleClick }>
                    <IconContext.Provider value={{ className: 'react-floating-button' }}>
                        {this.getButtonIcon()}
                    </IconContext.Provider>
                </Button>
            </div>
        )
    }
}
export default Donation;