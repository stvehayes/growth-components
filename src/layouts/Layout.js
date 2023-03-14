import { Box } from '@primer/react'
function Layout({ children }) {
    return (
        <Box
            bg="canvas.default"
            height="100vh"
            width="100vw"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            padding="2rem"
            boxSizing="border-box"
        >
            {children}
        </Box>
    )
}
export default Layout
