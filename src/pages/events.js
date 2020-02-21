import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { FacebookProvider, Page } from 'react-facebook';

export const EventPageTemplate = () => {
  return (
        <div className="container">
          <div style={{display: "flex", alignItems:"center", paddingLeft: "30rem", width:"100%"}}>
            <FacebookProvider appId="650386135534204">
                <Page href="https://www.facebook.com/amberlylocal/" tabs="events"/>
            </FacebookProvider>   
          </div>
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
