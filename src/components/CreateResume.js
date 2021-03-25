import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

import { PDFDownloadLink, PDFViewer, Image,  Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import pic from "./chuck.png";
import expert from "./expert.png";
import skill from "./skill.png";


const MyDocument = (props) => {

    return (
        <React.Fragment>
            <Document>
                <Page size="Letter" wrap={true} style={{ backgroundColor: 'white', leftMargin: "20", RightMargin: "20" }}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                    <Text>Charles Suits</Text>
                    </View>
                    <View style={styles.headerCenter}>

                    
                      <Image style={styles.imageHead} src={pic} />
                    </View>
                    
                    <View style={styles.headerRight}>
                    <Text>Charles Suits</Text>
                    <Text>3233 Southridge Ave</Text>
                    <Text>Las Vegas, NV 89121</Text>
                    <Text>310 866-1328</Text>
                    <Text>www.charlessuits.org</Text>
                    <Text>charles.suits@yahoo.com</Text>
                    </View>
                </View>
                <React.Fragment>

                  <View style={styles.tableRowA}>
                    <View >
                      <Text>Information Technology Professional</Text>
                    </View>
                  </View>
                  <View>
                  <Text style={{fontWeight: 900, padding: 5, fontSize: "15", color: "8c2553a",  marginRight: "20",marginLeft: "10", textAlign: 'left'}}>Statement of Purpose </Text>
                   <Text style={{ fontSize: 13, color: "#5c250a",  marginLeft: "30", marginRight: "20", textAlign: 'left'}}>A top-performing professional with years of global experience and a formal educational background in the field of IT; also possesses practical experience and a J.D. in the legal field. Adept at working effectively to adapt willingly to any situation and thrive in fast-paced and time-sensitive environments. Demonstrated ability to excel in both team-centered and autonomous settings. Personable with a client-focused demeanor and solid work ethic. Currently seeking a Software Engineering/Full Stack Developer or similar position that will allow for use of technological background, as well as provide opportunities for continued professional development. Open to the possibility of working for a small startup, but also willing to join forces with a reputable and established firm.</Text>
                   <Text>  </Text>
                 </View>
                
                  <View style={styles.tableRowA}>
                   <View >
                      <Text>Key Skills Assessment</Text>
                  </View>
                 </View>
                 <View>
                   <Text style={{ padding: 5, fontSize: "14", color: "#8c351a",  marginLeft: "10", textAlign: 'left'}}>INTERPERSONAL COMMUNICATION </Text>
                   <Text style={{ fontSize: "13", color: "#5c250a", marginRight: "20", marginLeft: "30", textAlign: 'left'}}>Comfortable communicating and negotiating effectively with clients, colleagues, managers and stakeholders at all levels; possesses excellent written and verbal communication skills. Also skilled in using effective email and multi-channel service provision strategies, as well as limited proficiency in Italian and Dutch.</Text>
                 </View>
                 <View>
                   <Text style={{ fontWeight: 900, padding: 5, fontSize: "14", color: "#8c351a",  marginLeft: "10", textAlign: 'left'}}>TECHNOLOGICAL SAVVY</Text>
                   <Text style={{ fontSize: 13, color: "#5c250a",  marginLeft: "30", marginRight: "20", textAlign: 'left'}}>Practiced in the establishment of modern project initiatives focused on technology and digital media; skilled in the development of infrastructure plans and integration of smart technology; Software Engineering project experience focused on Workflow and Document Management; Photographer, Media Specialist and Website Design.</Text>
                 </View>
                 {/* <View style={styles.headerCenter}>
                    <Image style={styles.imageWidth} src={expert} />
                </View> */}

                </React.Fragment>
              
                <PDFRenderItems curr={props.curr} allitems={props.allitems} />
                
                <PDFRenderCerts curr={props.curr} allcerts={props.allcerts} />
                <PDFRenderSkills curr={props.curr} allskills={props.allskills} />
                
              </Page>
              
            </Document>
        </React.Fragment>
        

    );
}
function PDFRenderCerts(props) {
  let tempcerts = props.allcerts;
  switch(props.curr) {
    case 1:
      tempcerts = props.allcerts.filter(cert => cert.type ==='l');
      break;
    case 2:
    case 4:
      tempcerts = props.allcerts.filter(cert => cert.type ==='b');
      break;
    case 3:
     tempcerts = props.allcerts.filter(cert => cert.type ==='s');
      break;
    case 100:
    default:
        break;
      
  }
  const AllCerts= tempcerts.map(cert1 => {
     
    return(
      <React.Fragment>
         
            <PDFRenderCert cert={cert1} />  
   
        </React.Fragment>
        
    );}
    );
    return(
      <React.Fragment>
        <View  break style={styles.tableRowA}>
            <View >
                <Text>Certifications</Text>
            </View>
          </View>

      {AllCerts}
    
    </React.Fragment>
    );
   
  }
  function PDFRenderCert(props) {

    return(
      <React.Fragment>
                 
            <Text style={{ padding: "5", fontSize: "15", color: "#5c250a",  marginLeft: "30", textAlign: 'left'}}>- {props.cert.body}:</Text>
            <Text style={{ fontSize: "13", color: "#8c553a", marginLeft: "30", textAlign: 'left'}} > {props.cert.name} ({props.cert.validity})</Text>
      </React.Fragment>
    )
  }
function PDFRenderSkills(props) {
  
  let tempskills = props.allskills;
  switch(props.curr) {
    case 1:
      tempskills = props.allskills.filter(cert => cert.type ==='l');
      break;
    case 2:
    case 4:
      tempskills = props.allskills.filter(cert => cert.type ==='b');
      break;
    case 3:
     tempskills = props.allskills.filter(cert => cert.type ==='s');
      break;
    case 100:
      tempskills = props.allskills.filter(cert => cert.type ==='g');
    default:
        break;
      
  }
    const AllSkills = tempskills.map(skill1 => {
    return(
      <React.Fragment>
            <PDFRenderSkill skill={skill1} />  
        </React.Fragment>
        
    );}
    );
    return(
      <React.Fragment>
        <View  break style={styles.tableRowA}>
            <View >
                <Text>Skills</Text>
            </View>
        </View>
      {AllSkills}
    
    </React.Fragment>
    );
   
  
  }
  function PDFRenderSkill(props) {

    return(
      <React.Fragment>
        
                  
                  <Text style={{ padding: "5", fontSize: "15", color: "#5c250a", marginLeft: "30",  extAlign: 'left'}} >- {props.skill.name}:</Text><Text style={{ fontSize: "13", color: "#8c553a", marginLeft: "30", textAlign: 'left'}} > {props.skill.desc}</Text>
                      
      </React.Fragment>
  )
  }

function PDFRenderItems (props) {
  const items1 = props.allitems.map(item1 => { 
    return(
      <React.Fragment>
            <PDFRenderItem item={item1} />  
        </React.Fragment>
        
    );
 });

 const ballitems = props.allitems.filter(item => item.type==='b');
 const eallitems = props.allitems.filter(item => item.type==='e');
 const sallitems = props.allitems.filter(item => item.type==='s');
 
 const lallitems = props.allitems.filter(item => item.type==='l');
 const tallitems = props.allitems.filter(item => item.type==='t');
 

const itemss = sallitems.map(item1 => {
  return(
    <React.Fragment>
          <PDFRenderItem item={item1} />  
      </React.Fragment>
      
  );
});

const itemsl = lallitems.map(item1 => {
  return(
    < React.Fragment>
          <PDFRenderItem item={item1} />  
      </React.Fragment>
      
  );
});
const itemst = tallitems.map(item1 => {
  return(
    < React.Fragment>
          <PDFRenderItem item={item1} />  
      </React.Fragment>
      
  );
});
const itemsb = ballitems.map(item1 => {
  return(
    <React.Fragment>
          <PDFRenderItem item={item1} />  
      </React.Fragment>
      
  );
});
 
const itemse = eallitems.map(item1 => {
 
  return(
    <React.Fragment>
          <PDFRenderItem item={item1} />  
      </React.Fragment>
      
  );
})


    if (props.curr === 1)
    {
      return(
        <React.Fragment>
          <View break style={styles.tableRowA}>
            <View >
                <Text>Legal Experience</Text>
            </View>
          </View>
          {itemsl}
          <View break style={styles.tableRowA}>
                    <View >
                        <Text>Education</Text>
                    </View>
          </View>
          {itemse}
        </React.Fragment>
      );
    }
    if (props.curr === 2)
    {
      return(
        <React.Fragment>
          <View break style={styles.tableRowA}>
            <View >
                <Text>Business Experience</Text>
            </View>
          </View>
        {itemsb}
        <View break style={styles.tableRowA}>
                    <View >
                        <Text>Education</Text>
                    </View>
          </View>
        {itemse}
      </React.Fragment>
      );
    }
    if (props.curr === 3)
    {
      return(
        <React.Fragment>
          <View break style={styles.tableRowA}>
            <View >
                <Text>Educational Experience</Text>
            </View>
          </View>
        {itemss}
        <View break style={styles.tableRowA}>
                    <View >
                        <Text>Education</Text>
                    </View>
          </View>
        {itemse}
      </React.Fragment>
      );
    }
    if (props.curr === 4)
    {
      return(
        <React.Fragment>
          <View break style={styles.tableRowA}>
            <View >
                <Text>Technical Experience</Text>
            </View>
          </View>
        {itemst}
        <View break style={styles.tableRowA}>
                    <View >
                        <Text>Education</Text>
                    </View>
          </View>
        {itemse}
      </React.Fragment>
      );
    }
    if (props.curr === 100)
    {
      return(
        <React.Fragment>
          <View style={styles.tableRowA}>
            <View >
                <Text>Legal Experience</Text>
            </View>
          </View>
        {itemsl}
        <View break style={styles.tableRowA}>
            <View >
                <Text>Business Experience</Text>
            </View>
          </View>
        {itemsb}
        <View break style={styles.tableRowA}>
            <View >
                <Text>Educational Experience</Text>
            </View>
          </View>
        {itemss}
        <View break style={styles.tableRowA}>
            <View >
                <Text>Technical Experience</Text>
            </View>
          </View>
        {itemst}
        <View break style={styles.tableRowA}>
            <View >
                <Text>Education</Text>
            </View>
          </View>
        {itemse}
      </React.Fragment>
      );
    }
    
  return(
    <div>
      {itemsb}
      {itemsl}
      {itemss}
    </div>);
    
}

function PDFRenderItem(props) {

    return(
        <React.Fragment>
            <View wrap={false}>
                <View style={styles.ribbon}>
                    <View style={styles.ribbonBox}>
                      <Text style={{ padding: "5", fontSize: "16", color: "#FFFFFF", marginLeft: "30",  extAlign: 'left'}}>{props.item.company} ({props.item.from} - {props.item.end})</Text>
                      <Text style={{ padding: "5", fontSize: "15", color: "#FFFFFF", marginLeft: "30",  extAlign: 'left'}}>{props.item.title}</Text>
                    
                    </View>
              </View>                
                    <PDFRenderExperience experience={props.item.experience} />
                    <Text>   </Text>
              
             
               

            </View>
            
        </React.Fragment>
    )

    function PDFRenderExperience({experience}) {
                
        return(
         <React.Fragment>
           <View>
                {experience.map(expline => {
                    return(
                        <Text style={{ padding: "3", fontSize: "13", color: "#5c250a",  marginRight: "20",marginLeft: "20", textAlign: 'left'}}> &#8226; {expline}</Text>
                    );
    
                }
            )}   

           </View>
            
         </React.Fragment>          
        );   
    }
}
  const divStyle = {
    color: '#700000',fontsize: 4
  };
  function CreateResume (props) {
    

    
    if (!props.allitems) {
        return(<div />);

    }
    
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
            <div>
                <PDFDownloadLink document={<MyDocument curr={props.curr} allitems={props.allitems} allskills={props.allskills} allcerts={props.allcerts} />} fileName="resume.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
            <PDFViewer width="100%" height="600px">
                <MyDocument curr={props.curr} allitems={props.allitems} allcerts={props.allcerts} allskills={props.allskills} />
                
            </PDFViewer>
            
  
                
            
        </div>
    );
      
  }
  

