import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactPDF, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const divStyle = {
    color: '#700000',fontsize: 4
  };
function RenderExperience({experience}) {
                
        return(
            <div>
                {experience.map(expline => {
                    return(
                        <li style={divStyle}>{expline}</li>
                    );

                }
            )}
            </div>
        );
                

}

function RenderItem({item}) { 
    const divStyle = {
        color: '#700000'  
      }; 
      const backStyle = {
        background: '#cbd7b6'  
      }; 
      const colStyle = {
        background: '#70463f'  
      }; 
    if (item) { 
      
        return (
          <React.Fragment>
    
              <div className="col-sm-1"></div>
              <div className="col-sm-5 pb-20 border border-dark" style={backStyle}
              >
                <h5 style={divStyle}><strong> {item.company}</strong> {item.from}-{item.end}</h5>

                <h6 style={divStyle}> {item.title}</h6>
                <ul>
                  <RenderExperience experience={item.experience} />
                </ul>
                <a href={item.imagelink}>
                  <img width="60%" src={item.image} />
                </a>
                <p> </p>
              </div>
              <div className="col-sm-5 border border-dark" style={colStyle}>
                <p> </p>
                <a href={item.rightlink}>
                  <img width="95%" src={item.rightimage} />
                </a>
                <p> </p>
                <p> </p>
              
                <a href={item.rightlink2}>
                  <img width="100%" src={item.rightimage2} />
                </a>
                <p> </p>
              </div>
            
          </React.Fragment>
        );
    }
    return <div />;
}

function AllItems(props) {
 
   
    const items = props.allitems.map(item1 => {
       
        return (
            <div className="container-fluid">
                <div className="row">
                    <RenderItem item={item1} />
                </div>
            </div>
          
        );
    });

    
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Resume</BreadcrumbItem>
                    </Breadcrumb>
                
                    <hr />
                </div>
            </div>
            
                {items}
            
        </div>
    );
}

export default AllItems ;