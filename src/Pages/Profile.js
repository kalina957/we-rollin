import ImageUpload from '../components/ImageUpload'; 
import Gallery from "../components/Gallery";
import {ProfileDetails} from "../components/ProfileDetails";
import Container from 'react-bootstrap/Container';

import React, { Component } from 'react';


import styled from 'styled-components';




export class Profile extends Component{
  render(){
       return (
         <div>
  <Container>
           <ProfileDetails/>
            <ImageUpload/>
         <Gallery/> 
         </Container>
         </div>
      )
       }
      }
     export default Profile;
