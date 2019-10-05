import React,{Component}from 'react';
import { connect } from 'react-redux'
import './App.css';
import store from './store';
import ModelDetails from './ModelDetails'


class App extends Component {
  state ={
    selectedValue : ""}

  
updateSelection=(event)=>{
  event.preventDefault()

let selectedItem = this.props.models.find((model) => {
      if(model.name===event.target.value)
        return model
      
})
// updated the local state of App
this.setState({selectedValue:selectedItem})  
}

ADD = (event)=>{
  event.preventDefault()

  const action ={
    type : 'ADD-MODEL',
    payload : this.state.selectedValue
  }

  store.dispatch(action)

}

render(){
    return (
      <div><br></br><br></br>
        <select onChange={this.updateSelection} >
          <option value="">-- pick a model --</option>
          {this.props.models.map((model) => <option value={model.name}>{model.name} ({model.year})</option>)}
        </select>
        <button onClick={this.ADD}>Add</button>
        <ModelDetails selectedModels={this.props.selectedModels} />
      </div>
    )
    }
  }

  
const mapStateToProps = (state) => {
  
  return {
    selectedModels: state,  
      
    models: [
        {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ]
  }
}

export default connect(mapStateToProps)(App)
