import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const WinePageTemplate = () => {
  console.log(styles);
  return (
        <div>
            <div
            className="full-width-image-container margin-top-0"
            style={{
                backgroundImage: `url('/img/wine-index.jpg')`,
            }}
            >
                <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  style={{
                    color: 'white',
                    lineHeight: '1',
                    padding: '0.25em',
                  }}
                >
                    Wine Menu
                </h1>
            </div>
        <section className="section">
        <div className="row" id="wine">
        <div className="column" id="container">
          <ul>
            <li style={styles.wine}>2018 Substance Cabernet Sauvignon | Washington, USA  10</li>
            <li style={styles.wine}>2018 Maipei Malbec | Mendoza, Argentina  8</li>
            <li style={styles.wine}>2018 Fernlands Sauvignon Blanc | Marlborough, New Zealand  8</li>
            <li style={styles.wine}>2018 Touzot Macon-Villages White | Burgundy, France  10</li>
            <li style={styles.wine}>Legado del Conde Albarino | Rias Biaxis, Spain  8</li>
            <li style={styles.wine}>2017 Bell Sauvignon Blanc | Napa, California  12</li>
            <li style={styles.wine}>2018 Bedrock Old Vine Zinfandel | California, USA  11</li>
            <li style={styles.wine}>Monvin Bianco Prosecco*  6</li>
            <li style={styles.wine}>*on draft</li>
          </ul>
        </div>
        </div>
        </section>   
        </div>
        
  )
}

const styles = {
  wine: {
    fontWeight: 200,
    fontFamily: "Advent Pro",
    textAlign: "center",
    fontSize: 25
  }
}

// WinePageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

const WinePage = () => {
  return (
    <Layout>
      <WinePageTemplate
      />
    </Layout>
  )
}


export default WinePage;
