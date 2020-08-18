import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello.js';
import Kitty from './kitty.js'
import HelloKitty from './helloKitty.js'
import {Person} from './person.js'
import {PersonWithProps} from './person.js'
import {Adder} from './adder.js'


/*export default class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h1>Goodbye world</h1>
      </div>
    )
  }
}
ANSWER TO QUESTION NUMBER 1: This is a Class Component.
*/

// ANSWER TO QUESTION 2 BELOW 

function QuestionOne () {
  return (
    <div>
      <h1>Question One:</h1>
      <h2>The example code is a Class Component</h2>
    </div>
  )
}

function QuestionTwo () {
  return (
    <div>
    <h1>Hello world, this is my answer to Question 2.</h1>
    <h2>It is being rendered in the Test Function Component, found in App.JS. Goodbye world.</h2>
  </div>
  )
}

function QuestionThree () {
  return(
    <div>
      <h1>Question 3</h1>
      <h2>const [value, setValue] = useState('') </h2>
      <h2>The above Code is a hook, and replaces class components from earlier versions of React.</h2>
    </div>
  )
}

/*function QuestionFour () {
  const [title, setTitle] = useState
}
*/

class QuestionFour extends React.Component {
  constructor(props) {
    super(props)
      this.state = { title: 'Page Title'}
    }

    render () {
      return (
      <div>
        <h1>Question Four: {this.state.title}</h1>
        <p>this is the body text for this page</p>
      </div>
    )
    }
  }
  

/*class PersonWithProps extends React.Component {
  constructor(props){
      super(props)
  }

  render () {
  return (
      <div>
          <p>Name: {this.props.name}</p>
          <p>Age: {this.props.age}</p>
      </div>
  )}
}*/

function App() {
  return (
    <>
    <QuestionOne/>
    <QuestionTwo/>
    <QuestionThree/>
    <QuestionFour/>
    <Hello />
    <Kitty />
    <HelloKitty />
    <Person />
    <PersonWithProps name='John' age={20}/>
    <Adder firstNumber={7} secondNumber={3}/>
    </>
  );
}

export default App;
