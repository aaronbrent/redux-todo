import React from 'react';
//import addTodo and connect
import {AddFormComponent} from './AddFormComponent';

import {actions} from '../../redux/actions/';
import {connect} from 'react-redux';

export class AddFormContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      todo:{
        title: '',
        description: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    e.persist();
    this.setState(prevState=>{
      return {
        todo: {...prevState.todo,
        [e.target.name]: e.target.value}
      }
    })
  }
  render(){
    console.log(this.state.todo)
    return(
        <div>
          <AddFormComponent todo={this.state.todo} handleChange={this.handleChange}/>
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return state
}
//
export default connect(null, actions)(AddFormComponent);
// import and render form components
//handle local inputs
