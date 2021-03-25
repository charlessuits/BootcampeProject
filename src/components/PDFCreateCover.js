import React, { Component } from 'react';
import { PDFDownloadLink, Link, PDFViewer, Image,  Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'


function PDFCreateCover(props) {
  

  
    if (!props.state.company)
      return(<div />);
      
 
    
    // alert(localstate.fullName);
       return (
       
        <div className="container-fluid">
          <div>
          <PDFDownloadLink document={<CreatePDF state={props.state} />} fileName="cover.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
          </div>
          <PDFViewer width="100%" height="600px">
              <CreatePDF state={props.state} />
              
          </PDFViewer>
        </div>
       
    );
}

    
function pdf_rooms()
{
    return(
      <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}} ><Link src="http://charlessuits.org/allrooms">Virtual Learning Rooms</Link></Text>
    )
}
function pdf_references()
{
    return(
      <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}} ><Link src="http://charlessuits.org/References">All My References</Link></Text>
    )
}
function pdf_mywebsite()
{
    return(
      <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}} ><Link src="http://charlessuits.org" >www.charlessuits.org</Link></Text>
    )
}

function pdf_courses()
{
    return(
      <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}} ><Link src="http://charlessuits.org/sites/MrSuits.net/charlessuits/img/AllMyClasses.pdf" >University Courses Taught</Link></Text>
    )
}

function pdf_webpages()
{
    return(
      <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}} ><Link src="http://charlessuits.org/sites/MrSuits.net/charlessuits/img/websites.pdf">Webpage Samples</Link></Text>
    )
}
function pdf_around()
{
    return (
      <View>
      <Text style={{ marginLeft: "30", fontSize: "12", color: "#040404", marginRight: "20", marginLeft: "30", textAlign: 'left'}}>I have lived and worked in 13 countries and five states. I have traveled around the world many times. My first overseas post was in The Netherlands in 1977 as the European Software Manager. I spent five years traveling to support the 10 different business locations. I was the head of the Webster University MBA program in the Netherlands for five years and I was the MBA Coordinator for the Webster University in Thailand for another five years. I have learned many things about people and cultures.</Text>
     <Text> </Text>
    </View>
    );
}
function pdf_business(state)
{
  var courses;
  var references;
  var rooms;
  var webpages;
  var resume;

  if (state.courses)
  courses = pdf_courses();
if (state.webpages)
  webpages = pdf_webpages();
if (state.references)
  references = pdf_references();
if (state.rooms)
  rooms = pdf_rooms();
resume =  pdf_mywebsite();
    return (
      <View>
        <Text style={{ marginLeft: "30", fontSize: "12", color: "#040404", marginRight: "20", marginLeft: "30", textAlign: 'left'}}>During my career, I have applied my proven expertise and ongoing professional development to meet and exceed all objectives put before me. The following examples from my resume represent the absolute value I can deliver in this new role.</Text>
     <Text> </Text>
     {courses}
     {webpages}
     {references}
     {rooms}
     {resume}
     <Text> </Text>
     </View>
    );
}
function pdf_project()
{
    return (
      <View>
        <Text style={{ fontSize: "12", color: "#040404",  marginLeft: "30", marginRight: "20", textAlign: 'left'}}>I am practiced in the establishment of modern project initiatives focused on technology and digital media. I am skilled in the development of infrastructure plans and integration of smart technology. I have Software Engineering project experience focused on Workflow and Document Management. I specialize as a Photographer, Media Specialist and Website Designer.</Text>
        <Text> </Text>
      </View>
    );
}
function pdf_wanted()
{
    return (
      <View >
         <Text style={{ marginLeft: "30", fontSize: "12", color: "#040404", marginRight: "20", marginLeft: "30", textAlign: 'left'}}>I have currently settled in Las Vegas to retire. I loved coding and I am trying to get back into the full-stack development world. I am currently completing a five month full-stack bootcamp. I have many of the skills needed from my 15 years of intensive coding experience and I am learning how to translate them into modern development frameworks. I am willing to start as a beginner as I understand that it will take me a little time. My website is developed with React/Bootstrap as an example of my current level. This letter is created on this website using the React-PDF components.</Text>
          <Text> </Text>
      </View>
    );
}
function pdf_Teachwanted()
{
    return (
      <View >
         <Text style={{ marginLeft: "30", fontSize: "12", color: "#040404", marginRight: "20", marginLeft: "30", textAlign: 'left'}}>I have currently settled in Las Vegas to retire. I love to teach and I am looking for a job where I can use my experience. I am currently completing a five month full-stack bootcamp to learn the latest in Computer Science. I have taught over 120 university level courses in Business, Math, Computer Science, and Management. I also taught Middle School and High School Math, Photography, Social Studies, and Computer Science. I have also taught many Business Seminars and training courses. I have taught courses, K-12, and trainings in over 15 different countries. I can reach and connect with a variety of audiences.</Text>
          <Text> </Text>
      </View>
    );
}
function pdf_Managerwanted()
{
    return (
      <View >
         <Text style={{ marginLeft: "30", fontSize: "12", color: "#040404", marginRight: "20", marginLeft: "30", textAlign: 'left'}}>I have currently settled in Las Vegas to retire. I have worked in many different roles in Business, Law, and Education. I was the Manager of European Software at the age of 23. I was also on the Management Team at OLSY/Wang Global/Getronics, Webster University, and MAI/Basic Four. I was a Director of IT for a large International School. I have managed projects as large as five million euros. I taught many management and project management courses at the MA and MBA level to a student base that averages over 35 years old. I have taught over 120 university level courses in 25 different subjects. I have also taught many Business Seminars and training courses. I worked as a practicing attorney in Litigation on some cases that had over 1 billion dollars in dispute. I am looking to use my wealth of experience to help an enterprise grow.</Text>
          <Text> </Text>
      </View>
    );
}
// openLinkInNewTab = (e) => {
//   e.preventDefault();
//   if (e.target.tagName.toLowerCase() === 'a') {
//       window.open( e.target.href );
//   }
// }

