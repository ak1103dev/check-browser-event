import React, { Component } from 'react'
import Link from 'next/link'

export default class Index extends Component {
  constructor (props) {
    super(props)
    console.log('constructor', props)
  }
  componentWillMount () {
    console.log('will mount')
  }
  componentDidMount () {
    console.log('did mount')
    window.onbeforeunload = function (e) {
      var dialogText = 'Dialog text here'
      e.returnValue = dialogText
      return dialogText
    }
    window.onfocus = function () {
      console.log('focus')
    }
    window.onblur = function () {
      console.log('blur')
    }
  }

  render () {
    console.log('render')
    return (
      <div>
        Hello World
        <Link href='/about'>
          <a>here</a>
        </Link>
      </div>
    )
  }

  componentWillUnmount () {
    fetch('http://localhost:8080', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'will unmount index' })
    })
    console.log('will unmount')
  }
}
