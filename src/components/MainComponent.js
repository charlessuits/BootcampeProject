import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { connect} from 'react-redux';
import Biography from './Biography';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import '../App.css';

import AllRooms from './AllRooms';
import AllDis from './AllDis';
import AllItems from './ResumeItem';
import CreateResume from './CreateResume';
import PDFCreateCover from './PDFCreateCover';
import PDFWineTasting from './PDFWineTasting';
import CreateCover from './CreateCover';
import CreateCoverLetter from './CreateCoverLetter';
import Resume from './Resume';
import References from './References';

import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Where from './Where';



const mapStateToProps = state => {
    return {
        
        allrooms: state.allrooms,
        allitems: state.allitems,
        alldis: state.alldis,
        allskills: state.allskills,
        allcerts: state.allcerts,
        covers: state.covers
    };
};

class Main extends Component {

    

    render() {

        const HomePage = () => {
            return (
                <Home
                    
                />
            );
        };

        
        const AllRoomsWithId = ({match}) => {
            return (
                <AllRooms allrooms={this.props.allrooms}
                    roomid={match.params.roomId}
                    
                />
            );
        };
        const AllDisWithId = ({match}) => {
            return (
                <AllDis alldis={this.props.alldis}
                    roomid={match.params.roomId}
                    
                />
            );
        };
        const AllCoversWithId = ({match}) => {
            return (
                <CreateCover covers={this.props.covers}
                    coverid={match.params.coverId}
                    
                />
            );
        };
        const AllItemsWithType = ({match}) => {
          let items = this.props.allitems;
        
          switch (+match.params.itemType) {
              case 1:
                 items = this.props.allitems.filter(item => item.type==='l');
                  break;
               case 2:
                items = this.props.allitems.filter(item => item.type==='b');
                break;
                   break;
               case 3:
                items = this.props.allitems.filter(item => item.type==='s');
                   break;
                case 5:
                    items = this.props.allitems.filter(item => item.type==='t');
                   break;
                default :
                items = this.props.allitems.filter(item => item.type==='e');
          }
          return(
            <AllItems allitems={items} />
          );
        };
        const AllResumesWithType = ({match}) => {
           
           let currentitem= +match.params.itemType;
        
            return(
              <CreateResume curr={currentitem} allitems={this.props.allitems} allskills={this.props.allskills} allcerts={this.props.allcerts} />
            );
          };
     

        return (
            <div>
                <Header />
                <Switch>
                <Route path='/home' component={HomePage} />
                    
                    <Route path='/biography' component={Biography} />
                  
                    <Route exact path='/references' render={() => <References /> } />
                    
                    <Route exact path='/where' component={Where} />
                    <Route exact path='/resume' render={() => <Resume allrooms={this.props.allrooms} />} />
                    <Route exact path='/allrooms' render={() => <AllRooms allrooms={this.props.allrooms}  />} /><Route exact path='/alldis' render={() => <AllDis alldis={this.props.alldis}  />} />
                    <Route exact path='/allitems' render={() => <AllItems allitems={this.props.allitems}  />} />
                   
                    <Route exact path='/createresume' render={() => <CreateResume allitems={this.props.allitems}  />} />
                    {/* <Route exact path='/createcoverletter' render={() => <CreateCoverLetter  />} /> */}
                    <Route exact path='/pdfcreatecover' render={() => <PDFCreateCover  />} />
                    <Route exact path='/pdfwinetasting' render={() => <PDFWineTasting  />} />
                    <Route path='/allrooms/:roomId' component={AllRoomsWithId} />
                    <Route path='/fillintastings' component={() => { 
                        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe7EtnS-TKOgM36h0E9Z6ayIlY_NIxNYdyoVlMO4q2KFNW8RA/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link'; 
                        return null; }}/>
                    <Route path='/seealltastings' component={() => { 
                        window.location.href = 'https://docs.google.com/spreadsheets/d/1Ig8eqduMOcTv2zf0SepzBJLpEVdXgsb4zoPpsGX7xDA/edit?usp=sharing'; 
                        return null; }}/>
                    <Route path='/allitems/:itemType' component={AllItemsWithType} />
                    <Route path='/createresume/:itemType' component={AllResumesWithType} />
                    <Route path='/alldis/:roomId' component={AllDisWithId} />
                    <Route path='/covers/:coverId' component={AllCoversWithId} />
                    <Route exact path='/covers' render={() => <CreateCoverLetter covers={this.props.covers}  />} />
                    <Route exact path='/where' component={Where} />
                    <Route exact path='/alldis' render={() => <AllDis alldis={this.props.alldis}  />} />

                    <Redirect to='/home' />
                </Switch>
         
                <Footer />
            </div>
        );
    }
}
    

export default withRouter(connect(mapStateToProps)(Main));


