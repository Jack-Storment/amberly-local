import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BeerPageTemplate = () => {
  return (
        <div>
            <div
            className="full-width-image-container margin-top-0"
            style={{
                backgroundImage: `url('/img/beer-index.jpg')`,
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
                    Beer Menu
                </h1>
                
            </div>
            <div className="container">
                Hello
            </div>
            <section className="section section--gradient">
                Hello
            </section>
            <div id="menu-container"></div>
            <div id="menu-container"></div>
            <script
            />
        </div>

  )
}

BeerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
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
