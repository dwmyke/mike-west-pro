module.exports = {
  siteMetadata: {
    title: "Mikel-Jon West Portfolio",
    description: "Portfolio site for Mikel-Jon West",
    keywords: [`portfolio`, `video editor`, `media`, `production`, `graphic designer`],
    siteUrl: `https://mikewest.pro/`,
    siteImage: '/images/splash.jpg',
    lang: 'en',
    type: 'website',
  },
  plugins: [
    
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'dominantColor',
        },
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-remark-images`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
      },
      __key: "content",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-mdx-embed`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // Todo: Layouts

        defaultLayouts: {
        //   posts: require.resolve("./src/components/posts-layout.js"),
           default: require.resolve("./src/layouts/layoutMdx.js"),
        },
        gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1280,
							linkImagesToOriginal: false,
						},
					},
				],
      },
    },
    
   
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {number} [portalZIndex=40]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: 40,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Mikel-Jon West Protfolio',
        short_name: 'Mike West Pro',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: "src/images/profile.png",
        lang: `en`,
      },
    },
  ],
};
