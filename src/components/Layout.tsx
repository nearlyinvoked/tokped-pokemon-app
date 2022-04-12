import React from 'react'
import Navbar from './header/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
    </>
  )
}

export default Layout
