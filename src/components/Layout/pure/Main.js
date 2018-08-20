import React from 'react'
import PropTypes from 'prop-types'

function Main({ children }) {
  return <main style={{ paddingTop: 60 }}>{children}</main>
}

Main.propTypes = {
  children: PropTypes.object.isRequired
}

export default Main
