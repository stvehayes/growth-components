import { Box } from '@primer/react'
function Layout({ children }) {
    return (
        <Box
            sx={{
                bg: 'canvas.default',
                height: '90vh',
                width: '100%',
                display: ['block', 'block', 'flex', 'flex'],
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1rem',
                boxSizing: 'border-box',
                pt: [8, 8, 0, 0],
            }}
        >
            {children}
        </Box>
    )
}
export default Layout
