import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Alex', age: 41},
      {id: '2', name: 'Sabine', age: 43},
      {id: '3', name: 'Julius', age: 14}
    ]
  };

  deletePersonHandler = (personIndex) => {
    //Don't do this
    //const persons = this.state.persons;
    
    //Create a copy and then update the state
    //Version 1
    //const persons = this.state.persons.slice();
    //Version 2
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });    
  }

  tooglePersonsHandler = () => {
    const isPersonDisplay = this.state.showPersons;

    this.setState({
      showPersons: !isPersonDisplay
    });
    
  }
//### Output Listing
// 1. Comment out Person tags
// 2. Create JS Map to iterate over the array
// 3. Remove the switchNameHandler
// 4. Create deletePersonHandler
// 5. Link the deletePersonHandler with click Event
// 6. Add an id for persons
// 7. Change nameChange Handler

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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              ></Person>
          })}
        </div>        
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button
          style={style} 
          onClick={this.tooglePersonsHandler}>Toogle Persons</button>
        {persons}
      </div>
    );
  }

}

export default App;
