import React, {Component} from 'react';
import {storage} from '../firebase';


import styled from 'styled-components';

const Styles = styled.div`
  button {
    border: none;
    outline: 0;
    display: inline-block;
    margin: 10px 0px; 
    color: white;
    padding:3px;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  input{
      display:inline;
  }
`
class ImageUpload extends Component{
    constructor(props){
    super(props);
    this.state ={ 
        image:null,
        url:''
    }; 
    this.handleChange = this.handleChange.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e =>{
        if(e.target.files[0]){
            const image  = e.target.files[0];
            this.setState({image});
        }
    }
    handleUpload = () =>{
        const {image} = this.state;
        
        
        const uploadNow = storage.ref(`images-133/${image.name}`).put(image);
        uploadNow.on('state_changed',(snapshot)=>{},(error)=>{console.log(error);},()=>{
            storage.ref('images-133').child(image.name).getDownloadURL().then(url=>{console.log(url); this.setState({url})});
        })
    }
    
    render(){
                return (
                    <Styles>
                <div>
                <input type="file"  onChange={this.handleChange} accept="image/*"/>
                <button onClick={this.handleUpload}>Upload</button>
               
                </div> 
                </Styles>
                )
            }
}
export default ImageUpload; //without default it gives an error