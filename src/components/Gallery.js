import React, { Component }from 'react';
import {storage} from '../firebase'
import ReactDOM from 'react-dom';

import { MDBCard, MDBCardBody, MDBContainer,MDBCardTitle } from "mdbreact";

import styled, { ThemeConsumer } from 'styled-components';


const Styles = styled.div`
.imagepic {
    object-fit: cover;
     width: 100%;
    height:100%;
}


.cards {
  max-width: 600px;
  height: 200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
 overflow:hidden;
  
  overflow-y: scroll;
}

// TO MATCH DIFFERENT DEVICES
@media (min-height: 650px) {
  .cards {height: 320px;}
  .cards { grid-template-columns: repeat(3, 1fr); }
}

@media (min-height: 800px) { 
  .cards {height: 450px;}

   .cards { grid-template-columns: repeat(3, 1fr); }

  }

@media (min-height: 1000px) { 
  .cards { grid-template-columns: repeat(3, 1fr); }
}
`
//https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe


var storageRef = storage.ref();
storageRef.child('images-133').listAll().then(function(result){
   result.items.forEach(function(imageRef){
      imageRef.getDownloadURL().then(url=>{

        var main = document.createElement('div');

        var image = document.createElement('img');
        image.setAttribute('src', url);
        image.setAttribute('class', 'imagepic');

      
        main.appendChild(image);
    if(document.getElementById('uploaded_pic')!=null){
      document.getElementById('uploaded_pic').appendChild(main);
    }
   });
 });
});

class Gallery extends Component{
  render() {
    return (
        <Styles>
              <div id="uploaded_pic" class="cards">
          </div>
{/* 
  <MDBCard style={{border:'none',boxShadow :'none'}}>
  <MDBCardTitle>Your profile</MDBCardTitle>
    <MDBCardBody>When you share photos,they'll appear on this page.</MDBCardBody>
  </MDBCard>  */}


  {/* https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react */}
</Styles> );
  
}
  }

export default Gallery;
