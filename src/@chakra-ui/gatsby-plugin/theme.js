import { extendTheme } from "@chakra-ui/react"
import "@fontsource/oxygen"
import "@fontsource/source-sans-pro"

const theme = extendTheme({
    config: {
        useSystemColorMode: "true",
    },
    fonts: {
        heading: "Oxygen",
        body: "Source Sans Pro",
      },
      global: {
        ".mdx-prose": {
          h1: {
            fontSize: "xl",
            mb: "4",
          },
          p: {
            fontSize: "sm",
            lineHeight: "1.4",
          },
        },
      },
  })

  export default extendTheme(theme)