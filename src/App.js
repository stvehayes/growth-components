import { Box, ThemeProvider, BaseStyles, UnderlineNav } from '@primer/react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Banners from './pages/Banners'
import Buttons from './pages/Buttons'
import DashboardPromo from './pages/DashboardPromo'

function App() {
    const location = useLocation().pathname

    function checkRoute(path) {
        return location === path ? true : false
    }

    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <ColorModeSwitcher />
                <Box sx={{ bg: 'canvas.default', p: 3 }}>
                    <UnderlineNav sx={{ bg: 'canvas.default' }}>
                        <UnderlineNav.Link href="/" selected={checkRoute('/')}>
                            Banners
                        </UnderlineNav.Link>
                        <UnderlineNav.Link
                            href="/buttons"
                            selected={checkRoute('/buttons')}
                        >
                            Buttons
                        </UnderlineNav.Link>
                        <UnderlineNav.Link
                            href="/promo"
                            selected={checkRoute('/promo')}
                        >
                            Promo
                        </UnderlineNav.Link>
                    </UnderlineNav>
                </Box>
                <Routes>
                    <Route path="/" element={<Banners />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/promo" element={<DashboardPromo />} />
                </Routes>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
