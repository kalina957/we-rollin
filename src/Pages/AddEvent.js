import React from 'react';
import '../css/styles.css';


export const AddEvent =() =>{
    return(
        <div className="pageWrapper container">
        <div className="logoImg " >
  <div className="headerContainer">
    <h3 className="headerAddEvent"><strong>Add Event</strong></h3>
  </div>
</div>
        <div className="recipes grey-text text-darken-1 text-center">
        
          <div className="col">
            <img className="imgUpload" src={require('../assets/upload_img.png')}/>
          </div>
          <div className="recipe-details">
          <div className="recipe-title"></div>
          <input placeholder="Event Name"></input>
          <input placeholder="Time"></input>
          <input placeholder="Location"></input>
          <input placeholder="Description"></input>
          
          </div>
        </div>
        
        <div className="center">
    <button className="buttonFilter mt-4" data-target="side-form" >
      Add Event
    </button>
  </div>
  </div>
    )
}