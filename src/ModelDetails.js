import React,{Component}from 'react';
import './App.css';
import PropTypes from "prop-types";

class ModelDetails extends Component {
    static propTypes = {
        name: PropTypes.string,
        manufacturer: PropTypes.string,
        year: PropTypes.number,
        origin: PropTypes.string
      }
  

    render(){    
        return this.props.selectedModels.map((model,index) => (
            <ul>
                <li> name : {model.name}</li> 
                <li> manufacturer : {model.manufacturer}</li> 
                <li> year : {model.year}</li> 
                <li> origin : {model.origin}</li>      
            </ul>
    ))

}}

export default ModelDetails;

