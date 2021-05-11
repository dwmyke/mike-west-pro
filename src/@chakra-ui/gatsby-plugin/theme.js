import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    config: {
        useSystemColorMode: "true",
    },
    fonts: {
        heading: "Oxygen",
        body: "Source Sans Pro",
      },
  })

  export default extendTheme(theme)