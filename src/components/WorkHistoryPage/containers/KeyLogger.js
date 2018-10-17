import React from 'react'

import WorkHistory from '../pure/WorkHistory'

class KeyLogger extends React.Component {
  state = {
    keys: [],
    unlocked: false
  }

  constructor(props) {
    super(props)

    this.handleKeyChange = this.handleKeyChange.bind(this)
  }

  checkSecret(str) {
    return ['kapteyn', 'nate', 'misty', 'jonathan', 'jason'].includes(str)
  }

  handleKeyChange(event) {
    const { keys, unlocked } = this.state

    if (
      !unlocked &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey
    ) {
      const newKeys = [...keys, event.key]

      if (this.checkSecret(newKeys.join(''))) {
        this.setState({
          unlocked: true
        })
      } else {
        this.setState({
          keys: newKeys
        })
      }
    }
  }

  componentDidMount() {
    window.document.addEventListener('keydown', this.handleKeyChange)
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.handleKeyChange)
  }

  render() {
    const { unlocked } = this.state

    return <WorkHistory onKeyPress={this.handleKeyChange} unlocked={unlocked} />
  }
}

export default KeyLogger
