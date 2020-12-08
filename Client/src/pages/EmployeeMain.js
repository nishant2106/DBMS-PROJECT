import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import NavBarComponent from './SideNav';

class EmployeeMain extends Component{
    render(){
        var select = this.props.location.pathname.substring(1)
        return(
            <React.Fragment>
            <NavBarComponent selected={select}/>
            <div style={{marginLeft:"64px"}}>
                { this.props.children}
            </div>
            </React.Fragment>
        );
    }
}

export default withRouter(EmployeeMain);