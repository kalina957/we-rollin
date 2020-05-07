import React from 'react';
import {storage} from '../firebase'

import styled from 'styled-components';



const Styles = styled.div`


.card {
    height: 10rem;
    weight: 30rem;
  }
.circleCard{
    height: 20rem;
    weight:7rem;
    border-radius: 50%;
   
}
.image{
    height: 9rem;
    width:9rem;
    weight:8rem;
    border-radius: 50%;

}
  .cardsProfile {
    max-width: 900px;
    display: grid;
    grid-gap: 1rem;
    padding:4px;
    margin:4px;
  }
  button {
    border: none;
    outline: 0;
    display: inline-block;
    margin-top: 10px; 
    color: white;
    padding:3px;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  @media (min-width: 100px) {
    .cardsProfile { grid-template-columns: repeat(2, 1fr); grid-gap: 0rem 2rem; }
  }
  
  button:hover, a:hover {
    opacity: 0.7;
  }
`
//https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe

export const ProfileDetails =()=>(
<Styles>
<div class="cardsProfile">
    <div class="cicrleCard">
    <img class="image" src="https://source.unsplash.com/400x300?/skatergirl"></img>
    <p><button>Edit Profile</button></p>
    </div>
    <h5>Alexander Rybak </h5>
    
</div>
    

</Styles>
);