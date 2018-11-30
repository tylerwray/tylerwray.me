import React from 'react'

interface Props {
  children: React.ReactNode
}

function Main({ children }: Props) {
  return <main style={{ paddingTop: 60 }}>{children}</main>
}

export default Main
