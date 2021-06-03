import React from "react";
import { FaCheck } from "react-icons/fa";
class ToDo extends React.Component{
  state = {
    completed: this.props.task.completed
  }

  toggleCompleted = () => {
    this.setState(prevState => ({
      completed: !prevState.completed
    }))
    this.props.onToggleCompleted(this.props.task.id)
  }
    render(){
        return(
            <li className={"list-group-item " + (this.state.completed ? "bg-success text-white" : null)}>
            {this.props.task.name}
            <button className={"btn btn-sm btn-outline-success float-end" + (this.state.completed ? "btn-outline-light": null)} onClick={ () => this.toggleCompleted() }>
              <FaCheck />
            </button>
          </li>
            
        )
    }
}
export default ToDo