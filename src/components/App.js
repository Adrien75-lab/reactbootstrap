import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';
import 'glightbox/dist/css/glightbox.min.css';
import '../assets/css/style.css';
import '../assets/js/main';
import Header from './Header';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage'
import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'
import Footer from './Footer';
import Details from './Article';
import ToDoList from "./ToDoList";
import AddTask from "./AddTask";
import data from "../data";
import uniqid from 'uniqid';
import NavBar from "./NavBar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    tasks : localStorage.getItem('data') ? JSON.parse( localStorage.getItem('data') ) : data
  }
  onAddTask = (newTaskName) => {
    let newTask = {
      id: uniqid.process(),
      name: newTaskName,
      completed : false
    }
    this.setState(prevState => ({
      tasks : [...prevState.tasks, newTask]

    }))
    setTimeout( () => {
      localStorage.setItem('data',JSON.stringify(this.state.tasks))
    },500)
  }
  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find( task => task.id === taskId )
    taskToUpdate.completed  = !taskToUpdate.completed

    this.setState(prevState => (
      prevState.tasks.map(task =>{
        // Redefini l'état
        return task.id === taskId ? taskToUpdate : task
      })
    ))
      localStorage.setItem('data',JSON.stringify(this.state.tasks));
  }
  onDeleteCompleted = () => {
    this.setState(prevState => {
      let newState = prevState.tasks.filter(task => !task.completed )
      return {
        tasks : newState
      }
    })
    setTimeout( () => {
      localStorage.setItem('data',JSON.stringify(this.state.tasks))
    },500)
  }
    shouldComponentUpdate = () => {
      
      return true

  }
  componentDidUpdate = () => {
    return true
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/contact" component={ContactPage} /> 
            <Route path="/portfolio" component={PortfolioPage} /> 
            <Route path="/services" component={ServicesPage} />
            <Route path="/article/:id" component={Details} />
            <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} /> } />
            <Route path="/ToDoList:filter?" render={ (props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} /> } />
            <Route path="/ToDoList" component={ToDoList} />
            <Route path="/" component={HomePage} />
          </Switch>
          <NavBar onDeleteCompleted ={this.onDeleteCompleted} />
        </BrowserRouter>
        
        <Footer />
      </React.Fragment>
    )
  }
}

export default App