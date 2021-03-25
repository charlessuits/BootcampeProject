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

function allDis(props) {
    var roomid= props.roomid;  
    

     const rooms = props.alldis.map(roomb => {
          
    return(
        <React.Fragment>
            <NavItem>                           
                                
                <NavLink className="nav-link" to={`/allDis/${roomid++}`}>{roomb.desc}</NavLink>                  
            </NavItem>      
        </React.Fragment>
                   
    );
 });
 return(rooms);
}

function AllDis (props) {  
 
    var currentroom = 0;
    if (props.roomid)
    {
            currentroom = props.roomid;
           
    }
     
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    var roomid = 0;
    const rooms = props.alldis.map(rooma => {
     
        return(
            
            <NavLink className="nav-link" to={`/alldis/${roomid++}`}>{rooma.desc}</NavLink>     
            
        );
    });
   
    return (
        
       
  
        
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
               
                   
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Posters</BreadcrumbItem>
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <img src={props.alldis[currentroom].src} width="100%"/>
                    </div>
                </div>
            </div>
        </div>
        
    
    );
}

export default AllDis;