function CreatePDF(props) {
  

var around;
var business;
var project;
var wanted;
var Teachwanted;
var Managerwanted;

  if (props.state.technical)
  {
    around= pdf_around();
    wanted = pdf_wanted();
      props.state.websites = true;
      props.state.references = true;
      props.state.rooms = true;
    business= pdf_business(props.state);
    project = pdf_project();
    around = pdf_around();
  }
  else 
  {
    if (props.state.teacher)
    {
      around= pdf_around();
      Teachwanted = pdf_Teachwanted();
      props.state.webpages = true;
      props.state.references = true;
      props.state.courses = true;
      props.state.rooms = true;
      business= pdf_business(props.state);
    }
    else 
    {
      if (props.state.management)
        {
          around= pdf_around();
          Managerwanted = pdf_Managerwanted();
          props.state.references = true;
          props.state.courses = true;
          business= pdf_business(props.state);
          project = pdf_project();
        }
        else 
        {
          if (props.state.around)
            around= pdf_around();
          if (props.state.business)
            business= pdf_business(props.state);
          if (props.state.project)
            project= pdf_project();
          if (props.state.wanted)
            wanted= pdf_wanted();
          if (props.state.Teachwanted)
            Teachwanted = pdf_Teachwanted();
          if (props.state.Managerwanted)
            Managerwanted = pdf_Managerwanted();
        }
      }
  }
  
  

        return(
           <React.Fragment>
             {/* <div className="pdf-block" onClick={this.openLinkInNewTab}> */}
               <Document>
                   <Page size="Letter" wrap={true} style={{ backgroundColor: 'white', leftMargin: "20", RightMargin: "20" }}>
                    <View>
                      <View>    
                        <Text style={{padding: "10"}}> </Text>                   
                        <Text style={{ fontSize: "15", color: "#040404",   textAlign: 'center'}}>CHARLES SUITS</Text>
                        <Text style={{fontSize: "10", color: "#303030",   textAlign: 'center'}}>3233 Southridge Ave Las Vegas, Nv 89121 -- (310) 866-1328 -- charles.suits@yahoo.com</Text>
                        <Text style={{fontSize: "10", color: "#303030",   textAlign: 'center'}}><Link src="http://charlessuits.org">charlessuits.org</Link></Text>
                          
                       </View>                        
                       
                     </View>
                     <Text>  </Text><Text>  </Text>
   
                     <View >
                         <View >
                           <Text style={{ marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}}>Attn: {props.state.fullName}</Text>
                           <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}}>{props.state.company}</Text>
                           <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}}>{props.state.address1}</Text>
                           <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}}>{props.state.address2}</Text>
                         </View>
                       </View>
                       <View>
                        <Text>  </Text>
                        <Text style={{marginLeft: "30", fontSize: "12", color: "#040404",   textAlign: 'left'}}>{props.state.dearName}: </Text>
                         <Text>  </Text>
                        <Text style={{ fontSize: "12", color: "#040404",  marginLeft: "30", marginRight: "20", textAlign: 'left'}}>I am excited to submit my application for {props.state.position} with {props.state.company}. As a professional with years of experience in the Information Technology and Education sectors and significant contributions as a management professional, I am well positioned to make a contribution to {props.state.company}.</Text>
                        <Text>  </Text>
                      </View>
                      {business}
                      {project}
                      {around}
                      {wanted}
                      {Teachwanted}
                      {Managerwanted}
                   <View>
                         
                          <Text> </Text>
                         <Text style={{marginLeft: "70", fontSize: "12", color: "#040404",   textAlign: 'left'}}>Sincerely yours,</Text>
                         <Text> </Text>
                         <Text style={{marginLeft: "70", fontSize: "12", color: "#040404",   textAlign: 'left'}}><Link src="http://charlessuits.org">Charles Suits</Link></Text>
                    </View>
                  </Page>      
               </Document>
              
           </React.Fragment>
           
   
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
export default PDFCreateCover;