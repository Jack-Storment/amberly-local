import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WinePageTemplate = () => {
  return (
        <div>
            <div
            className="full-width-image-container margin-top-0"
            style={{
                backgroundImage: `url('/img/blog-index.jpg')`,
            }}
            >
                <h1
                    className="has-text-weight-bold is-size-1"
                    style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                    }}
                >
                    Wine Menu
                </h1>
            </div>
              <div> <img src="/img/wine.jpg" alt="Wine Menu"></img></div>
        </div>
  )
}

WinePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WinePage = () => {
  return (
    <Layout>
      <WinePageTemplate
      />
    </Layout>
  )
}

export default WinePage;
