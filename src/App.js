import { Box, ThemeProvider, BaseStyles, UnderlineNav } from '@primer/react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Banners from './pages/Banners'
import Buttons from './pages/Buttons'

function App() {
    const location = useLocation().pathname

    function checkRoute(path) {
        return location === path ? true : false
    }

    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <ColorModeSwitcher />
                <Box sx={{ p: 3 }}>
                    <UnderlineNav sx={{ bg: 'canvas.default' }}>
                        <UnderlineNav.Link href="/" selected={checkRoute('/')}>
                            Banners
                        </UnderlineNav.Link>
                        <UnderlineNav.Link
                            href="/button"
                            selected={checkRoute('/button')}
                        >
                            Buttons
                        </UnderlineNav.Link>
                    </UnderlineNav>
                </Box>
                <Routes>
                    <Route path="/" element={<Banners />} />
                    <Route path="/button" element={<Buttons />} />
                </Routes>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
