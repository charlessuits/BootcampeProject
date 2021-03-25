import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {Collapse, Breadcrumb, BreadcrumbItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
    import PDFCreateCover from './PDFCreateCover';
    import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

   



import ReactPDF from '@react-pdf/renderer';


import { Control, LocalForm, actions, Errors } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CreateCoverLetter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datesent: '',
            fullName: '',
            company: '',
            address1: '',
            address2: '',
            position: '',
            dearName: 'To Whom It May Concern:',
            courses: false,
            websites: false,
            references: false,
            rooms: false,
            around: false,
            business: false,
            project: false,
            wanted: false,
            Teachwanted: false,
            Managerwanted: false,
            teacher: false,
            technical: false,
            management: false,
           
            isModalOpen: true
          };
          
          this.toggleModal = this.toggleModal.bind(this);
          this.handleCSubmit = this.handleCSubmit.bind(this);
      
      
       }
      
       toggleModal() {
              this.setState({
                  isModalOpen: !this.state.isModalOpen
          });
       }

    handleCSubmit(event) {

   
      this.toggleModal();
      event.preventDefault();
    
      
     
      this.setState({fullName: this.fullName.value});
      this.setState({company: this.company.value});
      this.setState({address1: this.address1.value});
      this.setState({address2: this.address2.value});
      this.setState({position: this.position.value});
      this.setState({dearName: this.dearName.value});
      this.setState({courses: this.courses.checked});
      this.setState({references: this.references.checked});
      this.setState({webpages: this.webpages.checked});
      this.setState({rooms: this.rooms.checked});
      this.setState({around: this.around.checked});
      this.setState({business: this.business.checked});
      this.setState({project: this.project.checked});
      this.setState({wanted: this.wanted.checked});
      this.setState({Managerwanted: this.Managerwanted.checked});
      this.setState({Teachwanted: this.Teachwanted.checked});
      this.setState({technical: this.technical.checked});
      this.setState({teacher: this.teacher.checked});
      this.setState({management: this.management.checked});
     
     
      


    }
 
    render() {
         


        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>CreateCoverLetter</BreadcrumbItem>
                        </Breadcrumb>
                
                    </div>
                    </div>
                </div>
               
                
                   
                   <Button color="primary" onClick={this.toggleModal}>
                          <i className="fa  fa-lg" /> Create New Cover Letter
                     </Button>
                     <PDFCreateCover state={this.state} />
               
                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Cover Letter Parameters</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this. handleCSubmit}>
                            <Button type="submit" value="submit" color="primary">  Create</Button> 
                                <FormGroup>
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input type="text" id="fullName" name="fullName"
                                        innerRef={input => this.fullName = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="company">Company Name</Label>
                                    <Input type="text" id="company" name="company"
                                        innerRef={input => this.company = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address1">Street Address</Label>
                                    <Input type="text" id="address1" name="address1"
                                        innerRef={input => this.address1 = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address2">City, State Zip</Label>
                                    <Input type="text" defaultValue = "Las Vegas, Nv 891" id="address2" name="address2"
                                        innerRef={input => this.address2 = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="position">Position</Label>
                                    <Input type="text" id="position" name="position"
                                        innerRef={input => this.position = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="dearName">Dear Line</Label>
                                    <Input type="text" defaultValue="To Whom It May Concern: " id="dearName" name="dearName"
                                        innerRef={input => this.dearName = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="technical">
                                    <Input type="checkbox" id="technical" name="technical"
                                        innerRef={input => this.technical = input} />
                                    {' '} Default Technical Letter
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="teacher">
                                    <Input type="checkbox" id="teacher" name="teacher"
                                        innerRef={input => this.teacher = input} />
                                    {' '} Default Teacher Letter
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="management">
                                    <Input type="checkbox" id="management" name="management"
                                        innerRef={input => this.management = input} />
                                    {' '} Default Managementt Letter
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="courses">
                                    <Input type="checkbox" id="courses" name="courses"
                                        innerRef={input => this.courses = input} />
                                    {' '} Over 120 Courses Taught
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="references">
                                    <Input type="checkbox"   id="references" name="references"
                                        innerRef={input => this.references = input} />
                                    {' '} All My References</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="courses">
                                    <Input type="checkbox" id="rooms" name="rooms"
                                        innerRef={input => this.rooms = input} />
                                    {' '} Virual Learning Rooms</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="webpages">
                                    <Input type="checkbox" id="webpages" name="webpages"
                                        innerRef={input => this.webpages = input} />
                                        {' '} Webpage Examples</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="around">
                                    <Input type="checkbox" id="around" name="around"
                                        innerRef={input => this.around = input} />{' '}  Living Paragraph
                                     </Label>
                                </FormGroup>
                               
                                <FormGroup check>
                                    <Label check htmlFor="project">
                                    <Input type="checkbox" id="project" name="project" 
                                        innerRef={input => this.project = input} />{' '}  Project Paragraph
                                     </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="business">
                                    <Input type="checkbox" id="business" name="business" 
                                        innerRef={input => this.business = input} />{' '}  Business Paragraph
                                     </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check htmlFor="Teachwanted">
                                    <Input type="checkbox" id="Teachwanted" name="Teachwanted" 
                                        innerRef={input => this.Teachwanted = input} />{' '}  Teach/Trainer Job Wanted Paragraph
                                     </Label>
                                </FormGroup>
                                
                              
                                <FormGroup check>
                                    <Label check htmlFor="wanted">
                                    <Input type="checkbox" id="wanted" name="wanted" 
                                        innerRef={input => this.wanted = input} />{' '}  Programmer Job Wanted Paragraph
                                     </Label>
                                </FormGroup>
                                
                               
                                <FormGroup check>
                                    <Label check htmlFor="Managerwanted">
                                    <Input type="checkbox" id="Managerwanted" name="Managerwanted" 
                                        innerRef={input => this.Managerwanted = input} />{' '}  Manager Job Wanted Paragraph
                                     </Label>
                                </FormGroup>
                            
                                
                            </Form>
                    </ModalBody>
                </Modal>


                
            </div>
            
        );
        
    
    }
}
// const styles = StyleSheet.create({
//   header: {
//     borderTopWidth: 4,
//     borderTopColor: '#0084B4',
//     color: '#898989',
//     padding: 20,
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   headerCenter: {
//     textAlign: 'center',
//     flex: 1,
//     alignSelf: 'center',
//     fontSize: 32,
//     fontWeight: 900,
//     lineHeight: 1,
//     color: '#0084B4',
//   //   fontFamily: 'Ariel',
//   },
//   headerLeft: {
//     textAlign: 'left',
//     flex: 1,
//     alignSelf: 'center',
//     fontSize: 32,
//     fontWeight: 900,
//     lineHeight: 1,
//     color: '#0084B4',
//   //   fontFamily: 'Ariel',
//   },
//   headerRight: {
//     textAlign: 'right',
//     fontSize: 12,
//     flex: 1,
//   //   fontFamily: 'Ariel',
//   },
//   skill: {
//     textAlign: 'left',
//     fontsize: 10,
//     flex: 1,
//     color: '#5c250a'
//   },
//   skillBold: {
//     textAlign: 'left',
//     fontsize: 12,
//     flex: 1,
//     color: "black",
//     fontWeight: "bold"
//   },
//   ribbon: {
//     backgroundColor: '#0084B4',
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 10,
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#FFF',
//   },
//   ribbonSkill: {
//     backgroundColor: '#ede4e4',
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 20,
//     marginBottom: 20,
//     color: '#FFF',
//   },
//   ribbonEducation: {
//       backgroundColor: '00E4E4',
//       display: 'flex',
//       flexDirection: 'row',
//       padding: 20,
//       marginBottom: 20,
//       textAlign: 'center',
//       color: '#FFF',
//     },
//   ribbon: {
//       backgroundColor: '#0084B4',
//       display: 'flex',
//       flexDirection: 'row',
//       padding: 20,
//       marginBottom: 20,
//       textAlign: 'center',
//       color: '#FFF',
//     },
//   ribbonGrey: {
//     backgroundColor: '#EDEDED',
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 20,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#0084B4',
//   },
//   imageHead: {
//     width: "100px"
//   },
//   imageWidth: {
//     width: "100%"
//   },
//   ribbonBox: {
//     width: '100%',
//     color: '#ffffff'
//   },
//   companyName: {
//       fontsize: "12",
//       width: "100%",
//       color: '#ffffff'
//   },
//   titleBox: {
//       fontsize: "16",
//       width: "100%",
//       color: '#ffffff'
//   },
//   experLine: {
//       fontsize: 13,
//       color: '#903030',
//       flex: 1,
//       textAlign: "left"
//   },
//   ribbonLabel: {
//     fontSize: 14,
//   //   fontFamily: 'KadwaBold',
//   },
//   ribbonValue: {
//     fontSize: 28,
//   //   fontFamily: 'KadwaBold',
//   },

//   table: {
//     paddingHorizontal: 20,
//     display: 'flex',
//     marginBottom: 20,
//   },
//   tableRowA: {
//     backgroundColor: '#EDEDED',
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 10,
//   },
//   tableRowB: {
//     padding: 10,
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   serviceName: {
//     fontSize: 10,
//     width: '25%',
//     fontFamily: 'KadwaBold',
//   },
//   serviceDescription: {
//     fontSize: 10,
//     width: '50%',
//     fontFamily: 'MontserratRegular',
//   },
//   serviceAmount: {
//     fontSize: 20,
//     width: '25%',
//     textAlign: 'right',
//     fontFamily: 'KadwaBold',
//   },
//   tableHeadingA: {
//     width: '100%',
//     fontSize: 14,
//     color: '#B06060',
//     padding: 10
//   //   fontFamily: 'KadwaBold',
//   },
//   tableHeadingB: {
//     width: '50%',
//     fontSize: 14,
//     color: '#0084B4',
//     fontFamily: 'KadwaBold',
//   },
//   tableHeadingC: {
//     width: '25%',
//     textAlign: 'right',
//     fontSize: 14,
//     color: '#0084B4',
//     fontFamily: 'KadwaBold',
//   },
//   summary: {
//     backgroundColor: '#0084B4',
//     color: '#FFF',
//     padding: 20,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   summaryMeta: {
//     width: '75%',
//     fontFamily: 'KadwaBold',
//   },
//   summaryAmount: {
//     fontSize: 20,
//     width: '25%',
//     textAlign: 'right',
//     fontFamily: 'KadwaBold',
//   },

//   howToPay: {
//     paddingHorizontal: 20,
//     textAlign: 'center',
//     fontSize: 20,
//     color: '#0084B4',
//     fontFamily: 'KadwaBold',
//   },

//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     borderTopColor: '#EDEDED',
//     borderTopWidth: 1,
//     textAlign: 'center',
//     fontSize: 10,
//   //   fontFamily: 'MontserratRegular',
//   },
// });
export default CreateCoverLetter;