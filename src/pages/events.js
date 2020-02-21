import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const EventPageTemplate = () => {
  const fbEventHtml = '<div class="fb-page" data-href="https://www.facebook.com/amberlylocal/" data-tabs="events" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/amberlylocal/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/amberlylocal/">Amberly Local</a></blockquote></div>';
  return (
        <div>
            <div className="content" dangerouslySetInnerHTML={{__html: fbEventHtml}}></div>
        </div>
  )
}

const EventPage = () => {
  return (
    <Layout>
      <EventPageTemplate
      />
    </Layout>
  )
}

export default EventPage
