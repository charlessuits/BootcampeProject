import React, { useState }  from 'react';
import { Breadcrumb, BreadcrumbItem,  Button, ButtonGroup, ButtonToolbar, Label, Col, Row,  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText  } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import Iframe from './Iframe';

function RoomItems(props) {
    var roomid= props.roomid * 100;  

     const roms = props.rooms.map(roomb => {
          
    return(
        <React.Fragment>
            <DropdownItem>
                                
                                
                <NavLink className="nav-link" to={`/allrooms/${roomid++}`}>{roomb.desc}</NavLink>                  
            </DropdownItem>      
        </React.Fragment>
                   
    );
 });
 return(roms);
}

function AllRooms (props) {  
 
    var currentroom = 0;
    if (props.roomid)
    {
            currentroom = props.roomid;
           
    }
        
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    var roomid = 0;
    const rooms = props.allrooms.map(rooma => {
     
        return(
            
             
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {rooma.name}
                </DropdownToggle>
                <DropdownMenu right>
                <RoomItems rooms={rooma.rooms} roomid={roomid++}></RoomItems>
                
                </DropdownMenu>
                </UncontrolledDropdown>
          
                  
        );
    });
   
    return (
        <div className="container-fluid">
             <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Rooms</BreadcrumbItem>
                    </Breadcrumb>
                
                    <hr />
                </div>
            </div>
            
            <div className="row">            
                <div className="cols">
                    <Navbar light width="100%" expand="md" light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    {rooms}
                    </Nav>
                     </Collapse>
                    </Navbar>
                </div>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
        
                    <Iframe source={props.allrooms[Math.floor(currentroom/100)].rooms[currentroom % 100].src} />
                </div>
            </div>
        </div>
        </div>
        
    
    );
}

export default AllRooms;