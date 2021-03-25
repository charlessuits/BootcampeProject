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



// function coverNav (props) {
    
     
 
    
    function CreateCover (props) {  
     
        var currentcover = 0;
        if (props.coverid)
        {
                currentcover = props.coverid;
               
        }
        const [isOpen, setIsOpen] = useState(false);
    
        const toggle = () => setIsOpen(!isOpen);
    
        var coverid = 0;
        
        const covers = props.covers.map(cover => {
               
            return(
                
                <NavLink className="nav-link" to={`/covers/${coverid++}`}>{cover.desc}</NavLink>     
                
            );
        });
       let src=props.covers[currentcover].src;
        return (
            
           
      
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>CoverLetters</BreadcrumbItem>
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
                        {covers}
                        <NavLink className="nav-link" to={`/createcoverletter/`}>Create Cover Letter</NavLink> 
                        </Nav>
                         </Collapse>
                        </Navbar>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                      
                        <div className="col-sm-12">
                            
                            <iframe
                                src={"https://docs.google.com/viewer?url=" + src + "&embedded=true"}
                                title="file"
                                width="100%"
                                height="600"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            
        
        );
    }
  export default CreateCover;