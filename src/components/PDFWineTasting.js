import React, { Component } from 'react';

import { Breadcrumb, Modal, Button, Row, Col, ModalHeader, ModalBody, BreadcrumbItem, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Tabletop from 'tabletop';


class PDFWineTasting extends Component {
    constructor(props) {
      super(props)
      this.state = {
          data: [],
          wineName: "",
          isModalOpen: false,
          currentWine: "",
          currentColor: ""
        };
     
        this.toggleModal = this.toggleModal.bind(this);
        
    }
  
getData() {
      
        Tabletop.init( {
          key: 'https://docs.google.com/spreadsheets/d/1Ig8eqduMOcTv2zf0SepzBJLpEVdXgsb4zoPpsGX7xDA/edit#gid=917834120',
          simpleSheet: true }
        ).then(wineList => {
          //   console.log(wineList);
          this.setState({data: wineList });
       });   
  }
toggleModal() {
      this.setState({
          isModalOpen: !this.state.isModalOpen
      });
} 
componentDidMount() {
       this.getData();
}

 handleChange = event => {
    this.setState({ 
       wineName : event.target.value });
    this.toggleModal();
    const currentWine = this.state.data.filter(item => item.WineName === event.target.value);
console.log(currentWine);
    if (currentWine[0].RedWine > 'A')
      this.setState({ currentColor: currentWine[0].RedWine})
    if (currentWine[0].WhiteWine > 'A')
      this.setState({ currentColor: currentWine[0].WhiteWine})
    if (currentWine[0].RoseWine > 'A')
      this.setState({ currentColor: currentWine[0].RoseWine})
    this.setState({currentWine: currentWine[0]});
};
  
    render() {
      
      const reds = this.state.data.filter(item => item.RedWine > 'A');
      const whites = this.state.data.filter(item => item.WhiteWine > 'A');
      const roses = this.state.data.filter(item => item.RoseWine > 'A');
       return (
       
        <div className="container-fluid" >
          <div style={{  
            backgroundImage: "url(" + "http://charlessuits.org/sites/MrSuits.net/charlessuits/imb/Wines.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} >
 

          <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Wine Tasting</BreadcrumbItem>
                    </Breadcrumb>
                  
                    <hr />
                </div>
                
            </div>
            <div className="row">
              <div className="col-3">

              </div>
              <div className="col-2">
          

          
                  <UncontrolledButtonDropdown style={{color: "red"}}>
                      <DropdownToggle caret>
                        Rose Wines
                    </DropdownToggle>
                    <DropdownMenu>
                      {roses.map((item) => (
                        <DropdownItem style={{color: "pink"}} name={item.WineName} value={item.WineName} onClick={this.handleChange}>{item.WineName}</DropdownItem>
                        ))}
                      </DropdownMenu>
                  </UncontrolledButtonDropdown>    
              </div>
              <div className="col-2">
                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret>
                          Red Wines
                      </DropdownToggle>
                      <DropdownMenu>
                        {reds.map((item) => (
                          <DropdownItem  style={{color: "red"}}name={item.WineName} value={item.WineName} onClick={this.handleChange}>{item.WineName}</DropdownItem>
                          ))}
                          </DropdownMenu>
                    </UncontrolledButtonDropdown> 
              </div>
              <div className="col-2">
                <UncontrolledButtonDropdown>
                  <DropdownToggle caret>
                    White Wines
                </DropdownToggle>
                <DropdownMenu>
                  {whites.map((item) => (
                    <DropdownItem  style={{color: "gold"}}name={item.WineName} value={item.WineName} onClick={this.handleChange}>{item.WineName}</DropdownItem>
                    ))}
                    </DropdownMenu>
              </UncontrolledButtonDropdown> 
              
          </div>
              <div className="row">
              <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                        <img src="http://charlessuits.org/sites/MrSuits.net/charlessuits/img/Wines.jpg" width="100%"  />
                        </div>
                    </div>
                </div>
              </div>
           
          
          <div className="container fluid">
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Wine Tasting</ModalHeader>
                    <ModalBody>
                      <Row>
                          <Col className="col-6">
                            <div> Wine Name: </div>
                          </Col>
                          <Col className="col-6">
                           <div style={{color: "red"}}>{this.state.currentWine.WineName}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                            <div>  Color Intensity: </div>
                          </Col>
                          <Col className="col-6">
                            <div style={{color: "red"}}> {this.state.currentWine.ColorIntensity}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                            <div> Wine Color: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentColor}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Nose Intensity: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.NoseIntensity}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Aroma Characteristics: }</div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.AromaCharacteristics}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Sweetness: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Sweetness}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Acidity: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Acidity}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Tannin: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Tannin}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Alcohol: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Alcohol}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Body: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Body}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Flavor Intensity: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.FlavorIntensity}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Flavor Characteristics: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.FlavorCharacteristics}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Finish : </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Finish}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Quality : </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Quality}</div>
                          </Col>
                       </Row>
                       <Row>
                          <Col className="col-6">
                          <div> Grade: </div>
                          </Col>
                          <Col className="col-6">
                          <div style={{color: "red"}}>{this.state.currentWine.Grade}</div>
                          </Col>
                       </Row>
                        <Button color="primary" onClick={this.toggleModal}>Close</Button>
                    </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
      </div>
       
    
       )}

}
export default PDFWineTasting;

