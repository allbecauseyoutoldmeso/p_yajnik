import React from "react"
import Footer from "./footer"
import Menu from "./menu"

export default ({ children }) => (
  <div className="container-fluid">
    <Menu />
    {children}
    <Footer/>
  </div>
)