const styles = StyleSheet.create({
    header: {
      borderTopWidth: 4,
      borderTopColor: '#0084B4',
      color: '#898989',
      padding: 20,
      display: 'flex',
      flexDirection: 'row',
    },
    headerCenter: {
      textAlign: 'center',
      flex: 1,
      alignSelf: 'center',
      fontSize: 32,
      fontWeight: 900,
      lineHeight: 1,
      color: '#0084B4',
    //   fontFamily: 'Ariel',
    },
    headerLeft: {
      textAlign: 'left',
      flex: 1,
      alignSelf: 'center',
      fontSize: 32,
      fontWeight: 900,
      lineHeight: 1,
      color: '#0084B4',
    //   fontFamily: 'Ariel',
    },
    headerRight: {
      textAlign: 'right',
      fontSize: 12,
      flex: 1,
    //   fontFamily: 'Ariel',
    },
    skill: {
      textAlign: 'left',
      fontsize: 10,
      flex: 1,
      color: '#5c250a'
    },
    skillBold: {
      textAlign: 'left',
      fontsize: 12,
      flex: 1,
      color: "black",
      fontWeight: "bold"
    },
    ribbon: {
      backgroundColor: '#0084B4',
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
      marginBottom: 10,
      textAlign: 'center',
      color: '#FFF',
    },
    ribbonSkill: {
      backgroundColor: '#ede4e4',
      display: 'flex',
      flexDirection: 'row',
      padding: 20,
      marginBottom: 20,
      color: '#FFF',
    },
    ribbonEducation: {
        backgroundColor: '00E4E4',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFF',
      },
    ribbon: {
        backgroundColor: '#0084B4',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFF',
      },
    ribbonGrey: {
      backgroundColor: '#EDEDED',
      display: 'flex',
      flexDirection: 'row',
      padding: 20,
      marginBottom: 20,
      textAlign: 'center',
      color: '#0084B4',
    },
    imageHead: {
      width: "100px"
    },
    imageWidth: {
      width: "100%"
    },
    ribbonBox: {
      width: '100%',
      color: '#ffffff'
    },
    companyName: {
        fontsize: "12",
        width: "100%",
        color: '#ffffff'
    },
    titleBox: {
        fontsize: "16",
        width: "100%",
        color: '#ffffff'
    },
    experLine: {
        fontsize: 13,
        color: '#903030',
        flex: 1,
        textAlign: "left"
    },
    ribbonLabel: {
      fontSize: 14,
    //   fontFamily: 'KadwaBold',
    },
    ribbonValue: {
      fontSize: 28,
    //   fontFamily: 'KadwaBold',
    },
  
    table: {
      paddingHorizontal: 20,
      display: 'flex',
      marginBottom: 20,
    },
    tableRowA: {
      backgroundColor: '#EDEDED',
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
    },
    tableRowB: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
    },
    serviceName: {
      fontSize: 10,
      width: '25%',
      fontFamily: 'KadwaBold',
    },
    serviceDescription: {
      fontSize: 10,
      width: '50%',
      fontFamily: 'MontserratRegular',
    },
    serviceAmount: {
      fontSize: 20,
      width: '25%',
      textAlign: 'right',
      fontFamily: 'KadwaBold',
    },
    tableHeadingA: {
      width: '100%',
      fontSize: 14,
      color: '#B06060',
      padding: 10
    //   fontFamily: 'KadwaBold',
    },
    tableHeadingB: {
      width: '50%',
      fontSize: 14,
      color: '#0084B4',
      fontFamily: 'KadwaBold',
    },
    tableHeadingC: {
      width: '25%',
      textAlign: 'right',
      fontSize: 14,
      color: '#0084B4',
      fontFamily: 'KadwaBold',
    },
    summary: {
      backgroundColor: '#0084B4',
      color: '#FFF',
      padding: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    summaryMeta: {
      width: '75%',
      fontFamily: 'KadwaBold',
    },
    summaryAmount: {
      fontSize: 20,
      width: '25%',
      textAlign: 'right',
      fontFamily: 'KadwaBold',
    },
  
    howToPay: {
      paddingHorizontal: 20,
      textAlign: 'center',
      fontSize: 20,
      color: '#0084B4',
      fontFamily: 'KadwaBold',
    },
  
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 20,
      borderTopColor: '#EDEDED',
      borderTopWidth: 1,
      textAlign: 'center',
      fontSize: 10,
    //   fontFamily: 'MontserratRegular',
    },
  });
  



  export default CreateResume;