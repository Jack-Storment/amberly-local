import React from 'react'
import {
  Link
} from 'gatsby'

import localBuilding from '../img/localbuilding.jpg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return ( <
      footer className = "footer" >
      <
      div className = "content has-text-centered" >
      <
      img src = {
        localBuilding
      }
      alt = "Amberly Local"
      style = {
        {
          width: '14em'
        }
      }
      /> <
      /div> <
      div className = "content has-text-centered" >
      <
      div className = "container" >
      <
      div className = "columns" >
      <
      div className = "column is-4" >
      <
      section className = "menu" >
      <
      ul className = "menu-list" >
      <
      li >
      <
      Link to = "/"
      className = "navbar-item" >
      Home <
      /Link> <
      /li> <
      li >
      <
      a className = "navbar-item"
      href = "https://direct.chownow.com/order/17058/locations/24351" >
      Order Online <
      /a> <
      /li> <
      li >
      <
      Link className = "navbar-item"
      to = "/events" >
      Events <
      /Link> <
      /li> <
      li >
      <
      Link className = "navbar-item"
      to = "/about" >
      About us <
      /Link> <
      /li> <
      /ul> <
      /section> <
      /div> <
      div className = "column is-4" >
      <
      section >
      <
      ul className = "menu-list" >
      <
      li >
      <
      Link className = "navbar-item"
      to = "/beer-menu" >
      Draft List <
      /Link> <
      /li> <
      li >
      <
      Link className = "navbar-item"
      to = "/wine-menu" >
      Wine List <
      /Link> <
      /li> <
      li >
      <
      Link className = "navbar-item"
      to = "/menu" >
      Food Menu <
      /Link> <
      /li> <
      li >
      <
      Link className = "navbar-item"
      to = "/catering" >
      Catering <
      /Link> <
      /li> <
      /ul> <
      /section> <
      /div> <
      div className = "column is-4 social" >
      <
      a title = "facebook"
      href = "https://www.facebook.com/amberlylocal/" >
      <
      img src = {
        facebook
      }
      alt = "Facebook"
      style = {
        {
          width: '1em',
          height: '1em'
        }
      }
      /> <
      /a> <
      a title = "instagram"
      href = "https://www.instagram.com/amberly_local/" >
      <
      img src = {
        instagram
      }
      alt = "Instagram"
      style = {
        {
          width: '1em',
          height: '1em'
        }
      }
      /> <
      /a> <
      /div> <
      /div> <
      /div> <
      /div> <
      /footer>
    )
  }
}

export default Footer