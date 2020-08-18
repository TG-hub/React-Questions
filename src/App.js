import React from 'react';
import logo from './logo.svg';
import './App.css';


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

function App() {
  return (
    <>
    <QuestionOne/>
    <QuestionTwo/>
    <QuestionThree/>
    </>
  );
}

export default App;
