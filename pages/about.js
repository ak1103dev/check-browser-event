import React, { Component } from 'react'

export default class Index extends Component {
  constructor (props) {
    super(props)
    console.log('about')
    console.log('constructor', props)
  }
  componentWillMount () {
    console.log('about')
    console.log('will mount')
  }
  render () {
    console.log('about')
    console.log('render')
    return (
      <div>
        About
      </div>
    )
  }
  componentDidMount () {
    console.log('about')
    console.log('did mount')
  }
  componentWillUnmount () {
    console.log('about')
    console.log('will unmount')
  }
}
