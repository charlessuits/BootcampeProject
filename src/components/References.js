import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Iframe from './Iframe';
function References (props) {  
 
        
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>References</BreadcrumbItem>
                    </Breadcrumb>
                  
                    <hr />
                </div>
                
            </div>
            
                <div className= "row pt-25 pb-25 top-buffer">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-6">
                        <a href="http://charlessuits.org/sites/MrSuits.net/charlessuits/img/refStudents.pdf" className="btn btn-sm btn-info" role="button">Students/Parents</a>
                        <a href="http://charlessuits.org/sites/MrSuits.net/charlessuits/img/refBoss.pdf" className="btn btn-sm btn-info" role="button">Supervisors</a>
                        <a href="http://charlessuits.org/sites/MrSuits.net/charlessuits/img/refColleagues.pdf" className="btn btn-sm btn-info" role="button">Colleagues</a>
                    </div> 
                    <br />
                    <p> </p>                   
                </div>
                <div className="row pt-25">            
                    <div className="col" >
                        <Iframe source="http://charlessuits.org/sites/MrSuits.net/cvResume/index.html#node3" />
                       
                        
                    </div>
                </div>    
           
                   
        </div> 
    
    );
}
export default References
