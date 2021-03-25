import React  from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Iframe from './Iframe';
import Button from 'react';

function Resume (props) {   
    
        
   
    
    return (
        <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Resume</BreadcrumbItem>
                </Breadcrumb>
                <h2>Resume</h2>
                <hr />
            </div>
        </div>
        <div className="row">
            
            <div className="col-12">
       
                <Iframe source='http://www.charlessuits.org' />
            </div>
        </div>
    </div>   
    );
}



export default Resume;