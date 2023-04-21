import { Box } from '@primer/react'
function Layout({ children }) {
    return (
        <Box
            sx={{
                bg: 'canvas.default',
                height: '100vh',
                width: '100%',
                display: ['block', 'block', 'flex', 'flex'],
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                padding: '1rem',
                boxSizing: 'border-box',
                m: '0 auto',
                pt: [8, 8, 0, 0],
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 925,
                    mt: [0, 0, 72, 72],
                }}
            >
                {children}
            </Box>
        </Box>
    )
}
export default Layout
