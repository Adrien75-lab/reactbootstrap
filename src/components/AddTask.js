import React from 'react';


class AddTask extends React.Component{
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onAddTask(this.newTask.value)
        this.props.history.push('/')
    }

    render(){
        return(
            <>
                <h1 className="m-3">New Task</h1>
                <div className="card m-3">
                    <form className="card-body" onSubmit={event => this.handleSubmit(event) }>
                        <div className="form-group m-2">
                            <label htmlFor="taskName">Task Name</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required ref={elem =>this.newTask = elem}></input>
                        </div>
                        <button type="submit" className="btn btn-primary m-2">Add Task</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddTask