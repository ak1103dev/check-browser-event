import React, { Component } from 'react'
import Link from 'next/link'

const log = message =>
  fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })

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
    log('did mount')
    window.onbeforeunload = function (e) {
      log('before unload')
      var dialogText = 'Dialog text here'
      e.returnValue = dialogText
      return dialogText
    }
    window.onfocus = function () {
      log('on focus')
      console.log('focus')
    }
    window.onblur = function () {
      log('on blur')
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
    log('will unmount')
    window.onbeforeunload = undefined
    console.log('will unmount')
  }
}
