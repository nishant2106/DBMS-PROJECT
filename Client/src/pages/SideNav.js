import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from './StyledSideNav';
import { FaUserNurse,FaStore,FaCampground,FaBandcamp } from 'react-icons/fa';
import { IconContext } from "react-icons";
import {browserHistory} from 'react-router'

const navWidthCollapsed = 64;
const navWidthExpanded = 280;

const NavHeader = styled.div`
    display: ${props => (props.expanded ? 'block' : 'none')};
    white-space: nowrap;
    background-color: #db3d44;
    color: #fff;
    > * {
        color: inherit;
        background-color: inherit;
    }
`;

// height: 20px + 10px + 10px = 40px
const NavTitle = styled.div`
    font-size: 2em;
    line-height: 20px;
    padding: 10px 0;
`;

// height: 20px + 4px = 24px;
const NavSubTitle = styled.div`
    font-size: 1em;
    line-height: 20px;
    padding-bottom: 4px;
`;
const Separator = styled.div`
    clear: both;
    position: relative;
    margin: .8rem 0;
    background-color: #ddd;
    height: 1px;
    color:#222;
`;

class NavBarComponent extends Component {
   
    state = {
        selected: this.props.selected,
        expanded: false
    };

    lastUpdateTime = new Date().toISOString();

    onSelect = (selected) => {
        this.setState({ selected: selected });
        browserHistory.push('/'+selected)
        window.location.reload(false);
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    
    render() {
        const { expanded, selected } = this.state;
        return (
            <div>
                <SideNav
                    style={{ minWidth: expanded ? navWidthExpanded : navWidthCollapsed }}
                    onSelect={this.onSelect}
                    onToggle={this.onToggle}
                >
                    <Toggle />
                    <NavHeader expanded={expanded}>
                        <NavTitle>Priviledges</NavTitle>
                        <NavSubTitle>Employee Activities</NavSubTitle>
                    </NavHeader>
                    <Nav
                        defaultSelected={selected}
                    >
                        <NavItem eventKey="dashboard">
                            <NavIcon>
                                <i className="fa fa-fw fa-tachometer" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32,color:"#333" }} title="DASHBOARD">
                            DASHBOARD
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="donors">
                            <NavIcon>
                                <i className="fa fa-fw fa-heartbeat" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="DONORS">
                                DONORS
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="donation">
                            <NavIcon>
                                <i className="fa fa-fw fa-list" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="BLOOD DONATIONS">
                                BLOOD DONATIONS
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="hospital">
                            <NavIcon>
                                <i className="fa fa-fw fa-hospital-o" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="HOSPITALS">
                                HOSPITALS
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="transfer">
                            <NavIcon>
                                <i className="fa fa-fw fa-arrow-up" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="TRANSFERS">
                                TRANSFERS
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="nurse">
                            <NavIcon>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                <FaUserNurse/>
                            </IconContext.Provider>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="NURSES">
                                NURSES
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="request">
                            <NavIcon>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <FaBandcamp/>
                                </IconContext.Provider>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="REQUEST">
                                REQUEST
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="storage">
                            <NavIcon>
                            <IconContext.Provider value={{ className: 'react-icons' }}>
                                <FaStore/>
                            </IconContext.Provider>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="STORAGE">
                                STORAGE
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="camps">
                            <NavIcon>
                                <IconContext.Provider value={{ className: 'react-icons' }}>
                                    <FaCampground/>
                                </IconContext.Provider>
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="CAMPAIGNS">
                            CAMPAIGNS
                            </NavText>
                        </NavItem>
                        {/* <NavItem eventKey="settings">
                            <NavIcon>
                                <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="SETTINGS">
                                SETTINGS
                            </NavText>
                            <NavItem eventKey="settings/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem> */}
                        <Separator />
                        <NavItem eventKey="logout">
                            <NavIcon>
                                <i className="fa fa-fw fa-power-off" style={{ fontSize: '1.5em' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="LOG OUT">
                                LOG OUT
                            </NavText>
                        </NavItem>
                    </Nav>
                </SideNav>
            </div>
        );
    }
}

export default NavBarComponent;