import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Alex', age: 41},
      {name: 'Sabine', age: 43},
      {name: 'Julius', age: 14}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 41},
        {name: 'Sabine', age: 43},
        {name: 'Julius', age: 14}
      ],
      showPersons: false
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Alex', age: 41},
        {name: event.target.value, age: 17},
        {name: 'Julius', age: 14}
      ]
    });    
  }

  tooglePersonsHandler = () => {
    const isPersonDisplay = this.state.showPersons;

    this.setState({
      showPersons: !isPersonDisplay
    });
    
  }
//### Render Dynamic 
  // 1. Put Person into surrounding div
  // 2. Add tooglePersonsHandler
  // 3. Add a addtional State showPersons

//### Handling dynamic Content
  // 1. Remove the Render Condition
  // 2. Add variable in the render method

  render() {

    const style = {
      backroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons  = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            click={this.switchNameHandler.bind(this, 'Alex!')}
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}>My hobby: CrossFit</Person>
          <Person 
            changed={this.nameChangedHandler}
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>        
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button
          style={style} 
          onClick={this.tooglePersonsHandler}>Toogle Persons</button>
        {/* { 
          this.state.showPersons === true ? 
            <div>
            <Person 
              click={this.switchNameHandler.bind(this, 'Alex!')}
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}>My hobby: CrossFit</Person>
            <Person 
              changed={this.nameChangedHandler}
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}/>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> : null
        } */}
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Working?'));
  }

}

export default App;
