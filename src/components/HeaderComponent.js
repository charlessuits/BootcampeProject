import React,  { Component, useState }   from 'react';
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';


function sendEmail1(e) {
    e.preventDefault();
emailjs.init("user_F4bcUCBFDSqWyeAkxDFRT");
    emailjs.sendForm('service_evt6te2', 'template_gkb7mzb', e.target, 'user_F4bcUCBFDSqWyeAkxDFRT')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);

        });
    }
    


class Header extends Component {

    constructor(props) {
        super(props);
         this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
     

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
   
 
    render() {
       

        return (
            <React.Fragment>
                <div className="container"  background-color="gray" >
                        
                </div>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to="/home" >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/allrooms">
                                         PlayRooms
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/references">
                                        References
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/where">
                                         Where
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/biography">
                                         Biography
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/alldis">
                                         Posters
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/covers">
                                         Cover Letters
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                       Experience
                                    </DropdownToggle>
                                    <DropdownMenu style={{ fontSize: `50%` }} right>
                                        
                                        <DropdownItem style={{ fontSize: `30%` }}>
                                            <NavLink className="nav-link" to="/allitems/1">
                                            Legal Experience
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/allitems/3">
                                            Educational Experience
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/allitems/2">
                                            Business Experience</NavLink>
                                            </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/allitems/5">Technical Experience
                                            </NavLink>
                                        </DropdownItem>
                                        
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/allitems/4">
                                           Education
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                    
                                    <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                       Resumes
                                    </DropdownToggle>
                                    <DropdownMenu style={{ fontSize: `50%` }} right>
                                        
                                        <DropdownItem style={{ fontSize: `30%` }}>
                                            <NavLink className="nav-link" to="/createresume/1">
                                            Legal Experience
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/createresume/3">
                                            Educational Experience
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/createresume/2">
                                            Business Experience
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/createresume/4">Technical Experience
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/createresume/100">
                                            All
                                            </NavLink>
                                        </DropdownItem>
                                        
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                       Wine
                                    </DropdownToggle>
                                    <DropdownMenu style={{ fontSize: `50%` }} right>
                                        
                                        <DropdownItem style={{ fontSize: `30%` }}>
                                            <NavLink className="nav-link" to="/fillintastings">
                                            Record Tasting
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/seealltastings">
                                            All Tastings
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/pdfwinetasting">
                                            PDF of Tastings
                                            </NavLink>
                                        </DropdownItem>
                                        
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" /> Say Hello
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Email Me</ModalHeader>
                    <ModalBody>
                    <form className="contact-form" onSubmit={sendEmail1}>
                        <input type="hidden" name="contact_number" />
                        <label>Name </label>
                        <br />
                        <input type="text" name="user_name" />
                        <br />
                        <label>Email </label>
                        <br />
                        <input type="email" width="100%" name="user_email" />
                        <br />
                        <label>Message </label>
                        <br />
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
            
        );
    }
}

export default Header;