import React, { Component } from 'react';
import { PDFDownloadLink, Link, PDFViewer, Image,  Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

import Tabletop from 'tabletop';

function RenderTastings(props) {
                alert(props.items.length);
                alert('inside');
    if (props.items.length) {
    
        alert(props.items[0].WineName);
        return(
       
            <View>
                
                {props.items.map((item1) => {
                    return(
                        <View>
                        <Text> kdsjfslkjflsdjf</Text>
                       
                            <Text style={{marginLeft: "70", fontSize: "12", color: "#040404",   textAlign: 'left'}}>
                                {item1.WineName} test
                            </Text>
                        </View>
                    );

                }
            )}
            </View>
        );
    }
    else
        return(<View></View>);
   
}
class TastingsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: []
      }
  }

  getData() {
    alert("here")
      Tabletop.init( {
        key: 'https://docs.google.com/spreadsheets/d/1Ig8eqduMOcTv2zf0SepzBJLpEVdXgsb4zoPpsGX7xDA/edit#gid=917834120',
        simpleSheet: true }
      ).then(wineList => {
        //   console.log(wineList);
        this.setState({data: wineList });
    });
    // const items = this.state.data.map(item1 => {
       
    //     return (
    //         <View className="container-fluid">
    //             <View className="row">
    //                 {item1.WineName}
    //             </View>
    //         </View>
          
    //     );
    // });
        
}
  componentDidMount() {
     this.getData();
  }

  render() {
     
    //   console.log(this.state.data);
    //  this.state.data.map((one) => alert(one.WineName));
      alert(this.state.data.length);
      const output1 = this.state.data;
      console.log(output1);
    return (
      <View >
        {output1.map((item1)=> {
            <Text style={{marginLeft: "70", fontSize: "12", color: "#040404",   textAlign: 'left'}}>
                1. {item1.WineName}
            </Text>
        })}
      </View>
    );
  }
}


export default TastingsApp;
