import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

import Facebook from "./Facebook"
import Twitter from "./Twitter"

const SEO = ({ title, description, slug, article }) => (
  <StaticQuery
    query={query}
    render={({
               site: {
                 siteMetadata: {
                   siteUrl,
                   image,
                   twitterUsername,
                 },
               },
             }) => {
      const seo = {
        title: title,
        description: description,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${slug || "/"}`,
      }

      return (
        <>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>
          </Helmet>
          <Facebook
            pageUrl={seo.url}
            type={article ? "article" : null}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
          <Twitter
            username={twitterUsername}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
        </>
      )
    }}
  />
)

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  article: false,
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        image
        twitterUsername
      }
    }
  }
`
