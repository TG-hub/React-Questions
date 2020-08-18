import React from 'react'
import './App.css'
import App from './App.js'

export {Person} 
export {PersonWithProps}


function Person () {
    return (
        <div>
            <p>Name: John</p>
            <p>Age: 20</p>
        </div>
    )
}

class PersonWithProps extends React.Component {
    constructor(props){
        super(props)
        this.state= {name:'John'}
    }
    
    
    render () {
    return (
        <div>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
        </div>
    )}
}