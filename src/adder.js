import React from 'react'
import './App.css'
import App from './App.js'

export {Adder}

//const [number1, addNumber] = useState({number2})

class Adder extends React.Component {
    constructor(props) {
        super(props)
        this.state=0
    }

    render() {
        return (
            <div>
                <p>{this.props.firstNumber + this.props.secondNumber}</p>
            </div>
        )
    }
}