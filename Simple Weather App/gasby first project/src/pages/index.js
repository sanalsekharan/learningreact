import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style ={{color: 'tomato'}}>Hi Gatsby!</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/counter/">Go to counter</Link>
        <br/>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}
