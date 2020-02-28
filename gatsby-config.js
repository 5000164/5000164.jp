const trackingId = "UA-139882639-1"
const anonymize = true

module.exports = {
  siteMetadata: {
    title: `About 5000164`,
    description: `About my profile.`,
    consent: {
      text: "このウェブサイトでは Cookie を使用します。<a href='/privacy/'>詳細はこちら</a>",
      accept: "同意する",
      decline: "同意しない",
    },
    siteUrl: `https://5000164.jp`,
    image: `/icon.png`,
    twitterUsername: `@5000164`,
    trackingId,
    anonymize,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `About 5000164`,
        short_name: `About 5000164`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://5000164.jp`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId,
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize,
        },
        facebookPixel: {
          pixelId: "",
          cookieName: "gatsby-gdpr-facebook-pixel",
        },
        environments: ["production", "development"],
      },
    },
  ],
}
