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
            <div className="container">
                Wine by the glass:
                <ul>
                  <li>2018 Substance Cabernet Sauvignon | Washington, USA  10</li>
                  <li>2018 Maipei Malbec | Mendoza, Argentina  8</li>
                  <li>2018 Fernlands Sauvignon Blanc | Marlborough, New Zealand  8</li>
                  <li>2018 Touzot Macon-Villages White | Burgundy, France  10</li>
                  <li>Legado del Conde Albarino | Rias Biaxis, Spain  8</li>
                  <li>2017 Bell Sauvignon Blanc | Napa, California  12</li>
                  <li>2018 Bedrock Old Vine Zinfandel | California, USA  11</li>
                  <li>* Monvin Bianco Prosecco |  6</li>
                </ul>
            </div>
            <section className="section section--gradient">
                *On draft
            </section>
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
