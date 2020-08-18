import React from 'react'
import './App.css'
import Hello from './hello.js'
import Kitty from './kitty.js'

export default HelloKitty

function HelloKitty () {
    return (
        <div>
            <Hello />
            <Kitty />
        </div>
    )
}