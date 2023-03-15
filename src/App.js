import { ThemeProvider, BaseStyles, UnderlineNav } from '@primer/react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Banners from './pages/Banners'

function App() {
    const location = useLocation().pathname

    function checkRoute(path) {
        return location === path ? true : false
    }

    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <ColorModeSwitcher />
                <UnderlineNav>
                    <UnderlineNav.Link href="/" selected={checkRoute('/')}>
                        Banners
                    </UnderlineNav.Link>
                    <UnderlineNav.Link
                        href="/banners"
                        selected={checkRoute('/banners')}
                    >
                        Next
                    </UnderlineNav.Link>
                </UnderlineNav>
                <Routes>
                    <Route path="/" element={<Banners />} />
                </Routes>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
