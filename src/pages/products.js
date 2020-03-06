import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Iframe from 'react-iframe'

const embeddedUntapped = <div dangerouslySetInnerHTML={{
  __html: `<div id="menu-container"></div>
  <script type="text/javascript">
    !function(e,n){var t=document.createElement("script"),a=document.getElementsByTagName("script")[0];t.async=1,a.parentNode.insertBefore(t,a),t.onload=t.onreadystatechange=function(e,a){(a||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t=void 0,a||n&&n())},t.src=e}("https://embed-menu-preloader.untappdapi.com/embed-menu-preloader.min.js",function(){PreloadEmbedMenu("menu-container",28798,110750)});
  </script>` }}/>

export const BeerPageTemplate = () => {
  return (
        <div>
            <section className="section section--gradient">
              <Iframe url="https://business.untappd.com/embeds/iframes/28798/110750" frameborder="0" height="2000" width="100%"/>
            </section>
        </div>

  )
}

const BeerPage = () => {
  return (
    <Layout>
      <BeerPageTemplate
      />
    </Layout>
  )
}

export default BeerPage
