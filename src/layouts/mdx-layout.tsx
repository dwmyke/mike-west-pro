import React from 'react'

// 1. Wrap the rendered mdx in a container
const MDXWrapper = (props) => <div className="mdx-prose" {...props} />

// 2. Define global styles
// PRO TIP: Again, you can also use the function version here
const theme = {
  styles: {
    global: {
      ".mdx-prose": {
        h1: {
          fontSize: "2xl",
          mb: "4",
        },
        p: {
          fontSize: "sm",
          lineHeight: "1.4",
        },
      },
    },
  },
}

// 3. That's it! Your app will now read and use the global styles

export default MDXWrapper