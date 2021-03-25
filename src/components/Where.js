import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Iframe from './Iframe';
function Where (props) {  
 
        
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Where</BreadcrumbItem>
                    </Breadcrumb>
                  
                    <hr />
                </div>
                
            </div>
       
            <div className="container-fluid" >
            
                <h2 className="text-center">Interesting Facts</h2>

                <div className="row pt-25 top-buffer">            
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4"  >
                        <h6 style={{color: 'black'}}>Where I have <b className="bg-success">been</b>.
                        </h6>
                        <h6 style={{color: 'black'}} className="word-wrap">Where I have <b className="bg-danger">lived</b>.</h6>
                        <ul>Countries
                
                            <li style={{color: '#700000'}}>The Netherlands (3 times)</li>
                            <li style={{color: '#700000'}}>Italy (2 times)</li>
                            <li style={{color: '#700000'}}>China</li>
                            <li style={{color: '#700000'}}>England (2 times)</li>
                            <li style={{color: '#700000'}}>Hong Kong</li>
                            <li style={{color: '#700000'}}>Thailand (2 times)</li>
                            <li style={{color: '#700000'}}>Korea</li>
                            <li style={{color: '#700000'}}>Saudi Arabia</li>
                            <li style={{color: '#700000'}}>Germany</li>
                            <li style={{color: '#700000'}}>Uruguay</li>
                            <li style={{color: '#700000'}}>Vietnam</li>
                            <li style={{color: '#700000'}}>Laos</li>
                            <li style={{color: '#700000'}}>United States (Michigan, Colorado, California, Texas, Florida, Virginia)</li>
                        </ul>
                    </div>
                    <div class="col-sm-7 pb-20" >
                        <img src="http://charlessuits.org/sites/MrSuits.net/charlessuits/img/world.jpg" width="100%" />
                    </div>  
            
                </div>
                <div class="row pt-25 top-buffer">
            
            
            <div class="col-sm-1"></div>
            <div class="col-sm-5" >
                <ol><b>My Homes</b>
                    <li style={{color: '#700000'}}>Ann Arbor</li>
                    <li style={{color: '#700000'}}>Boulder, Co. Columbine
                    </li>
                    <li style={{color: '#700000'}}>Boulder, Co. Baker Hall
                    </li>
                    <li style={{color: '#700000'}}>Boulder, Co. Williams Village
                    </li>
                    <li style={{color: '#700000'}}>Boulder, Co. Madison Park
                    </li>
                    <li style={{color: '#700000'}}>Boulder, Co. 18th Street
                    </li>
                    <li style={{color: '#700000'}}>Boulder, Co. Gunbarrel Meadows</li>
                    <li style={{color: '#700000'}}>Boulder, Co. Gunbarrel-New apt.
                    </li>
                    <li style={{color: '#700000'}}>Boulder, Co. 39th Street</li>
                    <li style={{color: '#700000'}}>Belleville, Mi Lemon Tree</li>
                    <li style={{color: '#700000'}}>Irvine, Ca.
                    </li>
                    <li style={{color: '#700000'}}>Amsterdam, Netherlands</li>
                    <li style={{color: '#700000'}}>Bilderdam, NL
                    </li>
                    <li style={{color: '#700000'}}>Milan, Italy
                    </li>
                    <li style={{color: '#700000'}}>Ann Arbor, Mi.
                    </li>
                    <li style={{color: '#700000'}}>Huntington Beach, Ca. Lake St</li>
                    <li style={{color: '#700000'}}>Huntington Beach, Ca. Doncaster Dr.
                    </li>
                    <li style={{color: '#700000'}}>Beijing, China
                    </li>
                    <li style={{color: '#700000'}}>Beijing, China (new building)</li>
                    <li style={{color: '#700000'}}>Hong Kong</li>
                    <li style={{color: '#700000'}}>Ann Arbor, Mi</li>
                    <li style={{color: '#700000'}}>Guildford, England
                    </li>
                    <li style={{color: '#700000'}}>Noordwijk, NL
                    </li>
                    <li style={{color: '#700000'}}>Noordwijkerhout, NL</li>
                    <li style={{color: '#700000'}}>Boulder, Co</li>
                    <li style={{color: '#700000'}}>Fairfax, Va.
                    </li>
                    <li style={{color: '#700000'}}>Sassenheim, NL
                    </li>
                    <li style={{color: '#700000'}}>Wassenaar, NL
                    </li>
                    <li style={{color: '#700000'}}>Bangkok, Thailand Teacher Housing</li>
                    <li style={{color: '#700000'}}>Bangkok, Thailand House on Samakee Road
                    </li>
                    <li style={{color: '#700000'}}>Bangkok, Thailand Apartment on Phahunyothyn
                    </li>
                    <li style={{color: '#700000'}}>Songdo, Korea</li>
                    <li style={{color: '#700000'}}>Florence, Italy
                    </li>
                    <li style={{color: '#700000'}}>Montevideo, Uruguay
                    </li>
                    <li style={{color: '#700000'}}>Jeddah, Saudi Arabia
                    </li>
                    <li style={{color: '#700000'}}>Houston, Texas
                    </li>
                    <li style={{color: '#700000'}}>Lotus Apartments, Ho Chi Minh City, Vietnam</li>
                    <li style={{color: '#700000'}}>Moonlight Apartments, Ho Chi Minh City, Vietnam
                    </li>
                    <li style={{color: '#700000'}}>Tropic Garden A, Ho Chi Minh City, Vietnam
                    </li>
                    <li style={{color: '#700000'}}>Tropic Garden C, Ho Chi Minh City, Vietnam</li>
                    <li style={{color: '#700000'}}>Dresden, Germany
                    </li>
                    <li style={{color: '#700000'}}>Vientiane, Laos</li>
                    <li style={{color: '#700000'}}>Pattaya, Thailand</li>
                    <li style={{color: '#700000'}}>Las Vegas, Nevada</li>
                </ol>
            </div>
            <div class="col-sm-5" >
                <ol><b>Jobs Before Graduation</b>
                    <li style={{color: '#700000'}}>Paper Route: Ann Arbor News</li>
                    <li style={{color: '#700000'}}>Paper Route: Detroit Free Press</li>
                    <li style={{color: '#700000'}}>New Paper Route: Ann Arbor News</li>
                    <li style={{color: '#700000'}}>Dishwasher: Ramada Inn</li>
                    <li style={{color: '#700000'}}>Bus Tables: Bill Knapps Restaurant</li>
                    <li style={{color: '#700000'}}>Host at Door: Bill Knapps Restaurant</li>
                    <li style={{color: '#700000'}}>Cashier: Bill Knapps Restaurant</li>
                    <li style={{color: '#700000'}}>Cook: Bill Knapps Restaurant</li>
                    <li style={{color: '#700000'}}>First Male Waiter: Bill Knapps Restaurant</li>
                    <li style={{color: '#700000'}}>Night Supervisor: Bill Knapps Restaurant</li>
                    <li style={{color: '#700000'}}>Audit/Porter: Holiday Inn</li>
                    <li style={{color: '#700000'}}>Porter: Holiday Inn</li>
                    <li style={{color: '#700000'}}>Desk Clerk: Holiday Inn</li>
                    <li style={{color: '#700000'}}>Banquet Bus Boy: Sheraton Hotel</li>
                    <li style={{color: '#700000'}}>Desk Clerk: Holiday Inn</li>
                    <li style={{color: '#700000'}}>Night Auditor: Holiday Inn</li>
                    <li style={{color: '#700000'}}>Counselor: The Station</li>
                    <li style={{color: '#700000'}}>Lifeguard Georgetown</li>
                    <li style={{color: '#700000'}}>Lifeguard Racquet Club</li>
                    <li style={{color: '#700000'}}>Waiter: Red Lion Inn</li>
                    
                </ol>
                <ol><b>Jobs After Graduation</b>
                    <li style={{color: '#700000'}}>Computer Programmer: General Motors, Detroit, Mi.</li>
                    <li style={{color: '#700000'}}>Information Analyst: MAI Basic Four, Ca</li>
                    <li style={{color: '#700000'}}>Quality Assurance Testing: MAI Basic Four, Ca.</li>
                    <li style={{color: '#700000'}}>European Software Support: MAI, Amsterdam</li>
                    <li style={{color: '#700000'}}>European Software Manager: MAI, Amsterdam</li>
                    <li style={{color: '#700000'}}>Country Software Manager: MAI Italy, Milaan</li>
                    <li style={{color: '#700000'}}>Senior Trainer: Database Design, Mi</li>
                    <li style={{color: '#700000'}}>Software Consultant: MAI Netherlands</li>
                    <li style={{color: '#700000'}}>Software Engineer: Filenet Corporation, Ca</li>
                    <li style={{color: '#700000'}}>Application Consultant: Filenet Corporation, Ca.</li>
                    <li style={{color: '#700000'}}>Product Manager CAD/CAM Manager, Wang China, Beijing</li>
                    <li style={{color: '#700000'}}>Product Manager Ideographic: Wang China, Beijing</li>
                    <li style={{color: '#700000'}}>Product Manager Newspaper System: Wang China, Beijing</li>
                    <li style={{color: '#700000'}}>Director Document Management: Datagraphics, Mi</li>
                    <li style={{color: '#700000'}}>Director Document Imaging: Spectrum Datagraphics, UK, London</li>
                    <li style={{color: '#700000'}}>Application Architect: MAI Netherlands</li>
                    <li style={{color: '#700000'}}>Consultant: MAI/Basic Four, Ca.</li>
                    <li style={{color: '#700000'}}>Law Student: George Washington University, Wash. D.C.</li>
                    <li style={{color: '#700000'}}>Legal Research: U.S. Supreme Court, Wash. D.C.</li>
                    <li style={{color: '#700000'}}>Software Patents: Roberts Associates, Virginia</li>
                    <li style={{color: '#700000'}}>Major Crimes Investigator: Public Defender, Wash. D.C.</li>
                    <li style={{color: '#700000'}}>Summer Law Intern: Swidler & Berlin, Wash. D.C</li>
                    <li style={{color: '#700000'}}>Associate Attorney: Swidler & Berlin, Wash. D.C.</li>
                    <li style={{color: '#700000'}}>Project Manager: Olivetti Systems, Holland</li>
                    <li style={{color: '#700000'}}>Director of Solutions: Olivetti Systems, Holland</li>
                    <li style={{color: '#700000'}}>Director of Workflow: Cedar Data, London</li>
                    <li style={{color: '#700000'}}>Head of Department of Business and Economics, Webster University, Holland</li>
                    <li style={{color: '#700000'}}>Adjunct Professor, Webster University, Bangkok</li>
                    <li style={{color: '#700000'}}>Professor, Fashion Academy, Bangkok (Organizational Behavior)</li>
                    <li style={{color: '#700000'}}>Substitute Teacher International School Bangkok (3-8 grade)</li>
                    <li style={{color: '#700000'}}>UNESCO - Senior Project Manager -- Technology in Education</li>
                    <li style={{color: '#700000'}}>HS and MS Social Studies Teacher Keera-Pat International School</li>
                    <li style={{color: '#700000'}}>Director of Educational Technology, Songdo International School</li>
                    <li style={{color: '#700000'}}>ICT Coordinator/Teacher, International School of Florence</li>
                    <li style={{color: '#700000'}}>ICT Coordinator/Teacher, Uruguayan American School</li>
                    <li style={{color: '#700000'}}>Director of IT and Integration, American International School of Jeddah</li>
                    <li style={{color: '#700000'}}>Online Instructor, Teach-Now School of Education, Washington D.C.</li>
                    <li style={{color: '#700000'}}>High School Math Teacher, Houston, Tx.</li>
                    <li style={{color: '#700000'}}>Middle School ICT Teacher, Houston, Tx.</li>
                    <li style={{color: '#700000'}}>The American School, Ho Chi Minh City, Vietnam</li>
                    <li style={{color: '#700000'}}>Substitute Teacher, Washtenaw County, Michigan</li>
                    <li style={{color: '#700000'}}>Laos, IT Manager</li>
               
                    
                </ol>
            </div>
                              
        </div> 
            </div>
           
        </div>
            
  


    
    );
}
export default Where
